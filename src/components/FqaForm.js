import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import Heading from './Heading';

const FqaForm = () => {
	return (
		<section className='fqa__form__sec'>
			<Container className="form__sec">
				<div className='form__con'>
					<div>
						<Heading title="" subtitle="Feel Free To Ask" />
					</div>
					<Form>
						<Row>
							<Col lg={6} className='col-12 mb-3'>
								<FloatingLabel controlId="floatingText" label="Your Name">
									<Form.Control type="text" placeholder="Your Name" />
								</FloatingLabel>
							</Col>
							<Col lg={6} className='col-12'>
								<FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
									<Form.Control type="email" placeholder="name@example.com" />
								</FloatingLabel>
							</Col>
						</Row>
						<FloatingLabel controlId="floatingTextarea2" label="Comments">
							<Form.Control
								as="textarea"
								placeholder="Leave a comment here"
								style={{ height: '100px' }}
							/>
						</FloatingLabel>
                        <div className='d-flex justify-content-center mt-5'>
						<Button className="find__now">
							<div>
								<span className="transition" />
								<span className="label">Submit</span>
							</div>
						</Button>
                        </div>
					</Form>
				</div>
			</Container>
		</section>
	);
};

export default FqaForm;
