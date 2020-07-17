import React, { Component } from 'react';
// import axios from 'axios'
import "./styles/tailwind/main.css";
import './App.css';
import Data from './data/data.json'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Exps from './components/Exps'
import Footer from './components/Footer'

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
        <Exps Exps = { this.state.dataState.Projects}></Exps>
        <Footer />
      </div>
    )
  }
}

export default App;
