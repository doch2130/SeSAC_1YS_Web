import React, { useRef } from 'react'
import { Row, Col } from 'react-bootstrap';
import './Chatting.css';

export default function Chatting() {
  const inputTextArea = useRef();
  const chattingArea = useRef();

  const inputTextAreaHeightAuto = () => {
    inputTextArea.current.style.height = 'auto';
    inputTextArea.current.style.height = inputTextArea.current.scrollHeight + 'px';

    if(Number(inputTextArea.current.style.height.slice(0, -2)) > 130) {
      inputTextArea.current.style.overflowY = 'scroll';
    } else {
      inputTextArea.current.style.overflowY = 'hidden';
    }
  }

  const inputTextAreaEnter = (e) => {
    // console.log(inputTextArea.current.value);
    if (e.key === 'Enter' && e.ctrlKey) {
      // console.log('control');
      const currentTextValue = inputTextArea.current.value;
      return inputTextArea.current.value = currentTextValue + '\n';
    } else if(e.key === 'Enter' && !e.ctrlKey) {
      document.getElementById('sendBtn').focus();
      return ;
    }
  }

  return (
    <>
    <Row id='chattingWrap'>
      <Col xs={12}>

        {/* 채팅창 */}
        <Row id='chattingArea' ref={chattingArea}>
          <Col xs={12} style={{marginTop: '30px'}}>
            {/* 내가 보낸 메시지 */}
            <Row>
              <Col xs={12} className='textBoxCol'>
                <div style={{position: 'relative', textAlign: 'right'}}>
                  <span className='textBoxTime'>오후 10:12</span>
                  <pre className='textBox textBoxMe'>안녕하세요. 반갑습니다.요. 반갑습니다요. 반갑습니다갑습니다요. 갑습니다요. <br />CSS 만들기 어려워요</pre>
                </div>
              </Col>
            </Row>
            {/* 상대가 보낸 메시지 */}
            <Row>
              <Col xs={12} className='textBoxCol'>
                <div style={{position: 'relative', textAlign: 'left'}}>
                  <pre className="textBox textBoxYou">저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염저두염</pre>
                  <span className='textBoxTime'>오후 1:49</span>
                </div>
              </Col>
            </Row>
            {/* 내가 보낸 메시지 */}
            <Row>
              <Col xs={12} className='textBoxCol'>
                <div style={{position: 'relative', textAlign: 'right'}}>
                  <span className='textBoxTime'>오전 5:59</span>
                  <pre className='textBox textBoxMe'>CSS가 제일 어려운듯</pre>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* 입력 창 */}
        <Row style={{margin: 'auto', width: '498px'}}>
          <Col xs={12} style={{padding: '0px'}}>
            <textarea ref={inputTextArea} id='inputText' rows='1' onChange={() => inputTextAreaHeightAuto()} onKeyDown={(e) => inputTextAreaEnter(e)}></textarea>
          </Col>
        </Row>

        {/* 전송 */}
        <Row style={{margin: 'auto', width: '500px'}}>
          <Col xs={12} style={{textAlign: 'right', marginBottom: '10px'}}>
            <button type='button' className='btn' id='sendBtn'>전송</button>
          </Col>

        </Row>
      </Col>
    </Row>
    </>
  )
}
