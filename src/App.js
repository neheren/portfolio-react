import React from 'react';
import { Component } from 'react';
import CaseView from './components/CaseView';
import MenuBar from './components/MenuBar';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Cases from './components/Cases';
import 'bootstrap/dist/css/bootstrap.min.css';
import Front from './components/Front.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <div style={styles.fill}>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
              >

              <Switch>
                {/* <Route component={<MenuBar />} /> */}
                <Route exact path="/" component={Home} style={styles.fill} />
                <Route path="/case/:id" component={CaseViews} style={styles.fill} />
              </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>)} />
        </BrowserRouter>
    );
  }
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};


function CaseViews({match}){
  return <CaseView id={match.params.id}></CaseView>
}


const Home = () => (
  <Cases />
)

export default App;