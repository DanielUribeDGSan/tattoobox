import React from 'react';
import TextField from '@mui/material/TextField';

export const InputType2 = ({
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
    <TextField
      onChange={handleChange}
      value={inputValue}
      id={`outlined-basic${name}`}
      label={label}
      variant='outlined'
      sx={{ width: '100%', marginBottom: '1rem' }}
    />
  );
};
