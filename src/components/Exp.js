import React, { Component } from 'react'

class Exp extends Component {

constructor(props) {
  super(props)
}

  componentDidMount() {
    console.log('Exp Rendering')
    console.log(this.props)
  }
  
  render() {
    // console.log('AbouMe Rendering')
   
    //   console.log(this.props.Personal.fname)
    //   const { age, fname, lname } = this.props.Personal
      
      return(
        <div />
        // this.props.exp( value => (
        // <div className="flex flex-col text-white">
        //   <div>
        //     <img src="/img/exp/zort.jpg" className="pb-3"></img>
        //   </div>
        //   <p><span className="font-bold">Project Name: </span><span className="project-name">ZortOut.com</span></p>
        //   <p><span className="font-bold">Stack: </span><span className="project-stack">WordPress</span></p>
        //   <p><span className="font-bold">Description: </span><span className="project-desc"></span>หน้าเว็บระบบจัดการร้านค้าออนไลน์</p>
        // </div>
        // ))
      
      )
    
  }
}

export default Exp
