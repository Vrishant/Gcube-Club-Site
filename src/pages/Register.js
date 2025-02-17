import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../components/navbar';

const domainQuestions = {
  'Technology': { questions: ['What programming languages do you know?', 'Have you worked on any tech projects?'] },
  'Design': { questions: ['What design tools are you proficient in?', 'Share a link to your portfolio.'] },
  'Marketing': { questions: ['Do you have experience in social media marketing?', 'What is your favorite marketing strategy?'] },
};

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [branch, setBranch] = useState('');
  const [srn, setSrn] = useState('');
  const [semester, setSemester] = useState('');
  const [domain, setDomain] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleDomainChange = (e) => {
    const selectedDomain = e.target.value;
    setDomain(selectedDomain);
    setQuestions(domainQuestions[selectedDomain]?.questions || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      name,
      email,
      contact,
      branch,
      srn,
      semester,
      domain,
    };

    const response = await fetch('https://gcube-club-site.onrender.com/api/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setName('');
      setEmail('');
      setContact('');
      setBranch('');
      setSrn('');
      setSemester('');
      setDomain('');
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
    setIsSubmitting(false);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1d23' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <NavigationBar username="JohnDoe" />
      </div>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1 className="display-4" style={{ fontFamily: 'Oswald', color: 'rgb(44, 211, 211)', fontWeight: 'bolder', fontSize: '4rem', textShadow: '0 0 10px black' }}>Register</h1>
            <p className="lead text-white">Join us today and become a part of our community!</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card className="contact-form-card" style={{ backgroundColor: '#2a2e35', border: 'none' }}>
              <Card.Body>
                {showConfirmation ? (
                  <div className="text-center">
                    <h4 style={{ fontWeight: 'bolder' }}><em1>Registration Successful!</em1></h4>
                    <p style={{ color: 'white' }}>Welcome to the community.</p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label text-white">Name:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Email:</label>
                        <input type="email" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Contact:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={contact} onChange={(e) => setContact(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Branch:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={branch} onChange={(e) => setBranch(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">SRN:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={srn} onChange={(e) => setSrn(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Semester:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={semester} onChange={(e) => setSemester(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Domain:</label>
                        <select className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={domain} onChange={handleDomainChange} required>
                          <option value="">Select a domain</option>
                          <option value="Technology">Technology</option>
                          <option value="Design">Design</option>
                          <option value="Marketing">Marketing</option>
                        </select>
                      </div>
                      {questions.map((question, index) => (
                        <div className="mb-3" key={index}>
                          <label className="form-label text-white">{question}</label>
                          <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} required />
                        </div>
                      ))}
                      <Button variant="outline-secondary" style={{ backgroundColor: 'rgb(123, 16, 68)', color: 'whitesmoke', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontFamily: 'Oswald', fontSize: '1rem' }} className="icon2" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
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

export default Register;
