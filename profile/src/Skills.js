import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

const Skills = () => {
  const skills = [
    'JavaScript',
    'CSS',
    'HTML',
    'MySql',
    'Php'
  ];

  return (

    <Container classname='Skills'>
      <h2 className="mt-4">My Skills</h2>
      <ListGroup as="ol" numbered>
        {skills.map((skill, index) => (
          <ListGroup.Item as="li" key={index}>
            {skill}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Skills;
