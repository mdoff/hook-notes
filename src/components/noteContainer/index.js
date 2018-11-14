import React from 'react';
import { Container } from 'gestalt';
import './style.css';

export default function NoteContainer(props) {
  return (
    <Container>
      <div className='noteContainer' {...props} />
    </Container>
  );
}
