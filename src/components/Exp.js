import React, { Component } from 'react'

class Exp extends Component {

constructor(props) {
  super(props)
}

  componentDidMount() {
    // console.log('Exp Rendering')
    // console.log(this.props)
  }
  
  render() {
    // console.log('AbouMe Rendering')
   
    //   console.log(this.props.Personal.fname)
    //   const { age, fname, lname } = this.props.Personal
      
      return(
        this.props.exp.map( value => (
          <div className="flex flex-col text-white w-12 mb-5
            md:w-6 md:px-3
            lg:w-4">
            <div>
              <img src={value.Img} className="pb-3"></img>
            </div>
            <p><span className="font-bold">Project Name: </span><span className="project-name">{value.Name}</span></p>
            <p><span className="font-bold">Stack: </span><span className="project-stack">{value.Stack}</span></p>
            <p><span className="font-bold">Description: </span><span className="project-desc"></span>{value.Description}</p>
          </div>
        ))
      
      )
    
  }
}

export default Exp
