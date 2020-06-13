import React, { Component } from 'react'


class Intro extends Component {
  componentDidMount() {
    // console.log('Mount => Intro')
  }
  render() {
    return(
      // <div className="bg-black flex justify-center items-center min-h-screen text-white">
      <div className="bg-gray-900 min-h-screen">
        <div className="
            flex bg-gray-900 min-h-screen items-center justify-center mx-auto max-w-screen-xs
            sm:max-w-screen-sm
            lg:max-w-screen-xl
          ">
          <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center">
            <div className="w-1/2 z-10 md:mr-ne8 lg:mr-ne14">
              <h1 className="text-4r text-center md:text-right md:text-7r lg:text-9r text-white">Hello</h1>
              <h2 className="text-1.35r text-center md:text-right md:text-2r lg:text-3.25r text-white">I'am Web Developer</h2>
            </div>
            <div className="w-1/2 py-5">
              <img src="./img/gentleman.jpg" />
            </div>
          </div>         
        </div>
      </div>

    )
  }
}

export default Intro
