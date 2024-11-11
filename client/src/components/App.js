import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions'

import Header from "./Header";
const DashBoard = () => <h2>DashBoard</h2>; 
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

/*  -------------------------------------------------
    <Route path="/" component = {Landing} />
    <Route path="/surveys" component = {DashBoard} /> 
    -------------------------------------------------
    this code is interseting because when React checks the route (URL) it checks using a 'contain' method
    that means that when browsing http://localHost:3000/surveys we should see both {Landing} and {DashBoard}
    solution: exact/exact={true} keyword
    */
class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/surveys" component={DashBoard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

