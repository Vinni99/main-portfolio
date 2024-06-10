import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

function Contact() {

    const form = useRef();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setMessage('')
        setError('')

        const formData = new FormData(form.current);
        const userName = formData.get('user_name');
        const userEmail = formData.get('user_email');
        const userMessage = formData.get('message');

        if (!userName || !userEmail || !userMessage) {
            setError('Please fill out all fields');
            return;
        }

        emailjs
            .sendForm('service_fofubli', 'template_pb7psza', form.current, {
                publicKey: 'c1Z76bJd_EE3mbT_X',
            })
            .then(
                () => {
                    setMessage('Email sent successfully!');
                    e.target.reset();
                },
                (error) => {
                    setError(`Failed to send email: ${error.text}`);
                },
            );
    };

    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <p>Send me a message!</p>
            <hr />
            {error && <p className='error-message'>{error}</p>}
            {message && <p className='success-message'>{message}</p>}
            <form className="contact-card" ref={form} onSubmit={sendEmail}>
                <label>Name:</label>
                <input type="text" name="user_name" required/>
                <label>Email:</label>
                <input type="email" name="user_email" required/>
                <label>Message:</label>
                <textarea name="message" required/>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Contact;