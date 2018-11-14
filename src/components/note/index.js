import React, { useState } from 'react';
import MarkdownToJSX from 'markdown-to-jsx';
import { Box, Text, TextArea, TextField } from 'gestalt';

import NoteContainer from '../noteContainer';
import { DisplayButtons, EditButtons } from '../noteButtons';

const MIN_TEXTAREA_HEIGHT = 4;

export default function Note(props) {
  const [edit, setEdit] = useState(!!props.edit);
  const NoteComponent = edit ? EditNote : DisplayNote;
  return (
    <NoteContainer>
      <NoteComponent {...props} onEdit={setEdit} />
    </NoteContainer>
  );
}

function DisplayNote(props) {
  return (
    <Box>
      <Text size='lg' bold>
        {props.title}
      </Text>
      <Text>
        <MarkdownToJSX>{props.data}</MarkdownToJSX>
      </Text>
      <DisplayButtons
        onDelete={props.onDelete}
        onEdit={() => props.onEdit(true)}
      />
    </Box>
  );
}

function EditNote(props) {
  const [title, setTitle] = useState(props.title);
  const [data, setData] = useState(props.data);
  const dataLines = data.split('\n').length;
  const rows =
    dataLines < MIN_TEXTAREA_HEIGHT ? MIN_TEXTAREA_HEIGHT : dataLines;

  return (
    <Box>
      <TextField
        id='title-edit'
        label='Note title'
        onChange={({ value }) => setTitle(value)}
        value={title}
      />
      <br />
      <br />
      <TextArea
        id='data-edit'
        onChange={({ value }) => setData(value)}
        rows={rows}
        value={data}
      />
      <EditButtons
        onDiscard={() => props.onEdit(false)}
        onSave={() => {
          props.onEdit(false);
          props.onSave({ title, data });
        }}
      />
    </Box>
  );
}
