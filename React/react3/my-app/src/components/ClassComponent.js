import React, { Component } from 'react';

// 클래스형 컴포넌트에서 state 사용하는 방법
export default class ClassComponent extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     teacher: '새싹',
    //   };
    // }

  // 현재 버전
  state = {
    teacher: '새싹',
  };

  render() {
    const { teacher } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'tetz' })}>
          영어로!
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}
