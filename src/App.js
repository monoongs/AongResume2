import React, { Component } from 'react';
import axios from 'axios'
import "./styles/tailwind/main.css";
import './App.css';
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

class App extends Component { 

  constructor(props) {
    super(props)
    this.state = {dataState: ''}
  }

  componentDidMount() {
    axios.get('./data/data.json').then(res => {
      // console.log(res.data)
      this.setState({ dataState : res.data}) 
    })
  }

  render() {
    return(
      <>
        {console.log(this.state.dataState.Personal)}
        <Intro />
        <AboutMe Personal = {this.state.dataState.Personal} />
        <Skills />
      </>
    )
  }
}

export default App;
