import React from 'react'
import './footer.css'
import github_icon from '../../assets/icons/github.svg'
import linkedin_icon from '../../assets/icons/linkedin.svg'

export default function Footer() {
    return (
        <div>
            <div className="app-footer">
                <div className="row">
                    <div className="col"></div>
                    <div classname="col-4">
                        <div className="footer-socials">
                            <a href='https://www.github.com/irfansuzali'>
                                <img src={github_icon} className="icons" alt="Github" height='50px' width='50px' />
                            </a>
                            <a href='https://www.linkedin.com/in/irfan-suzali/'>
                                <img src={linkedin_icon} className="icons" alt="LinkedIn" height='50px' width='50px' />
                            </a>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}



