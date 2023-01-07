import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    // 클래스형 컴포넌트에서는 this.props에 저장이 된다.
    // this.props.text 와 같이 너무 길어지므로 구조분해 할당을 해준다.
    const { text, href, userID} = this.props;
    return (
      <div>
            <h1>{userID} 님 반갑습니다.</h1>
            <a href={href}>{text}</a>
        </div>
    )
  }
}
