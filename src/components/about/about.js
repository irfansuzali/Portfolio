import React from 'react'
import './about.css'

import profile_pic from '../../assets/images/profile_pic.jpg';


function About() {
    return (
        <div>
            <div className="container about-section" id = "about">
                <h1> About Me </h1>
                <img src={profile_pic} className="img-fluid profile-pic" alt="Profile" />
                <p className = "about-content"> I’m a recent graduate from the University of Illinois Urbana-Champaign with a Bachelor of Sciene in Electrical Engineering. After many years of tinkering with hardware through hands-on experience, I have decided to pivot towards a more software oriented field where I can utilize code to my bring ideas and thoughts to life. As I continue on my journey of expanding and developing my craft, I welcome new and exciting problems to push myself further and strive to become better everyday.</p>
                
            </div>
        </div>

    )
}

export default About;
