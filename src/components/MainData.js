import React, { Component } from 'react'
import "./MainStyles.css"


class MainData extends Component {
  render() {
    return(
<div className={this.props.className}>
        <div className='des-text'>
            <h2>{this.props.heading}</h2>
            <li>{this.props.li}</li>
            <li>{this.props.li1}</li>
            <li>{this.props.li2}</li>


        </div>

        <div className='image'>
            <img alt='' src={this.props.img1} />
            <img alt='' src={this.props.img2} />
        </div>

    </div>

    )
}
}
export default MainData