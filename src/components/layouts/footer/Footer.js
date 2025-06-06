import React, { useRef } from 'react';
import './footer.styles.css';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const serviceId = "service_6qztilm";
    const templateId = "template_zqtaw9m";
    const publicKey = "MfmqkknR37rnaoy1B";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
            console.log(response.text);
        })
        .catch((error) => {
            console.log(error.text);
        })

        e.target.reset();
    }

    return (
        <section className="footer-container">
            <div className="container">
                <h2>Want to sell your books feel free to ask here.</h2>

                <form onSubmit={handleSubmit} ref={form} className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" name="user_name" id="name" className="form-input" placeholder='Enter your name'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" name="user_email" id="email" className="form-input" placeholder="Enter your Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query:</label>
                        <textarea className="form-input" name="message" id="query" placeholder='Type your Query'></textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="form-submit" />
                    </div>
                </form>

                <p>&copy; 2024 BookEase. All Rights Reserved.</p>
                <p>created by SANYO, ALLAN, VEDANG, HARDIK</p>
            </div>
        </section>
    )
}

export default Footer;