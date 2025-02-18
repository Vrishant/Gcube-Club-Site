import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from '../components/navbar';
import logoImage from '../assets/img1.jpeg'; 
import textImage from '../assets/img2.jpeg'; 
import backgroundImage from '../assets/3.jpeg';
import FAQs from '../components/FAQ';
import Carousel from '../components/carousel';
import logo2Image from '../assets/logo.jpeg'; // Import the new logo
import './home2media.css';

const Home2 = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeInTextArea, setFadeInTextArea] = useState(false);
  const [fadeInTextArea2, setFadeInTextArea2] = useState(false);
  const [fadeInFAQ, setFadeInFAQ] = useState(false); 
  const textAreaRef = useRef(null);
  const textAreaRef2 = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInTextArea(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (textAreaRef.current) {
      observer.observe(textAreaRef.current);
    }

    return () => {
      if (textAreaRef.current) {
        observer.unobserve(textAreaRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInTextArea2(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (textAreaRef2.current) {
      observer.observe(textAreaRef2.current);
    }

    return () => {
      if (textAreaRef2.current) {
        observer.unobserve(textAreaRef2.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeInFAQ(true);
        }
      },
      { threshold: 0.8 } // Trigger when 80% of the element is visible
    );
  
    if (faqRef.current) {
      observer.observe(faqRef.current);
    }
  
    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  return (
    <div style={{ 
      height: '380vh', 
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Ensure the background covers the entire container
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'repeat-y' // Prevent the background from repeating
    }}
    className='mainSiteHeight'
    > {/* Extend the main site page height */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        {/* Pass the new logo to Navbar */}
        <NavigationBar username="JohnDoe" logo={logo2Image} />
      </div>
      <div>
        <div style={{ position: 'relative', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "5px"}}>
          <img
            src={logoImage}
            alt="Logo"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 1,
              boxShadow: '0 4px 15px 30px rgba(0,0, 139, 0.6)',
            }}
          />
          <div style={{ position: 'absolute', textAlign: 'center', top: '20%' }}>
            <h1
              style={{
                fontSize: '10vw',
                fontFamily: 'Zen Dots',
                color: 'white',
                textShadow: '0 0 15px rgb(0,0,139), 0 0 25px rgba(0,0,139, 0.8), 0 0 35px rgb(0,0,139)',
                opacity: fadeIn ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                '@media (max-width: 767px)': {
                  fontSize: '8vw',
                },
                '@media (min-width: 768px) and (max-width: 1199px)': {
                  fontSize: '9vw',
                },
              }}
              className='home-header1'
            >
              GCUBE
            </h1>
            <p
              style={{
                fontSize: '3vw',
                fontFamily: 'Zen Dots',
                color: '#fff',
                textShadow: '0 0 15px rgb(245,49,49), 0 0 25px rgba(245,49,49, 2), 0 0 35px rgb(245,49,49)',
                opacity: fadeIn ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                color: 'rgb(0,0,0)',
                marginTop: '0px',
                '@media (max-width: 767px)': {
                  fontSize: '1.5vw',
                },
                '@media (min-width: 768px) and (max-width: 1199px)': {
                  fontSize: '1.8vw',
                },
              }}
              className='sub-header1'
            >
              Get. Game. Going.
            </p>
          </div>
        </div>

        <div
          ref={textAreaRef}
          style={{
            position: 'relative',
            marginTop: '15vh',
            height: 'auto', // Adjust height as needed
            width: '100%',
            display: 'flex',
            flexDirection: 'row', // Stack elements horizontally
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center', // Center content vertically
            padding: '20px', // Add some padding
            backgroundColor: 'rgba(255, 255, 255, 0)', // Add a background color
            borderRadius: '10px', // Add a border radius
            opacity: fadeInTextArea ? 1 : 0, // Fade-in effect
            transform: fadeInTextArea ? 'translateY(0)' : 'translateY(20px)', // Smooth translate effect
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Transition for both properties
            '@media (max-width: 767px)': {
              top: '160%',
              flexDirection: 'column', // Stack elements vertically on smaller devices
            },
            '@media (min-width: 768px) and (max-width: 1199px)': {
              top: '180%',
            },
          }}
        >
          <img
            src={textImage}
            alt="Text Image"
            style={{
              width: '30%', // Make the image fit the screen
              height: 'auto', // Adjust height as needed
              borderRadius: '10px',
              border: '1px solid #ccc', // Add a border
              boxShadow: '0 4px 25px rgba(69, 168, 193, 0.9)', 
              '@media (max-width: 767px)': {
                width: '100%', // Make the image fit the screen on smaller devices
              },
            }}
          />
          <div style={{ width: '60%', marginLeft: '20px' }}>
            <h2
              style={{
                fontFamily: 'Zen Dots',
                fontSize: '4vw',
                fontWeight: 'bolder',
                color: 'rgb(44, 211, 211)',
                textShadow: '0 0 15px rgb(0, 106, 163), 0 0 25px rgba(10, 102, 188, 0.8), 0 0 35px rgb(7, 135, 135)',
                textAlign: 'center', // Center the text
                marginBottom: '10vh',
                '@media (max-width: 767px)': {
                  fontSize: '3vw',
                },
                '@media (min-width: 768px) and (max-width: 1199px)': {
                  fontSize: '3.5vw',
                },
              }}
            >
              Game Development Club Of <b>PES</b>
            </h2>
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
              GCUBE unites game developers and artists to create, collaborate, and innovate. We host game jams, projects, and industry events to turn ideas into reality.
            </p>
          </div>
        </div>

        <div
          ref={textAreaRef2}
          style={{
            position: 'relative',
            marginTop: '7rem ',
            height: 'auto', // Adjust height as needed
            width: '100%',
            display: 'flex',
            flexDirection: 'column', // Stack elements vertically
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center', // Center content vertically
            padding: '7px',
            opacity: fadeInTextArea2 ? 1 : 0, // Fade-in effect for the second div
            transform: fadeInTextArea2 ? 'translateY(0)' : 'translateY(20px)', // Smooth translate effect
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Transition for both properties
            '@media (max-width: 767px)': {
              top: '160%',
            },
            '@media (min-width: 768px) and (max-width: 1199px)': {
              top: '170%',
            },
          }}
        >
          <h2
            style={{
              fontFamily: 'Zen Dots',
              fontSize: '4vw',
              fontWeight: 'bolder',
              color: 'rgb(44, 211, 211)',
              textShadow: '0 0 15px rgb(0, 106, 163), 0 0 25px rgba(10, 102, 188, 0.8), 0 0 35px rgb(7, 135, 135)',
              textAlign: 'center', // Center the text
              marginBottom: '10vh',
              '@media (max-width: 767px)': {
                fontSize: '3vw',
              },
              '@media (min-width: 768px) and (max-width: 1199px)': {
                fontSize: '3.5vw',
              },
            }}
          >
            Who Are We Looking For?
          </h2>
          <Carousel/>
        </div>

        <div
          ref={faqRef} // New ref for the second text area
          style={{
            position: 'relative',
            marginTop: '5rem ',
            height: 'auto', // Adjust height as needed
            width: '100%',
            display: 'flex',
            flexDirection: 'column', // Stack elements vertically
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center', // Center content vertically
            padding: '7px',
            opacity: fadeInFAQ ? 1 : 0, // Fade-in effect for the FAQ section
            transform: fadeInFAQ ? 'translateY(0)' : 'translateY(20px)', // Smooth translate effect
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', // Transition for both properties
            '@media (max-width: 767px)': {
              top: '240%',
            },
            '@media (min-width: 768px) and (max-width: 1199px)': {
              top: '260%',
            },
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '20%', // Position it below the cards
              width: '100%',
              display: 'flex',
              flexDirection: 'column', // Stack elements vertically
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
              padding: '7px',
              '@media (max-width: 767px)': {
                top: '15%',
              },
              '@media (min-width: 768px) and (max-width: 1199px)': {
                top: '18%',
              },
            }}
          >
            <h2
              style={{
                fontFamily: 'Zen Dots',
                fontSize: '4vw',
                fontWeight: 'bolder',
                color: 'rgb(44, 211, 211)',
                textShadow: '0 0 15px rgb(0, 106, 163), 0 0 25px rgba(10, 102, 188, 0.8), 0 0 35px rgb(7, 135, 135)',
                marginBottom: '1rem',
                '@media (max-width: 767px)': {
                  fontSize: '3.5vw',
                },
                '@media (min-width: 768px) and (max-width: 1199px)': {
                  fontSize: '3.5vw',
                },
              }}
            >
              FAQs
            </h2>
            <FAQs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;