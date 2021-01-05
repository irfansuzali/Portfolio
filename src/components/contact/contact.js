import React from 'react'
import ContactForm from '../contactForm/contactForm'
import './contact.css'

export default function Contact() {
    return (
        <div class="container contact-section" id="contact">
            <h1>Get In Touch</h1>
            <p>Whether you have an idea for a project or just want to chat, feel free to shoot me a message!</p>
            <div className="contact-form">
                <ContactForm />
            </div>
        </div>
    )
}