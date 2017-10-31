// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handleClick() {
    let clicks = this.state.timesClicked
    this.setState({
      timesClicked: clicks + 1
    })
  }

  render() {
    return(<button onClick={this.handleClick.bind(this)}>{this.state.timesClicked}</button>)
  }
}
