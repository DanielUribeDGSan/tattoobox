import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

export const InputType1 = ({
  data,
  onChangeFunction,
  inputValue,
  label,
  name,
}) => {
  let formattedData = [];

  if (name === 'city' || name === 'style') {
    formattedData = data.map((item) => ({
      value: item.value,
      label: item.label,
    }));
  } else {
    formattedData = data.map((item) => ({
      value: item.IdRespuestaPregunta.toString(),
      label: item.RespuestaPregunta,
    }));
  }

  const selectedOption = formattedData.find(
    (option) => option.value === inputValue
  );

  const handleOnChange = (event, newValue) => {
    const selectedValue = newValue ? newValue.value : null;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    onChangeFunction(changeEvent);
  };

  return (
    <Autocomplete
      onChange={handleOnChange}
      value={selectedOption || null}
      disablePortal
      id={`combo-box-demo-${name}`}
      options={formattedData}
      sx={{ width: '100%', marginBottom: '1rem' }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
