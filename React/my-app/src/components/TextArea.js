import React, { useState } from 'react'
import Age from './Age';

export default function TextArea() {
    const [text, setText] = useState('')
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="mt-3">
            <h2>Enter Details</h2>
            <div className="mt-2 mb-2">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter Text Here.." rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <hr />
            <Age/>
        </div>
    )
}