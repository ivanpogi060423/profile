import React from 'react';
import { Container } from 'react-bootstrap';
import './SuccessMessage.css';

const SuccessMessage = () => (
  <Container className="successmessage-container">
    <h2>Congratulations! Your form has been Submitted!</h2>
    <p>Thank you for contacting us. We will get in touch with you soon!</p>
  </Container>
);

export default SuccessMessage; // Ensure this is correct
