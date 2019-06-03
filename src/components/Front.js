import React, { Component, Video} from 'react'

export class Front extends Component {
    getStyle = () =>({
        borderRadius: '0px 0px 30px 30px',
        width: '100vw',
    })
    render() {
        return (
            <div>
                <video muted="" autoplay="" playsinline="" loop="" className="video" style={this.getStyle()}>
                    <source src="http://kirstineogsigurd.dk/portfoliovideo.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Front
