import React, { Component } from 'react';
import { withFirebase } from './components/Firebase';

import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './components/Homepage';
import About from './components/Aboutpage';
import Detail from './components/Detailpage';


import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projects: [],
          projectcovers: [],
          loading: true,
          currentProject: 0,
          selProject: {
            "descr" : "",
            "labels" : {
              "label1" : "",
            },
            "links" : {
              "link1" : ""
            },
            "name" : "",
            "time" : "",
            "title" : "Select a project in home"
          },
        };
        this.toDetail = this.toDetail.bind(this);
        this.toNext = this.toNext.bind(this);
      }



    componentDidMount() {
      // ! Creating snapshot of database > object
      this.props.firebase.projects().on('value', snapshot => {
          const ProjectsObject = snapshot.val();
          // ! Object > Array (w uid's)
          const projectsList = Object.keys(ProjectsObject).map((key) => {
            return(
            {...ProjectsObject[key],
              uid: key})
          });
          this.setState({
            projects: projectsList,
        });

          const projectsCoverlist = Object.keys(ProjectsObject).map((key) => {
            // ! Creating array of promises (that incl other attr from ProjectsObject)
            return new Promise((resolve, reject) => {
              this.props.firebase.covers().child(ProjectsObject[key].name+'.png').getDownloadURL()
                  .then((dl) => {
                      resolve(dl)
                  })
              })
          })

          // ! When these resolve: set projects in state
          Promise.all(projectsCoverlist).then((allprojects) => {
              this.setState({
                  projectcovers: allprojects,
              });
              setTimeout(
                function() {
                    this.setState({loading: false});
                }
                .bind(this),
                300
            );
          })
      });
    }



  getAnimDirection(location){
    switch(location.pathname) {
      case '/':
        return 'home-away'
        // break;
      case '/detail':
          return 'to-home'
        // break;
      case '/about':
          return 'to-home'
        // break;
        default:
    }
  }


  
  toDetail(projectindex){
    const project = this.state.projects[projectindex];
    const prevPos = projectindex.prevPos;
    console.log("HIIIEEROOOO",prevPos);
    this.setState({
      currentProject: projectindex,
      selProject: project,
    });
    this.props.history.push('/detail');
  }

  toNext(){
    const current = this.state.currentProject+1;
    const nextproject = this.state.projects[current];
    this.setState({
      currentProject: current,
      selProject: nextproject,
    });
    this.props.history.push('/detail');
    console.log(nextproject);

    // window.location.reload();
  }
  
  render(){
    const { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout= { enter: 360, exit: 240};
    this.getAnimDirection(location);
    const directionCalc = this.getAnimDirection(location);
    const selProject = this.state.selProject;
    return (
        <TransitionGroup component="div" className="App">
            <CSSTransition
              key={currentKey}
              timeout={timeout}
              classNames="pageSlider"
              mountOnEnter={false}
              unmountOnExit={true}
            >
            <div className={directionCalc}>
              <Switch location={location}>
                <Route exact path="/" render={(props) => <Home {...props} covers={this.state.projectcovers} loading={this.state.loading} toDetail={this.toDetail}/>} />
                <Route exact path="/about" component={About} />
                <Route exact path="/detail" render={(props) => <Detail {...props} project={selProject} toNext={this.toNext}/>} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
    );

  }
}

export default withFirebase(withRouter(App));
