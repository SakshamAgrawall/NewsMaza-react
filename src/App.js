import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


class App extends Component {
  pageSize= 6;
  // apiKey=process.env.REACT_APP_NEWS_API
  apiKey= "0b6bb3524faa47d7a1c83f4be79d512e";
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />

          <Routes>
            <Route
              exact path="/"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />}
            ></Route>
            <Route
             exact path="/business"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />}
            ></Route>
            <Route
             exact path="/entertainment"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}
            ></Route>
            <Route
             exact path="/Health"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />}
            ></Route>
            <Route
             exact path="/science"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />}
            ></Route>
            <Route
             exact path="/sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />}
            ></Route>
            <Route
             exact path="/technology"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
