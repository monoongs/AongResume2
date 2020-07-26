import React, { Component } from 'react'
import $ from 'jquery';

class AboutMe extends Component {

constructor(props) {
  super(props)
}

componentDidMount() {
  
  $(document).on('scroll', () => {
    let setScrollin = Math.min(-600 + 1.3 * window.scrollY,0)
    let setScrollOut = Math.max(0 + 1.3 * (window.scrollY-(window.scrollY-10)))

    if(window.scrollY > 470) {
      console.log(setScrollOut)
      $('.about .rotateLeft').css('left', setScrollOut + 'px')
      // $('.about .rotateRight').css('right', setScrollOut + 'px')
    } else {
      $('.about .rotateLeft').css('left', setScrollin + 'px')
      $('.about .rotateRight').css('right', setScrollin + 'px')
    }
    
    // console.log(window.scrollY)
    // if(setScroll == 0) {
    //   alert(window.scrollY) //470
    // }
  })
}
  
  render() {
    console.log('AbouMe Rendering')
   
      console.log(this.props.Personal.fname)
      const { age, fname, lname } = this.props.Personal
      
      return(
        <div className="bg-gray-900  min-h-half about">
          {/* <p className="text-white text-7r">{ sign }</p> */}
          <div className="
              flex bg-gray-900  min-h-screen  xl:min-h-half items-center  justify-center mx-auto max-w-screen-xs
              sm:max-w-screen-sm
              lg:max-w-screen-xl
            ">
            <div className="wrap flex flex-row items-center ">
              <div className="flex text-center justify-center w-2.5r md:w-12r ">
                <p className="text-white text-base md:text-3r lg:text-6.5r rotateLeft">{'<'}</p>
              </div>
              <div className="flex w-15r md:w-25r justify-center">
                <p className="text-white text-sm md:text-base lg:text-lg "><span className='text-2xl'>H</span>ello ! I'm {fname} {lname} {age} year-old, I am a Programmer working on creating a website sometime I make frontend sometime I make backend and sometime I making full of the website</p>      
              </div>
              <div className="flex text-center justify-center w-2.5r md:w-12r">
                <p className="text-white text-base md:text-3r lg:text-6.5r rotateRight">{'/>'}</p>
              </div>
            </div>
          </div>
        </div>
      )
    
  }
}

export default AboutMe
