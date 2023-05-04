import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Services() {
  return (
    <Container className='mb-5'>
     <h1 className='mt-4 mb-4'>Our Services</h1>
       
     <CardGroup >
      <Card >
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?w=740&t=st=1683217992~exp=1683218592~hmac=b85cf4c5e2d55bc683626b383de56d770e9c9a12ab7054571876a08fd0be3aee" />
        <Card.Body>
          <Card.Title>Delivery Services</Card.Title>
          <Card.Text>
          The quickest courier service is delivery. We serve both online and offline businesses with tech-first logistics.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card  className='ms-4'>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7561.jpg?w=740&t=st=1683218080~exp=1683218680~hmac=79e7141def9c72b04365b22036594fe5dca15eebaa5939a3feacba2c8b539e42"/>
        <Card.Body>
          <Card.Title>Online Payment</Card.Title>
          <Card.Text>
            Pay your bil Online.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card  className='ms-4'>
        <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e79b7998208063.5edaaf9cf3c12.jpg" />
        <Card.Body>
          <Card.Title>Best Food</Card.Title>
          <Card.Text>
            We give you the best food services.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
        
    </Container>
  )
}

export default Services;