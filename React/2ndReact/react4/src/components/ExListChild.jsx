import React from 'react'

// export default function ExListChild(props) {
    // const {titleText, contentText} = props;

export default function ExListChild({titleText, contentText}) {
  return (
    <>
        <h2 className='ExListChild'>{titleText}</h2>
        <p className='ExListChild'>{contentText}</p>
        <hr />
    </>
  )
}
