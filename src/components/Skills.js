import React, { Component } from 'react'

class Skills extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Skill Rendering')
    console.log(this.props)
  }

  showLanguage() {
    let language = ''
    let length = this.props.Skills.Language.length

    console.log(length)

    for(let i=0; i<length; i++) {
      if(i==0 || i==6) {
        language += '<div className="flex flex-col">'
      }
      language += '<p>' + this.props.Skills.Language[i] + '</p>'
      if(i==5 || i==length) {
        language += '</div>'
      }
    }

    // <div className="flex flex-col"> ทำ 0 1
    //   <p>- JavaScript</p>
    //   <p>- HTML5</p>
    //   <p>- CSS</p>
    // </div>
    // <div className="flex flex-col">
    //   <p>- SQL</p>
    //   <p>- PLSQl</p>
    // </div> 

    return language
  }

  showFrameWork() {
    return this.props.Skills.Framework.map( (framework) => (
      <p>- {framework}</p>
    ))
  }

  showDB() {
    return this.props.Skills.Database.map( db => (
      <p>- {db}</p>
    ))
  }

  render() {
    return( 
     <div className="bg-gray900 min-h-screen">
       <div className="
            flex flex-col bg-gray-900 min-h-screen justify-center mx-auto max-w-screen-xs
            
            
        ">
        <div className="flex flex-col max-w-xs mx-auto w-20r px-6
          md:w-32r md:max-w-2xl md:px-12
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
                { this.showLanguage() }
                {/* <div className="flex flex-col">
                  <p>- JavaScript</p>
                  <p>- HTML5</p>
                  <p>- CSS</p>
                </div>
                <div className="flex flex-col">
                  <p>- SQL</p>
                  <p>- PLSQl</p>
                </div> */}
              </div>
            </div>

            <div className="flex flex-row justify-between mb-2">
              <div className="flex flex-col mb-3 md:mr-65px lg:mr-11.5r">
                <h2 className="text-white text-left lg:text-1.875r">Framework</h2>
                <div className="flex flex-row justify-start text-white mx-3 md:mx-5">
                  <div className="flex flex-col">
                  { this.showFrameWork() }
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-3">
                <h2 className="text-white text-left lg:text-1.875r">Database</h2>
                <div className="flex flex-row justify-start text-white mx-3 md:mx-5">
                  <div className="flex flex-col">
                    { this.showDB()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <h2 className="text-white text-left">Tools, LIB, Etc.</h2>
            <div className="flex flex-row justify-start text-white mx-3 md:mx-5">
              <div className="flex flex-col">
                <p>Wordpress, jQuery, Git, Excel, Photoshop, Docker, Linux</p>
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
