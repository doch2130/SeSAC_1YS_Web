import React, { useState } from 'react'
import './Chatting.css';
import channel_logo from './channel_logo.png';
import CloseBtn from './CloseBtn.svg';
import ChattingBox from './ChattingBox';
// import logo from './logo.svg';

export default function Chatting() {
  const [isChattingBox, setIsChattingBox] = useState(true);

  return (
    <div>
      <button type="button" className="btn btn-primary position-relative">
        Profile
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
      <br />
      <br />

      {isChattingBox &&
      <div style={{position: 'fixed', right: '50px', bottom: '50px'}}>
        <button type='button' className='NewAlertBtn' onClick={() => setIsChattingBox(false)}>
          <img src={channel_logo} alt='channel_log' className='channel_log' />
          <span className='NewAlertSpan'></span>
        </button>
      </div>}

      <br />
      {!isChattingBox && <div className='channelBoxClose'>
        <div>
          <img src={CloseBtn} alt='channel_box_close' className='channelBoxCloseBtn' onClick={() => setIsChattingBox(true)}/>
        </div>
        <ChattingBox />
      </div>}
      
    </div>
  )
}
