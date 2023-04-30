import React from 'react'
import '../sass/topheader.scss'
import { Col, Container, Row } from 'react-bootstrap'

const TopHeader = () => {
  return (
    <section className='top__header__sec d-none d-xl-block'>
        <Container>
            <Row className='align-items-center'>
                <Col xl={10}   className='d-flex gap-5  align-items-center'>
                    <div  className='d-flex gap-2  align-items-center'>
                <i className="bi bi-stopwatch"></i>
                <p>Opening Hours: 8am - 6pm</p>

                    </div>
                    <div  className='d-flex gap-2  align-items-center'>
                <i className="bi bi-geo-alt"></i>
                <p>Dhulikhel, Kavre</p>
                    </div>
                </Col>
                <Col xl={2} className='d-flex justify-content-end'>
                <a>My Account</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default TopHeader