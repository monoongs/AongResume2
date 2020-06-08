import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return(
     <div className="bg-gray900 min-h-screen">
       <div className="
            flex flex-col bg-gray-900 min-h-screen justify-center mx-auto max-w-screen-xs
            
            lg:max-w-screen-xl
        ">
        <div className="flex flex-col bg-gray-800 max-w-xs mx-auto w-20r px-6
          md:w-32r md:max-w-2xl md:px-12
        ">
          <div className="flex pb-3">
            <h1 className="text-white text-base mx-auto text-2r">SKILLS</h1>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col mb-3">
              <h2 className="text-white text-left">Language</h2>
              <div className="flex flex-row justify-between text-white mx-3 
                md:mx-5 md:flex-col
              ">
                <div className="flex flex-col">
                  <p>- JavaScript</p>
                  <p>- HTML5</p>
                  <p>- CSS</p>
                </div>
                <div className="flex flex-col">
                  <p>- SQL</p>
                  <p>- PLSQl</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between mb-2">
              <div className="flex flex-col mb-3 md:mr-65px">
                <h2 className="text-white text-left">Framework</h2>
                <div className="flex flex-row justify-start text-white mx-3 md:mx-5">
                  <div className="flex flex-col">
                    <p>- React</p>
                    <p>- Node</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-3">
                <h2 className="text-white text-left">Database</h2>
                <div className="flex flex-row justify-start text-white mx-3 md:mx-5">
                  <div className="flex flex-col">
                    <p>- MySql</p>
                    <p>- Oracle</p>
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
