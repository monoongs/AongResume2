import React, { Component } from 'react';
// import axios from 'axios'
import "./styles/tailwind/main.css";
import './App.css';
import Data from './data/data.json'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Exp from './components/Exp'

class App extends Component { 

  constructor(props) {
    super(props)
    this.state = { dataState : "" }
  }


  componentWillMount() {
    if(Data) {
      this.setState({dataState : Data})
    }
  }

  render() {
    return(
      <div>
        {console.log('AongTest')}
        {console.log(this.state)}
        <Intro />
        
        <AboutMe Personal = {this.state.dataState.Personal} />
        <Skills Skills = { this.state.dataState.Skills } />
        <Exp Exp = { this.state.dataState.Projects}></Exp>
      </div>
    )
  }
}

export default App;
