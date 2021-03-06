import React from 'react'
import './portfolio.css'
import instahub_pic from '../../assets/images/instahub_pic.png';
import art_gallery_pic from '../../assets/images/art_gallery.png'
import university_freelance_pic from '../../assets/images/university_freelance_pic.png'

export default function Portfolio() {
    return (
        <div>
            <div className="portfolio-section" id = "portfolio">
                <h1 className = "portfolio-title">Explore My Work</h1>
                <div class="card card-portfolio">
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h4 class="card-title">InstaHub</h4>                                
                                <h6 class="card-subtitle mb-2 text-muted">Squarespace</h6>
                                <p class="card-text">Maintenance of the company's website to reflect updated products and current company endeavours. Using Squarespace's code injection to create unique page layouts for a complete user interface and experience.</p>
                                <a href="https://www.getinstahub.com/" class="card-link">Visit Website</a>
                            </div>
                        </div>
                        <div class="col-sm-5 img-container">
                            <img className = "portfolio-img img-fluid" src={instahub_pic} alt="InstaHub" />
                        </div>
                    </div>
                </div>
                <div class="card card-portfolio">
                    <div class="row">
                        <div class="col-sm-5 img-container">
                            <img className = "portfolio-img img-fluid" src={art_gallery_pic} alt="Art Gallery" />
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h4 class="card-title">Art Gallery</h4>                                
                                <h6 class="card-subtitle mb-2 text-muted">HTML, CSS, React</h6>
                                <p class="card-text">Art gallery for an internationally recognized artist, Sadaf Farasat, based in Kuala Lumpur, Malaysia. Her art showcases the beautiful artistry showcased by the Whirling Dervishes. </p>
                                <a href="https://www.sadaffarasat.com/" class="card-link">Explore Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-portfolio">
                    <div class="row">
                        <div class="col-sm-7">
                            <div class="card-body">
                                <h4 class="card-title">University Projects</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Django, Python, Bootstrap, HTML, CSS</h6>
                                <p class="card-text">Prototype web application to connect students within the university network with like-minded individuals to work on projects that inspire them.</p>
                                <p class="card-text">Users are capable of logging in, creating posts/comments, and viewing posts based on various criteria. </p>
                                <a href="https://fast-harbor-88573.herokuapp.com/" class="card-link">Explore Demo</a>
                            </div>
                        </div>
                        <div class="col-sm-5 img-container">
                            <img className = "portfolio-img img-fluid" src={university_freelance_pic} alt="InstaHub" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

