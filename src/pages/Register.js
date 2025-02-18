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
  const [userId, setUserId] = useState(null);

  const handleDomainChange = (e) => {
    const selectedDomain = e.target.value;
    setDomain(selectedDomain);
    setQuestions(domainQuestions[selectedDomain]?.questions || []);
  };
 
  const handleUserRegistration = async (formData) => {
    try {
      const response = await fetch('https://gcube-club-site.onrender.com/api/v1/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned unexpected content type');
      }
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Registration failed');
      }
      
      // Store user ID in state
      setUserId(responseData.data._id);
      
      return responseData;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const handleAnswerRegistration = async (answers) => {
    try {
      const response = await fetch('https://gcube-club-site.onrender.com/api/v1/answer/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'user-id': userId
        },
        body: JSON.stringify(answers),
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || 'Answer registration failed');
      }
      
      return responseData;
    } catch (error) {
      console.error('Answer registration error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      username: name,
      email,
      contactNo: Number(contact),
      branch,
      srn: srn.toLowerCase().trim(),
      semester: Number(semester),
      domain
    };

    try {
      // Step 1: Register user
      const userResponse = await handleUserRegistration(formData);
      
      // Step 2: Collect answers
      const answers = questions.reduce((acc, question, index) => {
        acc[`question${index + 1}`] = question;
        acc[`answer${index + 1}`] = e.target.elements[`answer${index}`].value;
        return acc;
      }, {});

      // Step 3: Register answers
      await handleAnswerRegistration(answers);
      
      // Clear form and show success
      setName('');
      setEmail('');
      setContact('');
      setBranch('');
      setSrn('');
      setSemester('');
      setDomain('');
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    } catch (error) {
      alert(error.message || 'An error occurred during registration');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1d23' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <NavigationBar username="JohnDoe" />
      </div>
      <Container fluid className="py-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1 className="display-4" style={{
                fontFamily: 'Zen Dots',
                fontSize: '4vw',
                fontWeight: 'bolder',
                color: 'rgb(44, 211, 211)',
                textShadow: '0 0 15px rgb(0, 106, 163), 0 0 25px rgba(10, 102, 188, 0.8), 0 0 35px rgb(7, 135, 135)',
                textAlign: 'center', // Center the text
                marginBottom: '5vh',
                
                
               }}>Register</h1>
            <p className="lead text-white">Join us today and become a part of our community!</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <Card className="contact-form-card" style={{ backgroundColor: '#2a2e35', border: 'none' }}>
              <Card.Body>
                {showConfirmation ? (
                  <div className="text-center">
                    <h4 style={{ fontWeight: 'bolder' }}><em>Registration Successful!</em></h4>
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
                          <input 
                            type="text" 
                            className="form-control" 
                            style={{ backgroundColor: '#333', color: '#fff' }} 
                            name={`answer${index}`}
                            required 
                          />
                        </div>
                      ))}
                      {/* {uploadRequired && (
                        <div className="mb-3">
                          <label className="form-label text-white">{documentLabel}</label>
                          <input type="file" className="form-control" onChange={(e) => setDocument(e.target.files[0])} required />
                        </div>
                      )} */}
                      <Button variant="outline-secondary" style={{  backgroundColor: 'rgba(255, 0, 0, 0.8)', // Neon Red
                          color: 'whitesmoke',
                          padding: '10px 20px',
                          borderRadius: '5px',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'Oswald',
                          fontSize: '1rem',
                          boxShadow: '0 4px 10px rgba(255, 0, 0, 0.85)', // Neon Red shadow
                          transition: 'box-shadow 0.3s ease-in-out', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontFamily: 'Oswald', fontSize: '1rem' }} className="icon2" type="submit" disabled={isSubmitting}>
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