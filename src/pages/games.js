import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import NavigationBar from '../components/navbar';
import backgroundImage from '../assets/3_back.jpeg';
import image1 from '../assets/COD-Microwarfare.png';
import image2 from '../assets/MINIHEIST.jpg';

const Games = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const gamesData = [
    {
      id: 1,
      title: 'COD: Microwarfare',
      description: 'This game was made for the 24 hour DeltaTime 2024 game jam organised by the PARALLAX club in PES University, EC campus. The theme was "Too Much of a Good Thing". Our interpretation of it was too much of being immune(good thing) to a kind of virus makes you vulnerable(bad thing) to another.',
      image: image1,
      link: 'https://minedude918.itch.io/codmicrowarfare',
    },
    {
      id: 2,
      title: 'Mini Heist',
      description: 'This game was made for the GMTK Game Jam 2024 game jam hosted on itch. The theme was "Build to Scale". Our interpretation of it was you can scale anything in the game from characters, bank vaults; to even yourself!!',
      image: image2,
      link: 'https://dreadnexus.itch.io/miniheist',
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        width: '100vw',
        backgroundAttachment: 'fixed',
        minHeight: '150vh',
        paddingBottom: '50px',
      }}
    >
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
                marginBottom: '10vh',
                '@media (max-width: 767px)': {
                  fontSize: '3vw',
                },
                '@media (min-width: 768px) and (max-width: 1199px)': {
                  fontSize: '3.5vw',
                },
              }}
            >
              Our Games
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <div
              style={{
                opacity: fadeIn ? 1 : 0,
                transition: 'opacity 0.7s ease-in-out',
              }}
            >
              {gamesData.map((game) => (
                <div
                  key={game.id}
                  style={{
                    backgroundColor: 'rgba(62, 62, 62, 0.7)',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                    margin: '10px 0',
                    width: '100%',
                  }}
                >
                  <img
                    src={game.image}
                    alt="Game Preview"
                    style={{
                      width: '200px',
                      height: '150px',
                      borderRadius: '10px',
                    }}
                  />
                  <div>
                    <h2
                      style={{
                        fontFamily: 'Oswald',
                        fontSize: '2rem',
                        fontWeight: 'bolder',
                        color: 'rgb(44, 211, 211)',
                        textShadow: '0 0 15px rgb(0, 106, 163), 0 0 25px rgba(10, 102, 188, 0.8), 0 0 35px rgb(7, 135, 135)',
                        marginBottom: '10px',
                      }}
                    >
                      {game.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'Domine',
                        fontSize: '1rem',
                        color: 'whitesmoke',
                        marginBottom: '20px',
                      }}
                    >
                      {game.description}
                    </p>
                    <a href={game.link} target="_blank" rel="noopener noreferrer">
                      <button
                        className="icon2"
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
                      >
                        Play Now
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Games;