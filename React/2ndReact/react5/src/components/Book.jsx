import React from 'react';
import bookImg from '../bookImg.png';

export default function Book(props) {
  const { bookTitle, bookAuthor, bookPrice, bookType } = props.book;
  return (
    <div style={{ backgroundColor: '#F5F5DC' }}>
      <h1 style={{ color: 'orange' }}>이번주 베스트셀러</h1>
      <img src={bookImg} alt="BookImg" />
      <div>
        <h1>{bookTitle}</h1>
        <p className="pBook">저자 : {bookAuthor}</p>
        <p className="pBook">판매가 : {bookPrice}</p>
        <p className="pBook">구분 : {bookType}</p>
      </div>
    </div>
  );
}
