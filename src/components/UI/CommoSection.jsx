import React from 'react';
import { Container } from 'reactstrap';
import "../../styles/commo-section.css";


const CommoSection = ({title}) => {
  return (
    <section className="commo__section">
        <Container className="text-center">
            <h1>{title}</h1>
        </Container>
    </section>
  );
};

export default CommoSection;