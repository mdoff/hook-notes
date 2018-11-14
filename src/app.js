import React, { useEffect, useState, useReducer } from 'react';

import Note from './components/note';
import AddNote from './components/addNote';

import 'gestalt/dist/gestalt.css';

export default function() {
  const [state, dispatch] = useCustomReducer();
  useDidMount(() => {
    console.log('acton on mount');
  });

  useEffect(
    () => {
      console.log(state);
    },
    [state],
  );

  return (
    <div>
      {state.map((note, index) => (
        <Note
          key={`note-${index}`}
          onDelete={() => dispatch({ type: 'NOTE_DELETE', index })}
          onSave={note => dispatch({ type: 'NOTE_SAVE', index, note })}
          {...note}
        />
      ))}
      <AddNote onClick={() => dispatch({ type: 'NOTE_ADD' })} />
    </div>
  );
}

function useDidMount(callback) {
  const [mounted, setMounted] = useState(false);
  useEffect(
    () => {
      if (!mounted) {
        setMounted(true);
        callback();
      }
    },
    [mounted],
  );
}

function useCustomReducer(initialState = []) {
  return useReducer(function(state, action) {
    switch (action.type) {
      case 'NOTE_ADD':
        return [...state, Object.assign({}, { title: 'New Note', data: '' })];
      case 'NOTE_SAVE':
        state[action.index] = action.note;
        return [...state];
      case 'NOTE_DELETE':
        state.splice(action.index, 1);
        return [...state];
      default:
        return state;
    }
  }, initialState);
}
