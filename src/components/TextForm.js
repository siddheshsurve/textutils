import React from 'react'

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
