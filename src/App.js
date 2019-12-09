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
        };
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
                  loading: false
              });
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
  
  render(){
    console.log("state projectcovers:",this.state.projectcovers,"state projects:",this.state.projects);
    const { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout= { enter: 450, exit: 300};
    this.getAnimDirection(location);
    const directionCalc = this.getAnimDirection(location);;
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
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/detail" component={Detail} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
    );

  }
}

export default withFirebase(withRouter(App));
