import React, { Component } from 'react'

class DownloadCV extends Component {
    render() {
        return(
            <a href="/CV/aongCV.pdf" target="_blank">
                <div class='download-btn'>
                    <div class="wrap my-auto">
                        <img src="/img/download-btn2.png" width="50px" class="mx-auto" />
                        <p class="text-white text-center mx-auto text-sm">Donwload My CV</p>
                    </div>
                </div>
            </a>
        )
    }
}

export default DownloadCV
