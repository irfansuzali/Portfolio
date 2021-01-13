import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import './contactForm.css'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()

    const { name, email, subject, message } = this.state
    let templateParams = {
      from_email: email,
      from_name: name,
      subject: subject,
      message_html: message,
    }

    emailjs.send('service_yi83jlb', 'template_gduda6k', templateParams, 'user_bF1xszB9bIx9JvtOswswn')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <>
        <div className="container-contact">
          <div className="row">
            <div className="col-md-6 col-sm-12 contact-section">
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formBasicEmail">
                  <Label >Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder="Enter email"
                  />
                </FormGroup>

                <FormGroup controlId="formBasicName">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, 'name')}
                    placeholder="Name"
                  />
                </FormGroup>

                <FormGroup controlId="formBasicSubject">
                  <Label>Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, 'subject')}
                    placeholder="Subject"
                  >
                  </Input>

                </FormGroup>
                <FormGroup controlId="formBasicMessage">
                  <Label>Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                  />
                </FormGroup>
                <Button variant="primary" type="submit">
                  Submit
                  </Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default ContactForm