import React, { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hospitality from '../assets/carousel/Hospitality-carousel.jpeg'
import VE from '../assets/carousel/video-carousel.jpeg'
import market from '../assets/carousel/Marketing-carousel.webp'
import sponsor from '../assets/carousel/Sponsor-carousel.webp'
import EVM from '../assets/carousel/EVM-carousel.jpeg'
import Ops from '../assets/carousel/Operations-carousel.webp'
import logs from '../assets/carousel/Logs-carousel.jpeg'
import design from '../assets/carousel/Design-carousel.webp'
import social from '../assets/carousel/social-carousel.webp'
import PR from '../assets/carousel/content-carousel.webp'
import Tech from '../assets/carousel/Tech-carousel.webp'
import Camp from '../assets/carousel/campaign-carousel.jpeg'


const Home2 = () => {
  const cards = [
    {
      title: 'Hospitality',
      content: 'Hospitality is the act of making people feel welcome, valued, and comfortable by providing friendly and attentive service.',
      // image: 'https://images.pexels.com/photos/5638273/pexels-photo-5638273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image:hospitality,
      buttonText: 'Join Now',
    },
    {
      title: 'Video Editing',
      content: 'Edit and produce high-quality videos to capture event highlights, promotional content, and other multimedia materials for marketing and post-event use.',
      // image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: VE,
      buttonText: 'Join Now',
    },
    {
      title: 'Marketing',
      content: 'Plan and execute marketing strategies to promote the event, utilizing various channels to reach and attract the desired audience.',
      // image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: market,
      buttonText: 'Join Now',
    },
    {
      title: 'Sponsorship',
      content: 'Identify potential sponsors, negotiate partnerships, and manage relationships to secure funding and support for the event.',
      // image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: sponsor,
      buttonText: 'Join Now',
    },
    {
      title: 'Event Management',
      content: 'Plan, manage, and execute events seamlessly.This role calls for excellent communication, efficient organization, and strong problem-solving skills.',
      // image: 'https://images.pexels.com/photos/30324916/pexels-photo-30324916/free-photo-of-crowded-convention-center-gathering-event.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: EVM,
      buttonText: 'Join Now',
    },
    {
      title: 'Operations',
      content: 'Coordinate event schedules, book venues, and obtain necessary permissions and approvals from relevant authorities for successful execution.',
      // image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: Ops,
      buttonText: 'Join Now',
    },
    {
      title: 'Logistics',
      content: 'Oversee the transportation, equipment, and supplies needed for the event, ensuring everything is in place and delivered on time for smooth operations.',
      // image: 'https://images.pexels.com/photos/5025489/pexels-photo-5025489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: logs,
      buttonText: 'Join Now',
    },
    {
      title: 'Design',
      content: `Create visually appealing materials, including graphics, layouts, and promotional content, to enhance the event's aesthetic and brand identity.`,
      // image: 'https://images.pexels.com/photos/5428724/pexels-photo-5428724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: design,
      buttonText: 'Join Now',
    },
    {
      title: 'Social Media',
      content: `From trending posts to viral campaigns, we master the art of social media. Experience content creation at its finest—engaging, creative, and impactful!`,
      // image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: social,
      buttonText: 'Join Now',
    },
    {
      title: 'PR & Content',
      content: 'Develop and manage public relations strategies and create compelling content to effectively communicate event details and engage the target audience',
      // image: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: PR,
      buttonText: 'Join Now',
    },
    {
      title: 'Technical',
      content: `From scratch to Unreal Engine, we cover everything in game development. Dive into coding, design, and innovation—anything and everything, all in one place!`,
      // image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: Tech,
      buttonText: 'Join Now',
    },
    {
      title: 'Campaigning',
      content: 'Create engaging content for a PR campaign, focus on event details and audience engagement to drive excitement and action.',
      // image: 'https://images.pexels.com/photos/5935743/pexels-photo-5935743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      image: Camp,
      buttonText: 'Join Now',
    },

  ];

  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Update cardsPerSlide based on screen width
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1); // Small screens: 1 card
      } else {
        setCardsPerSlide(3); // Larger screens: up to 3 cards
      }
    };

    updateCardsPerSlide(); // Set initial value
    window.addEventListener('resize', updateCardsPerSlide); // Update on resize
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  // Chunk cards into groups based on cardsPerSlide
  const chunkCards = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const cardGroups = chunkCards(cards, cardsPerSlide);

  return (
    <div className="container">
      <style>
        {`
          .carousel-media {
            height: 300px;
            object-fit: cover;
          }

          @media (max-width: 576px) {
            .carousel-media {
              height: 200px;
            }
          }

          @media (max-width: 768px) {
            .carousel-media {
              height: 250px;
            }
          }

          @media (max-width: 992px) {
            .carousel-media {
              height: 280px;
            }
          }

          @media (max-width: 1200px) {
            .carousel-media {
              height: 300px;
            }
          }
        `}
      </style>
      <Carousel controls={true} indicators={false} interval={3000}>
        {cardGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {group.map((card, idx) => (
                <div className={`col-${12 / cardsPerSlide} px-2`} key={idx}>
                  <Card
                    className="mx-0"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      marginBottom: '15px',
                      color: 'whitesmoke',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={card.image}
                      alt='Image Loading'
                      className="img-fluid carousel-media"
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ textAlign: 'center', fontFamily: 'Oswald', fontSize: '2rem' }}
                      >
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.content}</Card.Text>
                      <div className="d-flex justify-content-center">
                        <a target='_blank' href='/register'>
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
                          className='icon2'
                        >
                          {card.buttonText}
                        </Button>
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home2;


//Comment code 2

// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home2 = () => {
//   const cards = [
//     {
//       title: 'Leaders',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//     {
//       title: 'Innovators',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//     {
//       title: 'Coders',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//     {
//       title: 'Designers',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//     {
//       title: 'Thinkers',
//       content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//       image: 'https://picsum.photos/200/150',
//       buttonText: 'Join Now',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//   };

//   const visibleCards = [
//     cards[currentIndex],
//     cards[(currentIndex + 1) % cards.length],
//     cards[(currentIndex + 2) % cards.length],
//   ];

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center">
//         <button className="btn btn-outline-secondary" onClick={handlePrev}>
//           Prev
//         </button>
//         <div className="row w-100">
//           {visibleCards.map((card, index) => (
//             <div className="col-md-4" key={index}>
//               <Card
//                 className="mx-auto"
//                 style={{
//                   width: '18rem',
//                   backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                   color: 'whitesmoke',
//                   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
//                   marginBottom: '15px',
//                 }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={card.image}
//                   style={{
//                     height: '300px',
//                     objectFit: 'cover',
//                   }}
//                 />
//                 <Card.Body>
//                   <Card.Title
//                     style={{ textAlign: 'center', fontFamily: 'Oswald', fontSize: '2rem' }}
//                   >
//                     {card.title}
//                   </Card.Title>
//                   <Card.Text>{card.content}</Card.Text>
//                   <div className="d-flex justify-content-center">
//                     <Button
//                       variant="outline-secondary"
//                       className="btn-lg"
//                     >
//                       {card.buttonText}
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//         <button className="btn btn-outline-secondary" onClick={handleNext}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home2;


//Comment Code 3


{/* <div className="row">
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black translucent background
          padding: '7px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Add box shadow
        }}
      >
        <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
          <img src="https://picsum.photos/200/150" alt="Image 1" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="card-body" style={{ backgroundColor: 'transparent', color: 'whitesmoke' }}>
            <h5 className="blue1" style={{textAlign: 'center', font: 'Bold', fontSize: '2rem', fontFamily:'Oswald'}}>Leaders</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-lg btn-outline-secondary" style={{ margin: 'auto' }}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black translucent background
          padding: '7px',
          boxShadow: '0 4px 15px rgba(0 , 0, 0.3)', // Add box shadow
        }}
      >
        <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
          <img src="https://picsum.photos/200/150" alt="Image 2" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="card-body" style={{ backgroundColor: 'transparent', color: 'whitesmoke' }}>
            <h5 className="blue1" style={{textAlign: 'center', font: 'Bold', fontSize: '2rem', fontFamily:'Oswald'}}>Innovators</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-lg btn-outline-secondary" style={{ margin: 'auto' }}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black translucent background
          padding: '7px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Add box shadow
        }}
      >
        <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
          <img src="https://picsum.photos/200/150" alt="Image 3" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="card-body" style={{ backgroundColor: 'transparent', color: 'whitesmoke' }}>
            <h5 className="blue1" style={{textAlign: 'center', font: 'Bold', fontSize: '2rem', fontFamily:'Oswald'}}>Coders</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-lg btn-outline-secondary" style={{ margin: 'auto' }}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="col-md-3">
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black translucent background
          padding: '7px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Add box shadow
        }}
      >
        <div className="card mb-4 shadow-sm" style={{ backgroundColor: 'transparent' }}>
          <img src="https://picsum.photos/200/150" alt="Image 4" className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
          <div className="card-body" style={{ backgroundColor: 'transparent', color: 'whitesmoke' }}>
            <h5 className="blue1" style={{textAlign: 'center', font: 'Bold', fontSize: '2rem', fontFamily:'Oswald'}}>Designers</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn btn-lg btn-outline-secondary" style={{ margin: 'auto' }}>Join Now</button>
            </div>
          </div>
        </div>
      </div>
          </div> 
        </div> */}