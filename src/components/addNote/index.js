import React, { useContext } from 'react';
import { IconButton } from 'gestalt';
import Context from '../../context';

import './style.css';

export default function AddNote(props) {
  // Get context value
  const theme = useContext(Context);
  return (
    <div className={'addNote ' + theme}>
      <IconButton
        icon='add-circle'
        accessibilityLabel='Add new note'
        onClick={props.onClick}
        size='lg'
      />
    </div>
  );
}
