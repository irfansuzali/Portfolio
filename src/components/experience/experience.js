import React from 'react'
import './experience.css'
import css3_pic from '../../assets/logos/css3.svg'
import html5_pic from '../../assets/logos/html5.svg'
import bootstrap_pic from '../../assets/logos/bootstrap.svg'
import javascript_pic from '../../assets/logos/javascript.svg'
import react_pic from '../../assets/logos/react.svg'
import jquery_pic from '../../assets/logos/jquery.svg'
import python_pic from '../../assets/logos/python.svg'
import squarespace_pic from '../../assets/logos/squarespace.svg'
import github_pic from '../../assets/logos/github.svg'
import mongodb_pic from '../../assets/logos/mongodb.svg'
import instahub_pic from '../../assets/logos/instahub.png'
import UofI_pic from '../../assets/logos/UofI.jpg'


function Experience() {
    return (
        <div className = "app-experience">
            <div className="experience-text">
                <h1>Experience</h1>
                <p> Self-taught and motivated to develop clean and concise code for efficient software</p>
            </div>
            <div className="container experience-section">
                <div className="row">
                    <div className="col-md-8 col-sm-12 experience-tech">
                        <h4 className="experience-subheading"> Technologies I've Worked With </h4>
                        <div classname="tech">
                            <div clasName="row logo-row">
                                <img src={html5_pic} className="img-fluid logo-img" alt="HTML5" />
                                <img src={css3_pic} className="img-fluid logo-img" alt="CSS3" />
                                <img src={javascript_pic} className="img-fluid logo-img" alt="Javascript" />
                                <img src={python_pic} className="img-fluid logo-img" alt="Python" />
                            </div>
                            <div className="row logo-row">
                                <img src={bootstrap_pic} className="img-fluid logo-img" alt="Bootstrap" />
                                <img src={react_pic} className="img-fluid logo-img" alt="React" />
                                <img src={squarespace_pic} className="img-fluid logo-img" alt="Squarespace" />
                                <img src={jquery_pic} className="img-fluid logo-img" alt="Jquery" />
                            </div>
                            <div className="row logo-row">
                                <img src={github_pic} className="img-fluid logo-img" alt="Github" />
                                <img src={mongodb_pic} className="img-fluid logo-img" alt="MongoDB" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 experience-work">
                        <h4 className="experience-subheading experience-job"> Where I've Worked </h4>
                        <img src={instahub_pic} className = "logo-img-exp" width="230px" alt="InstaHub" />
                        <img src={UofI_pic} className = "logo-img-exp"  alt="UofI" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
