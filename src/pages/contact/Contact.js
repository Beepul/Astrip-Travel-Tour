import React from 'react'
import "../../sass/contact/contact.scss"
import PageBanner from '../../components/PageBanner'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Heading from "../../components/Heading"

const Contact = () => {
  return (
    <section className='contact__page'>
      <PageBanner title="Lets Have A Talk Together"/>
      <Container className='d-flex justify-content-center align-items-center py-5 mt-5'>
        <div className='text__con text-center'>
        <h3>Astrip Travel Agency Inc.</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
        </div>
      </Container>
      <Container className='mb-5 pb-5'>
        <Row>
          <Col  lg={4}>
            <div className='short__info'>
            <span><i className="bi bi-geo-alt"></i></span>
            <div className='text'>
              <h4>Address</h4>
              <p>Dhulikhel, Kavre</p>
            </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className='short__info'>
            <span><i className="bi bi-telephone-outbound"></i></span>
            <div className='text'>
              <h4>Call Us!</h4>
              <p>+977 0000 0000 000</p>
              <p>+977 1111 0000 000</p>
            </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className='short__info'>
            <span><i className="bi bi-envelope-at"></i></span>
            <div className='text'>
              <h4>Email Info</h4>
              <p>info@company.com</p>
              <p>info@example.com</p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Heading title="RESERVATION FORM  " subtitle="Let's Get in Touch"/>
        <div className='form__con px-0 px-lg-5 '>
        <Form>
      <Row className="mb-3">
        <Form.Group className='col-lg-6' controlId="formGridText1">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className='col-lg-6' controlId="formGridEmail">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridText3">
        <Form.Control placeholder="Subject Matter" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder='Type Your Message..'/>
      </Form.Group>
      <div className='d-flex justify-content-center align-items-center mb-5'>
      <Button className='find__now ' >
					<div>
						<span className="transition" />
						<span className="label">Submit Now</span>
					</div>
				</Button>
      </div>
    </Form>
        </div>
      </Container>
    </section>
  )
}

export default Contact