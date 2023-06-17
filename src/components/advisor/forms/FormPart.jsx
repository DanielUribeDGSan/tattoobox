import React from 'react';

import { InputType1 } from '../inputs/InputType1';
import { InputType2 } from '../inputs/InputType2';
import { InputType3 } from '../inputs/InputType3';
import { useTattoBoxFormDataFilters } from '../../../hooks/use-tattobox-form-data-filters';
import { InputType5 } from '../inputs/InputType5';
import { InputType4 } from '../inputs/InputType4';

export const FormPart = ({
  question,
  name,
  onChangeFunction,
  inputValue,
  label,
}) => {
  const { dataStateCountry, dataStyles } = useTattoBoxFormDataFilters();

  return (
    <div className='tp-input '>
      <span className='question'>{question?.Pregunta}</span>
      {question?.IdTipoRespuesta === 1 && (
        <InputType1
          data={
            name === 'city'
              ? dataStateCountry
              : name === 'style'
              ? dataStyles
              : question?.Respuestas
          }
          name={name}
          label={label}
          inputValue={inputValue}
          onChangeFunction={onChangeFunction}
        />
      )}
      {question?.IdTipoRespuesta === 2 && (
        <InputType2
          data={question?.Respuestas}
          name={name}
          label={label}
          inputValue={inputValue}
          onChangeFunction={onChangeFunction}
        />
      )}
      {question?.IdTipoRespuesta === 3 && (
        <InputType3
          data={question?.Respuestas}
          name={name}
          label={label}
          inputValue={inputValue}
          onChangeFunction={onChangeFunction}
        />
      )}
      {question?.IdTipoRespuesta === 4 && (
        <InputType4
          data={question?.Respuestas}
          name={name}
          label={label}
          inputValue={inputValue}
          onChangeFunction={onChangeFunction}
        />
      )}
      {question?.IdTipoRespuesta === 5 && (
        <InputType5
          data={question?.Respuestas}
          name={name}
          label={label}
          inputValue={inputValue}
          onChangeFunction={onChangeFunction}
        />
      )}
    </div>
  );
};
