import React, { Component } from 'react';
// import axios from 'axios'
import "./styles/tailwind/main.css";
import './App.css';
import Data from './data/data.json'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

class App extends Component { 

  constructor(props) {
    super(props)
    this.state = {dataState: ''}
  }

  componentDidMount() {
    console.log(Data)
    this.setState({dataState : Data})
  }

  render() {
    return(
      <div>
        {console.log('AongTest')}
        {console.log(this.state.dataState.Personal)}
        <Intro />
        <AboutMe Personal = {this.state.dataState.Personal} />
        <Skills />
      </div>
    )
  }
}

export default App;
