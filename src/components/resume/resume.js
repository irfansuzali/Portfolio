import React from 'react'
import './resume.css'

export default function Resume() {
    return(
        <div>
            <div className = "resume-section" id = "resume">
                <h1 className = "resume-text">Check Out My Resume!</h1>
                <button type="button" class="btn btn-light btn-lg"><a href = "test" target="blank">Grab A Copy</a></button>
            </div>
        </div>
    )
}