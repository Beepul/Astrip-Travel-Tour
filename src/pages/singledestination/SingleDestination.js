import React from 'react'
import "../../sass/singledest/singledest.scss"
import PageBanner from '../../components/PageBanner'
import { useParams } from 'react-router-dom'
import { destination } from '../../data/destination';
import { Col, Container, Row } from 'react-bootstrap';

const SingleDestination = () => {
  const {id} = useParams();

  const dest = destination.find((item) => {
    return item.id == id
  })

  return (
    <section className='single__dest__page'>
      <PageBanner title={dest.title} type={dest.category} destination={dest.name}/>
      <section className='py-5 single__sec'>
        <Container className='py-5'>
          <Row>
            <Col lg={8}>
              <h3 className='mb-4'>{dest.title}</h3>
              <p className='pb-4'>{dest.description[0]}</p>
              <p className='pb-4'>{dest.description[1]}</p>
              <div className='pb-4'>
                <img className='w-100' src={dest.thumbnail} />
              </div>
              <p className='pb-4'>{dest.description[2]}</p>
              <p className='pb-4 note'> {dest.note}</p>
              <p className='pb-4'>{dest.description[3]}</p>
              <Row className='pb-4'>
                {dest.images.map((item,index)=> (
                  <Col lg={4} key={index}>
                    <img className='w-100' src={item} />
                  </Col>
                ))}
              </Row>
              <p className='pb-4'>{dest.description[4]}</p>
              <p className='bold'>Good To Know:</p>
              {dest.details.map((item,index)=> (
                <p className='pb-3 good' key={index}>{item}</p>
              ))}

            </Col>
            <Col lg={4}>
              <h3>Top Destinations</h3>
              <section className='py-4'>
                  {destination.slice(0,4).map((item,index)=>(
                <Row className='mb-4' key={index}>
                    
                  <Col lg={4}>
                    <img className="w-100" src={item.thumbnail} />
                  </Col>
                  <Col lg={8}>
                    <h6>{item.title}</h6>
                    <p>{item.name}</p>
                  </Col>
                </Row>
                  ))}
                  
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default SingleDestination