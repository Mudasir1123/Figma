import React from 'react';
import '../globals.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>This is the Contact Page</h1>
      <p>We'd love to hear from you! Please reach out with any questions.</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button>Send Message</button>
      </form>
    </div>
  );
  
}
