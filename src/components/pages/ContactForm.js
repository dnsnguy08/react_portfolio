// import React, { useState } from 'react';

function ContactForm() {


    return (

        <div className="container4" id='contact'>
            <div className="contactMeSection">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
                <h6 className="h6 text-center">dnsnguy08@gmail.com</h6>
                <h6 className="h6 text-center mt-2">(510) 289-2223</h6>


            </div>
            <div className="contactMeName">
                <input type="text" id="name" name="name" className="form-control"></input>
                <label htmlFor="name" className="">Your name</label>
            </div>

            <div className="contactMeEmail">
                <input type="text" id="email" name="email" className="form-control"></input>
                <label htmlFor="email" className="">Your email</label>
            </div>

            <div className="contactMeSubject">
                <input type="text" id="subject" name="subject" className="form-control"></input>
                <label htmlFor="subject" className="">Subject</label>
            </div>


            <div className="contactMeMessage">
                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                <label htmlFor="message">Your message</label>
            </div>


            <div className="text-center text-md-left contactMeSubmit">
                <button className="btn btn-primary">Send</button>
            </div>

        </div>
    )
}

export default ContactForm;