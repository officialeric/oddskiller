import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact-form',
          ...formData,
        }),
      });

      setNotification({
        show: true,
        message: 'Message sent successfully!',
        type: 'success',
      });

      setFormData({
        full_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setNotification({
        show: true,
        message: 'Something went wrong. Please try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 5000);
    }
  };

  return (
    <div className="contact-section-area">
      <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration="1000">
        <h3>Let's Work Together!</h3>
        <div className="space12"></div>

        {notification.show && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}

        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Required by Netlify */}
          <input type="hidden" name="form-name" value="contact-form" />
          <p hidden>
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="input-area">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Your Name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="input-area">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="input-area">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="input-area">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="input-area">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="input-area">
                <button type="submit" className="vl-btn1" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit'}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ marginLeft: '8px', marginTop: '-4px' }}
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
