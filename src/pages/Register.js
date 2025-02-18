/*import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import { ApiError } from '../utils/ApiError';

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
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new ApiError(response.status, responseData.message || 'Registration failed');
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
      const response = await fetch('http://gcube-club-site.onrender.com/api/v1/answer/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'user-id': userId
        },
        body: JSON.stringify(answers),
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new ApiError(response.status, responseData.message || 'Answer registration failed');
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
                          <input 
                            type="text" 
                            className="form-control" 
                            style={{ backgroundColor: '#333', color: '#fff' }} 
                            name={`answer${index}`}
                            required 
                          />
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
*/

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../components/navbar';

const domainQuestions = {
  'Technology': { questions: ['What programming languages do you know?', 'Have you worked on any tech projects?'] },
  'Design': { questions: ['What design tools are you proficient in?', 'Share a link to your portfolio.'] },
  'Marketing': { questions: ['Do you have experience in social media marketing?', 'What is your favorite marketing strategy?'] },
};

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    branch: '',
    srn: '',
    semester: '',
    domain: '',
  });
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleDomainChange = (e) => {
    const selectedDomain = e.target.value;
    setFormData(prev => ({ ...prev, domain: selectedDomain }));
    setQuestions(domainQuestions[selectedDomain]?.questions || []);
    // Reset answers when domain changes
    setAnswers(new Array(domainQuestions[selectedDomain]?.questions.length).fill(''));
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Step 1: Register user
      const userResponse = await fetch('https://gcube-club-site.onrender.com/api/v1/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          contactNo: formData.contact,
          branch: formData.branch,
          srn: formData.srn,
          semester: parseInt(formData.semester),
          domain: formData.domain,
        }),
      });

      if (!userResponse.ok) {
        throw new Error('User registration failed');
      }

      const userData = await userResponse.json();
      const userId = userData.data._id;

      // Step 2: Register answers
      const answersData = {
        userId,
        question1: questions[0] || '',
        answer1: answers[0] || '',
        question2: questions[1] || '',
        answer2: answers[1] || '',
        question3: questions[2] || '',
        answer3: answers[2] || '',
        question4: questions[3] || '',
        answer4: answers[3] || '',
      };

      const answersResponse = await fetch('https://gcube-club-site.onrender.com/api/v1/answer/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'user-id': userId
        },
        body: JSON.stringify(answersData),
      });

      if (!answersResponse.ok) {
        throw new Error('Answer registration failed');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        contact: '',
        branch: '',
        srn: '',
        semester: '',
        domain: '',
      });
      setAnswers([]);
      setQuestions([]);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error (show error message to user)
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
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label text-white">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ backgroundColor: '#333', color: '#fff' }}
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    {/* Similar input fields for email, contact, branch, srn, semester */}
                    <div className="mb-3">
                      <label className="form-label text-white">Domain:</label>
                      <select
                        className="form-control"
                        style={{ backgroundColor: '#333', color: '#fff' }}
                        value={formData.domain}
                        onChange={handleDomainChange}
                        required
                      >
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
                          value={answers[index] || ''}
                          onChange={(e) => handleAnswerChange(index, e.target.value)}
                          required
                        />
                      </div>
                    ))}
                    <Button
                      variant="outline-secondary"
                      style={{
                        backgroundColor: 'rgb(123, 16, 68)',
                        color: 'whitesmoke',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Oswald',
                        fontSize: '1rem'
                      }}
                      className="icon2"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </Button>
                  </form>
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