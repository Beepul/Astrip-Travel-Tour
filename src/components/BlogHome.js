import React from 'react'
import "../sass/bloghome.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { blog } from '../data/blogs'
import { LinkContainer } from 'react-router-bootstrap'

const BlogHome = () => {
    const blogs = blog.slice(0,3);
  return (
    <div className='blog__home__sec mb-5'>
        <Container>
            <Row>
                {blogs.map((item,index)=>(
                    <Col key={index} lg={4} className='mb-4 mb-lg-0'>
                        <div className='img__con mb-4'>
                            <img className='w-100' src={item.thumbnail} />
                            <p>{item.createdAt}</p>
                        </div>
                        <div className='text '>
                            <h5 className="mb-3">{item.title}</h5>
                            <LinkContainer to={`/blogs/${item.id}`}>
                            <a className=''>Continue Reading <i className="bi bi-arrow-right"></i></a>
                            </LinkContainer>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default BlogHome