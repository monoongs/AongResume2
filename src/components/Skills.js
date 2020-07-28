import React, { Component } from 'react'

class Skills extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // console.log('Skill Rendering')
    // console.log(this.props)
  }

  showData(param) {
    if(param == 'Database') {
      return this.props.Skills.Database.map( value => (
        <p>- { value }</p>
      ))
    }
    if(param == 'Framework') {
      return this.props.Skills.Framework.map( (value) => (
        <p>- { value }</p>
      ))
    }
    if(param == 'Primary') {
      return this.props.Skills.Language.Primary.map( (value) => (
        <p>- { value }</p>
      ))
    }
    if(param == 'Secondary') {
      return this.props.Skills.Language.Secondary.map( (value) => (
        <p>- { value }</p>
      ))
    }
    if(param == 'ETC') {
      return this.props.Skills.ETC.map( (value) => (
        value + ', ' 
      ))
    }
  }

  render() {
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
            <h1 className="text-white text-base mx-auto text-2r lg:text-4r">SKILLS</h1>
          </div>

          <div className="flex flex-col md:flex-row mb-2 md:justify-between">
            <div className="flex flex-col mb-3">
              <h2 className="text-white text-left lg:text-1.875r">Language</h2>
              <div className="flex flex-row justify-between text-white mx-3 
                md:mx-5 md:flex-col
              ">
                <div className="flex flex-col">
                  { this.showData('Primary') }
                </div>
                <div className="flex flex-col">
                  { this.showData('Secondary') }
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between mb-2">
              <div className="flex flex-col mb-3 md:mr-65px lg:mr-11.5r">
                <h2 className="text-white text-left lg:text-1.875r">Framework</h2>
                <div className="flex flex-row justify-start text-white mx-3 md:mx-5">
                  <div className="flex flex-col">
                    { this.showData('Framework') }
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-3">
                <h2 className="text-white text-left lg:text-1.875r">Database</h2>
                <div className="flex flex-row justify-start text-white mx-3 md:mx-5">
                  <div className="flex flex-col">
                    { this.showData('Database') }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <h2 className="text-white text-left">Tools, LIB, Etc.</h2>
            <div className="flex flex-row justify-start text-white mx-3 md:mx-5">
              <div className="flex flex-col">
                <p>{ this.showData('ETC') }</p>
              </div>
            </div>
          </div>
          

        </div>
      </div>
     </div>
    )
  }
}

export default Skills
