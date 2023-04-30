import React from 'react';
import '../../sass/blog/blog.scss';
import PageBanner from '../../components/PageBanner';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { blog } from '../../data/blogs';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const {id} = useParams();

  const blogs = blog.find((item)=>{
    return item.id == id
  })
  console.log(blogs)
	return (
		<section>
			<PageBanner title="Astrip Blogs" />
			<section className="blog__page my-5">
				<Container className='single__blog__con'>
					<Row>
						<Col lg={8}>
              <h3>{blogs.title}</h3>
              <div className='d-flex gap-4 mb-4'>
              <p className='created'>{blogs.createdAt}</p>
              <p className='cat'>#{blogs.category}</p>
              </div>
              <p className='mb-4'>{blogs.description}</p>
							<div className='mb-4'>
                <img className='w-100' src={blogs.thumbnail} />
              </div>
              {blogs.details.map((item,index)=>(
                <p key={index} className='mb-4'>{item}</p>
              ))}
              <div className='quote'>
                <i>{blogs.quote}</i>
              </div>
						</Col>
						<Col lg={4} className="right__sec ps-4 pt-2">
							<h4>Trending Stories</h4>
							<section className="trend__sec mt-3">
								{blog.map((item, index) => (
									<LinkContainer key={index} to={`/blogs/${item.id}`}>
									<Row  className="trend__card mb-3">
										<Col lg={4}>
											<img className="w-100" src={item.thumbnail} />
										</Col>
										<Col lg={8} className="ps-0 ">
											<p className="title">{item.title}</p>
											<p className="date">{item.createdAt}</p>
										</Col>
									</Row>
									</LinkContainer>
								))}
							</section>
							<div className="newsletter">
								<div className="d-flex flex-column align-items-center mb-5">
									<h2>Join Newsletter</h2>
									<p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
								</div>
								<div>
									<Form>
										<Form.Group className="mb-3" controlId="formBasicText">
											<Form.Control type="text" placeholder="Your Name" />
										</Form.Group>
										<Form.Group className="mb-5" controlId="formBasicEmail">
											<Form.Control type="email" placeholder="Enter email" />
										</Form.Group>
										<Button className='find__now' >
					<div>
						<span className="transition" />
						<span className="label">Find Now</span>
					</div>
				</Button>
									</Form>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</section>
	);
};

export default SingleBlog;