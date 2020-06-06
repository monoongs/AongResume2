import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return(
     <div className="bg-gray900 min-h-screen">
       <div className="
            flex flex-col bg-gray-900 min-h-screen justify-center mx-auto max-w-screen-xs
            
            lg:max-w-screen-xl
        ">
        <div className="flex flex-col bg-gray-800 max-w-xs mx-auto w-20r px-3">
          <div className="flex">
            <h1 className="text-white text-base mx-auto">Skills</h1>
          </div>

          <div className="flex flex-col">
            <h2 className="text-white text-left">Language</h2>
            <div className="flex flex-row justify-around text-white">
              <div className="flex">
                Left
              </div>
              <div className="flex">
                Right
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-white text-left">Framework</h2>
            <div className="flex flex-row justify-around text-white">
              <div className="flex">
                Left
              </div>
              <div className="flex">
                Right
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-white text-left">Database</h2>
            <div className="flex flex-row justify-around text-white">
              <div className="flex">
                Left
              </div>
              <div className="flex">
                Right
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
