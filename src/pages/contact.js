import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import backgroundImage from '../assets/3_back.jpeg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch('https://gcube-club-site.onrender.com/api/v1/query/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    } else {
      // alert('Failed to send message.');
    }
    setIsSubmitting(false);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <NavigationBar username="JohnDoe" />
      </div>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h2
              style={{
                fontFamily: 'Zen Dots',
                fontSize: '4vw',
                fontWeight: 'bolder',
                color: 'rgb(44, 211, 211)',
                textShadow: '0 0 15px rgb(0, 106, 163), 0 0 25px rgba(10, 102, 188, 0.8), 0 0 35px rgb(7, 135, 135)',
                textAlign: 'center',
                marginBottom: '5vh',
                '@media (max-width: 767px)': {
                  fontSize: '3vw',
                },
                '@media (min-width: 768px) and (max-width: 1199px)': {
                  fontSize: '3.5vw',
                },
              }}
            >
              Contact Us
            </h2>
            
            
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
          <p
              style={{
                fontFamily: 'Poppins',
                fontSize: '1.4vw',
                fontWeight: '300',
                color: 'whitesmoke',
                padding: '0 5vw',
                '@media (max-width: 767px)': {
                  fontSize: '1vw',
                },
                '@media (min-width: 768px) and (max-width: 1199px)': {
                  fontSize: '1.2vw',
                },
              }}
            >
              Have a question or want to collaborate? We'd love to hear from you!

             If you're interested in learning more about our projects, or if you'd like to
              collaborate with us, please don't hesitate to reach out. We're always looking
              for like-minded individuals to join our community.
              You can contact us through the form below, or by sending an email to{' '}
              <a href="mailto:gcube@pes.edu" className="glow-text">
                gcube@pes.edu
              </a>
              .
            </p>
            
          </Col>
        </Row>
          
        
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card
              className="contact-form-card"
              style={{ backgroundColor: '#2a2e35', border: 'none' }}
            >
              <Card.Body>
                {showConfirmation ? (
                  <div className="text-center">
                    <h4 style={{ fontWeight: 'bolder'}}>
                      <em1>Message Sent Successfully!</em1>
                    </h4>
                    <p style={{ color: 'white' }}>Thank you for reaching out to us.</p>
                  </div>
                ) : (
                  <>
                    <Card.Title
                      style={{
                        color: 'rgb(255, 0, 0)', // Neon Red
                        textShadow: '0 0 15px rgb(255, 0, 0), 0 0 25px rgba(255, 0, 0, 0.8), 0 0 35px rgb(255, 0, 0)',
                        fontSize: '1.5rem',
                        fontFamily: 'Oswald',
                        fontWeight: 'Bold',
                      }}
                    >
                      Get in Touch
                    </Card.Title>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label text-white">Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          style={{ backgroundColor: '#333', color: '#fff' }}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          style={{ backgroundColor: '#333', color: '#fff' }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Message:</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          style={{ backgroundColor: '#333', color: '#fff' }}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                      <Button
                        variant="outline-secondary"
                        style={{
                          backgroundColor: 'rgba(255, 0, 0, 0.8)', // Neon Red
                          color: 'whitesmoke',
                          padding: '10px 20px',
                          borderRadius: '5px',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'Oswald',
                          fontSize: '1rem',
                          boxShadow: '0 4px 10px rgba(255, 0, 0, 0.85)', // Neon Red shadow
                          transition: 'box-shadow 0.3s ease-in-out',
                        }}
                        onMouseEnter={(e) => (e.target.style.boxShadow = '0 6px 15px rgba(255, 0, 0, 0.8)')}
                        onMouseLeave={(e) => (e.target.style.boxShadow = '0 4px 10px rgba(255, 0, 0, 0.6)')}
                        className="icon2"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </Button>
                    </form>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;