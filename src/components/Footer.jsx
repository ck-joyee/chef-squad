import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
    <footer className="bg-black py-4 text-white">
    <Container>
      <Row>
        <Col md={4}>
          <h5>CHEFSQUAD</h5>
          <p>Visit our authentic Indian restaurant to indulge in Indian cuisine. Each meal is thoughtfully prepared by our talented chefs using fresh ingredients and time-tested methods, guaranteeing a wonderful dining experience.</p>
        </Col>
        <Col md={4}>
          <h5>connect with us</h5>
          <ul>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.youtube.com/">YouTube</a></li>
            <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Contact Us</h5>
          <ul>
            <li>122 Bekar Street</li>
            <li>London, UK</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: chefs@company.com</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer