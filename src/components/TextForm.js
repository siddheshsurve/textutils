import React, { useState } from 'react';

const [text, setText] = useState('Enter text here');

//meaning : text is a variable which has default value 'Enter text here' and setText is a function used to update text var


export default function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* TextArea lable removed<label for="myTextBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="myTextBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Convert to UpperCase</button>
        </div>
    )
}
