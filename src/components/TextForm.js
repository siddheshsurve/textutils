import React from 'react'

export default function TextForm() {
    return (
        <div>
            <div className="mb-3">
                <label for="myTextBox" className="form-label">Example textarea</label>
                <textarea className="form-control" id="myTextBox" rows="3"></textarea>
            </div>
        </div>
    )
}
