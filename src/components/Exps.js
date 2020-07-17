import React, { Component } from 'react'
import Exp from './Exp'

class Exps extends Component {

constructor(props) {
  super(props)
}

  componentDidMount() {
    console.log('Exps Rendering')
    console.log(this.props.Exps)
  }
  
  render() {
    // console.log('AbouMe Rendering')
   
    //   console.log(this.props.Personal.fname)
    //   const { age, fname, lname } = this.props.Personal
      
      return(
        <div className="bg-gray900 min-h-screen">
        <div className="
             flex flex-col bg-gray-900 min-h-screen justify-center mx-auto max-w-screen-xs
             
             
         ">
         <div className="flex flex-col max-w-xs mx-auto w-20r px-6
           md:w-40r md:max-w-2xl md:px-12
           lg:w-56r lg:max-w-60r
         
         ">
           <div className="flex pb-3">
            <h1 className="text-white text-base mx-auto text-2r lg:text-4r">Experience</h1>
           </div>
           <div className="flex flex-wrap">
            <Exp exp = {this.props.Exps} />
           </div>
         </div>
       </div>
      </div>
      )
    
  }
}

export default Exps
