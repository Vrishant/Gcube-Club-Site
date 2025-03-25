import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from '../components/navbar';
import backgroundImage from '../assets/3_back.jpeg';
import axios from 'axios';
import './register.css';

const domainQuestions = {
  'Sponsorship': { 
    questions: [
      'Do you have any prior experience working in this domain? If yes, do elaborate and do mention the name of sponsors if you have got any.',
      'If there arises an issue between two sponsors with regard to their stalls, how would you solve it?',
      'How would you approach a sponsor to ask them to come to an event (mention for both technical and non-technical)?'
    ] 
  },
  'Marketing': { 
    questions: [
      'Since our club is a new club on campus, what strategies would you suggest to make our presence on campus be known to people (both offline and online)?',
      'Suggest what other domains in the club that you could work with together to come up with ideas and plans to make new strategies.',
      'Do you have any prior experience working in this domain? If yes, do elaborate.',
      'Mention any fun and unique method in which you can approach people to talk to them about any upcoming event.'
    ] 
  },
  'Design': { 
    questions: [
      'Do you have any prior experience working in this domain? If yes, do elaborate.',
      'Upload your profile with a few of your works as a Google Drive link with the folder under your name.'
    ] 
  },
  'Event Management': { 
    questions: [
      'Do you have any prior experience with Event Management? If yes, do elaborate.',
      'You are in charge of the recreation section in one of our game development hackathons, suggest and explain a small game that could be played in under a minute.'
    ] 
  },
  'Logistics': { 
    questions: [
      'Do you have any prior experience working with Logistics in another club before? If yes, which club?',
      'How would you ensure the right usage of club funds and mention the priority in case of a crunch of funds?',
      'How will you handle a situation wherein the venue booking has been cancelled last minute?'
    ] 
  },
  'Social Media': { 
    questions: [
      'Do you create content or have helped in its making? Do you stay updated with the latest trends?',
      'How do you make your content more engaging and what can you do to increase account engagement?',
      'What software/apps do you use to create content?',
      'Attach a few of your works (upload) & mention if you are a beginner with no prior experience. (Upload as a link)'
    ] 
  },
  'PR & Content': { 
    questions: [
      'Do you have any prior experience working in this domain? If yes, do elaborate.',
      'Since PR involves social media, do you have prior experience with creating content for Instagram such as posts and reels?',
      'Attach a Google Drive link containing your work along with a PDF that has an introductory message about the club that could be used for advertising the club. Name the files as your name.'
    ] 
  },
  'Hospitality': {
    questions: [
      'What hospitality skills do you possess (any 3)?',
      'What are your 3 weaknesses?',
      'Have you volunteered or worked in hospitality or managed any events before? If yes, please describe your experience.'
    ]
  },
  'Video Editing': {
    questions: [
      'Do you have any prior experience working in this domain? If yes, do elaborate.',
      'Which software do you use for editing?',
      'What is your specialty? (like 3D designs or reel making, etc.)',
      'Attach a Google Drive link containing your works with the folder under your name.'
    ]
  },
  'Web Development': {
    questions: [
      'Have you built any websites before? If yes, share details. If no, what interests you in web development?',
      'What web technologies and frameworks are you proficient in? (e.g., HTML, CSS, JavaScript, React, Node.js, Django, etc.)',
      'What do you think makes a good website user-friendly and visually appealing?'
    ]
  },
  'Operations': {
    questions: [
      'How many clubs have you worked in before?',
      'Have you drafted letters or emails before and gotten letters signed?',
      'Do you know where VK sir\'s office is?'
    ]
  },
  'Technical (Game Music)': {
    questions: [
      'What digital audio workstation software do you use?',
      'Describe your best sound design project concisely (e.g., Custom synth presets, Digital drum sounds, Lead sounds, VFX sounds, Any genre of music).'
    ]
  },
  'Technical (Narrative Design)': {
    questions: [
      'What makes a story engaging?',
      'How can you implement a story for a game setting?'
    ]
  },
  'Technical (Game Designer)': {
    questions: [
      'Describe a scenario where the game environment can be used as a game mechanic?',
      'What is a gameplay loop?'
    ]
  },
  'Technical (Graphic Designer)': {
    questions: [
      'What software/tool do you use for making your design?',
      'What is a gameplay loop?'
    ]
  },
  'Technical (Game Programmer)': {
    questions: [
      'What programming language would you use to make a game and why?',
      'Why do you think observer  pattern is a widely used in game Programing?'
    ]
  }
};

