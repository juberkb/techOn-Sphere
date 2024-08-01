import React from 'react';
import "../styles/contact.css"
function Contact() {
    return (
    <div className="contact-page">
      {/* <header className="contact-header">
    <h2>Contact us</h2>
      </header> */}
      <main className="contact-main">
        <section className="contact-form-section">
          <h2 className='contactHeading'>Contact Us</h2>
          <p>we would love to hear from you</p>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
        <section className="contact-info-section">
          <h2>Our Contact Information</h2>
          <p>Address: 123 Tech Street, City, Country</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@techmahindra.com</p>
        </section>
      </main>
      <footer className="contact-footer">
        <p>&copy; 2024 Tech Mahindra</p>
      </footer>
    </div>
  );
};

export default Contact;