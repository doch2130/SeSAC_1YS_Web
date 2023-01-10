import React, { Component } from 'react';

export default class TextProps extends Component {
  
  render() {
    
    const {text, valid} = this.props;

    function btnEvent() {
      console.log(valid);
    }

    return (
      <div>
        <h1>{text}</h1>
        <br />
        <button onClick={() => btnEvent()}>콘솔 메시지</button>
      </div>
    );
    
  }

}
