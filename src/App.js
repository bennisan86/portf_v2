import React, { Component } from 'react';
import './App.css';

import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './components/Homepage';
import About from './components/Aboutpage';
// import Detail from './components/Aboutpage';


import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        prevDepth: this.getPathDepth(this.props.location),
      };
  }

  componentWillReceiveProps(){
    this.setState({ prevDepth: this.getPathDepth(this.props.location)});
    // console.log("this.props.location",this.props.location.pathname, "depth",this.getPathDepth(this.props.location));
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }

  getAnimDirection(location){
    switch(location.pathname) {
      case '/':
        return 'home-away'
        // break;
      case '/here':
          return 'to-home'
        // break;
      case '/about':
          return 'to-home'
        // break;
        default:
    }
  }
  
  render(){

    const { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout= { enter: 450, exit: 300};
    this.getAnimDirection(location);
    return (
        <TransitionGroup component="div" className="App">
            <CSSTransition
              key={currentKey}
              timeout={timeout}
              classNames="pageSlider"
              // mountOnEnter={false}
              // unmountOnExit={true}
            >
            <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "to-home" : "home-away"}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/here" component={About} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
    );

  }
}

export default withRouter(App);
