
import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Linkedin, Instagram } from 'react-bootstrap-icons';
import NavigationBar from '../components/navbar';
import dhruv from '../assets/DHRUV.jpeg';
import vajra from '../assets/VAJRA.jpeg';
import './about.css';
import backgroundImage2 from '../assets/3_back.jpeg';

const About = () => {
  return (
    <div style={{ minHeight: '100vh',  backgroundImage: `url(${backgroundImage2})`,backgroundAttachment:'fixed',backgroundSize:'cover' }}>
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
                textAlign: 'center', // Center the text
                marginBottom: '5vh',
                '@media (max-width: 767px)': {
                  fontSize: '3vw',
                },
                '@media (min-width: 768px) and (max-width: 1199px)': {
                  fontSize: '3.5vw',
                },
              }}
            >
              About Us
            </h2>
            
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8}>
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
              At GCUBE, we believe in the power of collaboration and creativity to shape the future of game development. 
              Our mission is to unite passionate developers, designers, and artists in a supportive community where they can hone their skills, 
              share ideas, and build innovative games together.
            </p>

            
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <h2 className="mb-4" style={{ color: 'rgb(44, 211, 211)', fontWeight: 'bolder' }}>The Club Heads</h2>
            <Row className="g-4">
              {/* Team Member 1 */}
              <Col md={6}>
                <Card className="team-member-card" style={{ backgroundColor: '#2a2e35', border: 'none' }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Image src={dhruv} alt="Team Member 1" fluid className="rounded-start" style={{objectFit: 'cover', height: '100%'}}/>
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title style={{ color: 'rgb(255, 0, 0)', // Neon Red
                        textShadow: '0 0 15px rgb(255, 0, 0), 0 0 25px rgba(255, 0, 0, 0.8), 0 0 35px rgb(255, 0, 0)', fontSize: '1.5rem' }}>Dhruv Jain</Card.Title>
                        <Card.Text className="text-white">
                          Game Developer with expertise in Unreal Engine, Blender and C++. Passionate about creating immersive gameplay experiences.
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/d16r7v-17a8n/" target='_blank' className="text-light me-3 icon">
                          <Linkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com/dhruvj_1705?igsh=YXVmMTR2ODM4cmxi" target='_blank' className="text-light me-3 icon">
                          <Instagram size={24} /> 
                        </a>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              {/* Team Member 2 */}
              <Col md={6}>
                <Card className="team-member-card" style={{ backgroundColor: '#2a2e35', border: 'none' }}>
                  <Row className="g-0">
                    <Col md={4}>
                      <Image src={vajra} alt="Team Member 2" fluid className="rounded-start" />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title style={{ color: 'rgb(255, 0, 0)', // Neon Red
                        textShadow: '0 0 15px rgb(255, 0, 0), 0 0 25px rgba(255, 0, 0, 0.8), 0 0 35px rgb(255, 0, 0)', fontSize: '1.5rem', fontWeight: 'bold' }}>Vajra Dindakurthi</Card.Title>
                        <Card.Text className="text-white">
                            Programmer with a passion for Mathematical Designs in games . Enjoys solving complex puzzles
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/vajra-dindakurthi-a276ba313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="text-light me-3 icon">
                          <Linkedin size={24} /> 
                        </a>
                        <a href="https://www.instagram.com/vajra._d?utm_source=qr&igsh=MTdtYWFqbHBhamYzdw==" target='_blank' className="text-light me-3 icon">
                          <Instagram size={24} /> 
                        </a>

                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Future Prospect Section */}
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <h2 className="mb-4" style={{ color: 'rgb(44, 211, 211)', fontWeight: 'bolder' }}>Future Prospect</h2>
            <Card className="future-prospect-card" style={{ backgroundColor: '#2a2e35', border: 'none', padding: '20px' }}>
              <Card.Body>
                <Card.Text className="text-white" style={{ fontSize: '1.2rem', lineHeight: '1.8', fontWeight: 'bold' }}>
                  GCUBE envisions a future where we take bold steps toward self-publishing our games, showcasing the creativity and skill of our members. 
                  While we remain open to partnerships with publishers, our primary goal is to highlight our work independently and establish a unique 
                  voice in the industry. We aspire to represent our college at leading national and international events, sharing our passion, innovation, 
                  and talent with the broader gaming community and beyond.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
