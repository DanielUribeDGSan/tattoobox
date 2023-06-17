import React from 'react';
import { TextareaAutosize } from '@mui/material';

export const InputType5 = ({
  data,
  onChangeFunction,
  inputValue,
  label,
  name,
}) => {
  const handleChange = (event) => {
    onChangeFunction(event.target.value);
  };

  return (
    <TextareaAutosize
      onChange={handleChange}
      value={inputValue}
      minRows={3}
      placeholder={label}
      style={{
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #bebebe',
        borderRadius: '0.2rem',
      }}
    />
  );
};
