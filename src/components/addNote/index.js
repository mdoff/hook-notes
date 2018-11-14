import React from 'react';
import { IconButton } from 'gestalt';

import './style.css';

export default function AddNote(props) {
  return (
    <div className='addNote'>
      <IconButton
        icon='add-circle'
        accessibilityLabel='Add new note'
        onClick={props.onClick}
        size='lg'
      />
    </div>
  );
}