const API_BASE_URL = "http://localhost:4000/api/v1";

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
    console.log("Attempting User Registration with Data:", formData);
    try {
        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            form.append(key, value);
        });

        const response = await axios.post("https://gcube-club-site.onrender.com/api/v1/user/register", form);

        console.log("User Registration Response:", response.data);
        setUserId(response.data.data._id);
        return response.data;
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error;
    }
};
  
  

  const handleAnswerRegistration = async (answers, userId) => {
    try {
      if (!userId) throw new Error("User ID is missing. Answer registration failed.");
  
      console.log("Submitting Answers with User ID:", userId);
  
      const response = await axios.post(
        "https://gcube-club-site.onrender.com/api/v1/answer/register",
        answers,
        { headers: { 'user-id': userId, 'Content-Type': 'application/json' } }
      );
  
      console.log("Answer Registration Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Answer registration error:", error.response?.data || error.message);
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
      // Step 1: Register User
      const userResponse = await handleUserRegistration(formData);
      console.log("Registered User Response:", userResponse);
      setShowConfirmation(true);
      
      // Store userId in state
      setUserId(userResponse.data._id);
      console.log("User ID Set in State:", userResponse.data._id); 

      // Wait for state update before proceeding
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Step 2: Collect Answers
      const answers = questions.reduce((acc, question, index) => {
          acc[`question${index + 1}`] = question;
          acc[`answer${index + 1}`] = e.target.elements[`answer${index}`].value;
          return acc;
      }, {});

      // Step 3: Register Answers
      console.log("Submitting Answers with User ID:", userResponse.data._id);
      await handleAnswerRegistration(answers, userResponse.data._id);
      
      setName('');
      setEmail('');
      setContact('');
      setBranch('');
      setSrn('');
      setSemester('');
      setDomain('');
      setTimeout(() => setShowConfirmation(false), 3000);
  } catch (error) {
      alert(error.message || "An error occurred during registration");
  } finally {
      setIsSubmitting(false);
  }
};


  return (
    <div style={{ minHeight: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }} >
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
                textAlign: 'center', 
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
                    <h4 style={{ fontWeight: 'bolder', color: 'white' }}><em>Registration Successful!</em></h4>
                    <p style={{ color: 'white' }}>Welcome to the community.</p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label text-white placeholder-white">Name:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={name} onChange={(e) => setName(e.target.value)} required placeholder='Enter full name'/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Email:</label>
                        <input type="email" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Eg... john@gmail.com'/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Contact:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={contact} onChange={(e) => setContact(e.target.value)} required placeholder='Enter only 10 digits'/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Branch:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={branch} onChange={(e) => setBranch(e.target.value)} required placeholder='Eg.. CSE'/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">SRN:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={srn} onChange={(e) => setSrn(e.target.value)} required placeholder='Eg.. PES1UG23EC123'/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Semester:</label>
                        <input type="text" className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={semester} onChange={(e) => setSemester(e.target.value)} required placeholder='Eg.. 2, 4, 6'/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-white">Domain:</label>
                        <select className="form-control" style={{ backgroundColor: '#333', color: '#fff' }} value={domain} onChange={handleDomainChange} required>
                          <option value="">Select a domain</option>
                          <option value="Sponsorship">Sponsorship</option>
                            <option value="Marketing">Marketing & Campaigning</option>
                            <option value="Design">Design</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Event Management">Event Management</option>
                            <option value="Logistics">Logistics</option>
                            <option value="Social Media">Social Media</option>
                            <option value="PR & Content">PR & Content</option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Video Editing">Video Editing</option>
                            <option value="Operations">Operations</option> 
                            <option value="Technical (Game Music)">Technical (Game Music)</option>
                            <option value="Technical (Narrative Design)">Technical (Narrative Design)</option>
                            <option value="Technical (Game Designer)">Technical (Game Designer)</option>
                            <option value="Technical (Graphic Designer)">Technical (Graphic Designer)</option>
                            <option value="Technical (Game Programmer)">Technical (Game Programmer)</option>
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
                        {isSubmitting ? `Registering...(Don't  Reload)` : 'Register'}
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