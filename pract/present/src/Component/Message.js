//Class Component 
// state

import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message : 'Hello ,Good Afternoon Guys..!'
      }
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
      </div>
    )
  }
}

export default Message

