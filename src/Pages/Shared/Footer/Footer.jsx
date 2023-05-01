import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1C2B35' }}>
      <Container className='text-white py-5'>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt urna ac dolor congue tincidunt. Maecenas nec enim vel
              nulla suscipit suscipit.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              123 Main Street
              <br />
              Anytown, USA
              <br />
              (555) 555-5555
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          © {new Date().getFullYear()} Chef Savvy All Rights Reserved.
        </p>
      </Container>
    </footer>
    );
};

export default Footer;