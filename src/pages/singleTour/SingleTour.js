import React, { useEffect, useState } from 'react'
import PageBanner from '../../components/PageBanner'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import "../../sass/singleTour/singletour.scss"
import { useParams } from 'react-router-dom'
import { tour } from '../../data/tour'
import { tourplan } from '../../data/tourplan'
import { gallery } from '../../data/gallery'
import TourInfo from '../../components/singletour/TourInfo'
import TourPlan from '../../components/singletour/TourPlan'
import TourGallery from '../../components/singletour/TourGallery'
import Booking from '../../components/singletour/Booking'

const SingleTour = () => {
  const {id} = useParams();

  const tourdetails = tour.find(item => {
    return item.id == id
  })

  const tourPlan = tourplan.find((item)=>{
    return item.tourid == id
  })

  const images = gallery.find((item)=> {
    return item.tourid == id
  })

console.log(images)
  return (
    <section>
      <PageBanner title={tourdetails.name}/>
      <section className='single__page py-5'>
        <Container>
          <Row>
            <Col lg={8}>
              <section className='single__bio'>

            <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Information">
       
          <TourInfo tourdetails={tourdetails}/> 
        
      </Tab>
      <Tab eventKey="profile" title="Tour Plan">
        <TourPlan plan={tourPlan} />
      </Tab>
      <Tab eventKey="longer-tab" title="Gallery">
        <TourGallery gallery={images}/>
       
      </Tab>
    </Tabs>
              </section>
            </Col>
            <Col lg={4} >
              <Booking tourdetails={tourdetails}/>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default SingleTour