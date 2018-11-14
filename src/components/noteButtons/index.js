import React from 'react';
import { Button } from 'gestalt';

import './style.css';

export function EditButtons(props) {
  return (
    <div className='noteButtons'>
      <Button
        color='red'
        inline
        onClick={props.onDiscard}
        text='Discard changes'
      />
      <Button color='blue' inline onClick={props.onSave} text='Save' />
    </div>
  );
}

export function DisplayButtons(props) {
  return (
    <div className='noteButtons'>
      <Button color='red' text='Delete' inline onClick={props.onDelete} />
      <Button color='gray' text='Edit' inline onClick={props.onEdit} />
    </div>
  );
}
