import React, { useEffect, useRef } from 'react';
import '../sass/footer.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { destcat } from '../data/category';

const Footer = () => {
	const textRef = useRef();

	useEffect(() => {
		let text = textRef.current.innerText;
		text = text.split('');
		textRef.current.innerHTML = text
			.map((char, index) => `<h6 style="transform:rotate(${index * 3.7}deg)">${char}</h6>`)
			.join('');
	}, []);

  const capitalizedcat = destcat.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1));

	return (
		<section className="footer__sec pt-5">
			<Container className="pt-5 pb-4">
				<Row className='mb-5'>
					<Col lg={3} sm={6} className="circle__con mb-5 mb-lg-0 justify-content-start justify-content-lg-center">
						<div className="footer__circle">
							<img src="https://demo.egenslab.com/html/astrip/preview/assets/images/icons/footer1-logo.svg" />
							<p>Since: 2023</p>
							<div className="text" ref={textRef}>
								Astrip Travel Agency Astrip Travel Agency
							</div>
						</div>
					</Col>
					<Col lg={3} sm={6} className='footer__info__con mb-5 mb-lg-0 justify-content-start justify-content-lg-center'>
            <div>
            <p  className='footer__title'>Information</p>
            <ul>
              <li><a>About Company</a></li>
              <li><a>Online Query</a></li>
              <li><a>Become Partner</a></li>
              <li><a>Help & Support</a></li>
              <li><a>Contact</a></li>
            </ul>
            </div>
          </Col>
					<Col lg={3} sm={6} className='footer__info__con mb-5 mb-lg-0 justify-content-start justify-content-lg-center'>
            <div>
            <p className='footer__title'>Destination</p>
            <ul>
              {capitalizedcat.map((item,index)=>(
                <li key={index}><a>{item}</a></li>
              ))}
            </ul>
            </div>
          </Col>
					<Col lg={3} sm={6} className='footer__info__con mb-5 mb-lg-0 justify-content-start justify-content-lg-center'>
            <div>

            <p className='footer__title'>Reach Us</p>
            <ul>
            <li className='d-flex gap-3 align-items-center'>
            <i className="bi bi-telephone"></i>
              <div className='d-flex flex-column gap-2'>
                <a>+977 982 564 897 1</a>
                <a>+977 9841 265 238</a>
              </div>
            </li>
            <li className='d-flex gap-3 align-items-center'>
            <i className="bi bi-envelope"></i>
              <div className='d-flex flex-column gap-2'>
                <a>astriptravels@gmail.com</a>
                <a>travelastrip@gmail.com</a>
              </div>
            </li>
            <li className='d-flex gap-3 align-items-center'>
            <i className="bi bi-geo-alt"></i>
              <div className='d-flex flex-column gap-2'>
                <a>Dhulikhel,Kavre - 50660</a>
              </div>
            </li>

            </ul>
            </div>
          </Col>
				</Row>
        <Row className='py-4 mb-5'>
          <Col lg={6}  className='col-12 footer__middle d-flex gap-4 align-items-center mb-5 mb-xl-0' >
            <p>Stay Connected:</p>
            <ul className='d-flex align-items-center gap-4 flex-wrap'>
              <li><a><i className="bi bi-facebook"></i></a></li>
              <li><a><i className="bi bi-twitter"></i></a></li>
              <li><a><i className="bi bi-instagram"></i></a></li>
              <li><a><i className="bi bi-pinterest"></i></a></li>
            </ul>
          </Col>
          <Col lg={6}  className='col-12 footer__middle d-flex gap-4 align-items-center justify-content-start justify-content-lg-end'>
            <p>Pay Safely With Us!</p>
            <ul className='d-flex align-items-center gap-4 flex-wrap'>
              <li><img src="https://astrip-wp.b-cdn.net/wp-content/themes/astrip/includes/theme-options/images/footer/pay1.svg  " /></li>
              <li><img src="https://astrip-wp.b-cdn.net/wp-content/themes/astrip/includes/theme-options/images/footer/pay2.svg" /></li>
              <li><img src="https://astrip-wp.b-cdn.net/wp-content/themes/astrip/includes/theme-options/images/footer/pay3.svg" /></li>
              <li><img src="https://astrip-wp.b-cdn.net/wp-content/themes/astrip/includes/theme-options/images/footer/pay4.svg" /></li>
            </ul>
          </Col>
        </Row>
        <Row className=' footer__low__con pt-4'>
          <Col lg={6} className='footer__lower mb-2 mb-lg-0'>
            <p>Copyright 2023 <span>Astrip</span> | Design By <span>Bipul Magar</span></p>
          </Col>
          <Col lg={6} className='footer__lower d-flex justify-content-lg-end justify-content-start'>
            <ul className='d-flex gap-2'>
              <li><a>Privacy Policy</a></li>
              <li> | </li>
              <li><a>Terms of Use</a></li>
            </ul>
          </Col>
        </Row>
			</Container>


		</section>
	);
};

export default Footer;
