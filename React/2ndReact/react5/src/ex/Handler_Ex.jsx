import React, { Component } from 'react'

export default class Handler_Ex extends Component {
    state = {
        title: 'Hello World!'
    }
  render() {
    const {title} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <br />
        <button onClick={() => this.setState({title: 'Goodbye World!'})}>클릭</button>
      </div>
    )
  }
}
