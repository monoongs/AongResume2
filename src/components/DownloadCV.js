import React, { Component } from 'react'

class DownloadCV extends Component {
    render() {
        return(
            <a href="https://drive.google.com/u/0/uc?id=1K7wlm4ws0BORHzVe7lPQ8pmptTkUUjct&export=download">
                <div class='download-btn'>
                    <div class="wrap my-auto">
                        <img src="/img/download-btn2.png" width="50px" class="mx-auto" />
                        <p class="text-white text-center mx-auto text-sm">Download My CV</p>
                    </div>
                </div>
            </a>
        )
    }
}

export default DownloadCV
