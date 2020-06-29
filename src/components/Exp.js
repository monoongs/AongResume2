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
       <div>
         Exp
       </div>
      )
    
  }
}

export default Exp
