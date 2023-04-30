import React, { useState } from 'react'
import "../../sass/about/about.scss"
import PageBanner from '../../components/PageBanner'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Heading from '../../components/Heading'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup';


const About = () => {
  const [countStart, setCountStart]= useState(false)

  const guides = [
    {
      "image": "https://astrip-wp.b-cdn.net/wp-content/uploads/2022/10/guide1.png",
      "name": "Savannvh Nguyen",
      "title": "Tour Guide"
    },
    {
      "image": "https://astrip-wp.b-cdn.net/wp-content/uploads/2022/10/guide2.png",
      "name": "Savannvh Nguyen",
      "title": "Tour Guide"
    },
    {
      "image": "https://astrip-wp.b-cdn.net/wp-content/uploads/2022/10/guide3.png",
      "name": "Savannvh Nguyen",
      "title": "Tour Guide"
    }
]
  return (
    <section className='about__page'>
      <PageBanner title="About Us"/>
      <section className='py-5 my-5'>
        <Container>
          <Row>
            <Col lg={6} className='text d-flex flex-column gap-4'>
              <p>Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutin volutpat. Donec in quis the pellentesque veliten.</p>
              <p>You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin</p>
              <ul>
                <li>Price of additional materials or parts (if needed)</li>
                <li>Transportation cost for carrying new materials/parts</li>
              </ul>
              <Button className='find__now mt-4'>
					<div>
						<span className="transition" />
						<span className="label">Find Tour</span>
					</div>
				</Button>
            </Col>
            <Col lg={6} className='d-none d-lg-block'>
              <Row>
                <Col lg={6} className='img__con1'>
                  <div className='one'>
                  <img className='w-100 ' src='https://astrip-wp.b-cdn.net/wp-content/uploads/2022/10/feature3.png' />
                  </div>
                </Col>
                <Col lg={6} className='img__con2'>
                  <div className='two'>
                  <img className='w-100' src='https://astrip-wp.b-cdn.net/wp-content/uploads/2022/10/feature4.png' />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
        <Heading title="TOUR GUIDE'S" subtitle="Meet Our Excellent Guide's" />
        <Container className='guides mb-5'>
          <div className=' d-flex gap-4 '>
            {
              guides.map((item,index) => (
            <div key={index} className='card__item' >
              <div className='card__con'>
                <img className='w-100' src={item.image} />
              </div>
              <div className='text-center py-4'>
                <h4>{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </div>
              ))
            }
          </div>
        </Container>
        <section className='counter__sec mb-5'>
          <Container>
              <ScrollTrigger onEnter={()=>setCountStart(true)} onExit={()=>setCountStart(false)}>
            <Row className='counter__con'>
              <Col  lg={3} md={6} className='d-flex flex-column justify-content-center align-items-center'>
              <i className="bi bi-globe-asia-australia"></i>
              <h2>
              {countStart && 
                <CountUp end={400} duration={5} suffix='+'/>
              }
              </h2>
              <p>Awesome Tour</p>
              </Col>
              <Col lg={3} md={6} className='d-flex flex-column justify-content-center align-items-center'>
              <i className="bi bi-geo-alt-fill"></i>
              <h2>
              {countStart && 
                <CountUp end={250} duration={5} suffix='+'/>
              }
              </h2>
              <p>Stunning Places</p>
              </Col>
              <Col lg={3}  md={6} className='d-flex flex-column justify-content-center align-items-center'>
              <i className="bi bi-award"></i>
              <h2>
              {countStart && 
                <CountUp end={650} duration={5} suffix='+'/>
              }
              </h2>
              <p>Satisfied Customer</p>
              </Col>
              <Col lg={3}  md={6} className='d-flex flex-column justify-content-center align-items-center'>
              <i className="bi bi-people-fill"></i>
              <h2>
              {countStart && 
                <CountUp end={500} duration={5} suffix='+'/>
              }
              
              </h2>
              <p>Travel Guides</p>
              </Col>
            </Row>
              </ScrollTrigger>
          </Container>
        </section>
    </section>
  )
}

export default About