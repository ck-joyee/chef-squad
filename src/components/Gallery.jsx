import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Marquee from 'react-fast-marquee';

function Gallery() {
  return (
    
    <section>
    <Container className='mt-4 mb-5'>
        <h1 className='mb-3'>Food Items</h1>
    <Marquee>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </Card>
      <Card className='ms-4'>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </Card>
      <Card className='ms-4'>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </Card>
    </CardGroup>
</Marquee>


    </Container>
    </section>
  )
}

export default Gallery