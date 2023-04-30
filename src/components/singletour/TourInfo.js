import React from 'react'
import { Col, Row } from 'react-bootstrap';

const TourInfo = ({tourdetails}) => {

    const afterdiscount = () => {
        const discountAmount = (tourdetails.discount / 100) * tourdetails.price;
        return tourdetails.price - discountAmount
    }

  return (
    <main className='tour__info'>
        <section className='price d-flex align-items-center gap-2 py-2'>
        <h2>Rs.{afterdiscount()}/<del>Rs.{tourdetails.price}</del></h2>
        <p>(Per Person)</p>
        </section>
        <section className='day__time d-md-flex gap-5 py-2'>
            <p><i class="bi bi-clock-fill"></i>{tourdetails.duration.days} Days / {tourdetails.duration.night} Night</p>
            <p><i class="bi bi-person-fill"></i>Max People {tourdetails.max}</p>
            <p><i class="bi bi-map-fill"></i>{tourdetails.place}</p>
        </section>
        <section className='desc py-2 d-flex flex-column gap-3 '>
            {tourdetails.description.map((item,index)=>(
                <p key={index}>{item}</p>
            ))}
        </section>
        <section className='image pb-5 pt-4'>
        <Row>
            {
                tourdetails.images.map((item,index)=>(
                    <Col key={index} lg={4}>
                        <img className='w-100' src={item} />
                    </Col>
                ))
            }
        </Row>
        </section>
        <section className='short__list'>
            <ul>
                <li className='d-md-flex align-items-center'>
                    <h4>Destination</h4>
                    <p>{tourdetails.Destination}</p>
                </li>
                <li className='d-md-flex align-items-center '>
                    <h4>Departure/Return Location</h4>
                    <p>{tourdetails.departureandreturn}</p>
                </li>
                <li className='d-md-flex align-items-center'>
                    <h4>Departure Time</h4>
                    <p>{tourdetails.departuretime}</p>
                </li>
                <li className='d-md-flex align-items-center'>
                    <h4>Return Time</h4>
                    <p>{tourdetails.returntime}</p>
                </li>
            </ul>
        </section>
        <section className='include d-md-flex'>
                    <h4>Included Package Facility:</h4>
                <div className='include__items'>
                    <ul className='d-md-flex flex-md-wrap'>
                        {
                            tourdetails.included.map((item,index)=>(
                                <li key={index}><i class="bi bi-check-lg"></i> {item}</li>
                            ))
                        }
                    </ul>
                </div>
        </section>
        <section className='exclude d-md-flex'>
                    <h4>Excludes Package Facility:</h4>
                <div className='include__items'>
                    <ul className='d-md-flex flex-md-wrap'>
                        {
                            tourdetails.excludes.map((item,index)=>(
                                <li key={index}><i class="bi bi-x"></i> {item}</li>
                            ))
                        }
                    </ul>
                </div>
        </section>
    </main>
  )
}

export default TourInfo