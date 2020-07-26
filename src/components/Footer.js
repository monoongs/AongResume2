import React, { Component } from 'react'

class Footer extends Component {
    render(){
        return(
            <div>
                <div className="text-center bg-black text-gray-500 flex">
                    <div class="flex flex-row mx-auto">
                        <p class="my-auto">2020, Nattapon.s</p>
                        <a href = "https://github.com/monoongs" target="_blank">
                            <img src="/img/github.png" width="50px" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer