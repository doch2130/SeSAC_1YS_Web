// import React, { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Contact() {
    // const [list,setList] = useState([]);

    // function writeList() {
    //     let form = document.getElementById("form_write");
    //     let newList = {
    //         writer: form.writer.value,
    //         title: form.title.value
    //     };

    //     setList([...list, newList]);
    // }
    const list = useSelector((state) => state);
    const dispatch = useDispatch();
    function writeList() {
      let action = {
        type: 'ADD',
        payload: {
          writer: '1',
          title: 'a',
        }
      }
      dispatch(action);
    }

    return (
        <div>
            <form id="form_write" style={{marginBottom: '15px'}}>
                <input type="text" name="writer" placeholder='작성자' />
                <input type="text" name="title" placeholder='제목' />
                 <button type='button' onClick={writeList}>작성</button>
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th><th>제목</th><th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, i) => {
                        // value = { writer: ~~ , title~~ };
                        return ( 
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>            
        </div>
    )
}