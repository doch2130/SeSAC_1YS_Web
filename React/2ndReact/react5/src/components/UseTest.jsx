import React, { Component } from 'react'

export default class UseTest extends Component {
    // 기본 값
    state = {
        count: 0,
    }
  render() {

    // 렌더 시 변경 되는 값
    const {count} = this.state;

    return (
      <div>
        <h3>Count: {count}</h3>
        <br />
        <button onClick={() => this.setState({ count: count-1})}>-1</button>
        <button onClick={() => this.setState({ count: count+2})}>+2</button>
      </div>
    )
  }
}

