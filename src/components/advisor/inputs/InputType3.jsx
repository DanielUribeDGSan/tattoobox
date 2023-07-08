import React from 'react';
import { Dropzone, FileMosaic } from '@files-ui/react';

export const InputType3 = ({
  data,
  onChangeFunction,
  inputValue,
  label,
  name,
}) => {
  const handleOnChange = (images) => {
    onChangeFunction(images);
  };

  return (
    <Dropzone
      onChange={handleOnChange}
      minHeight='195px'
      value={inputValue}
      accept='image/*'
      maxFiles={3}
      maxFileSize={20 * 1024 * 1024}
      label='Arrastra o selecciona tus imagenes'
      fakeUpload
      header={true}
      footer={false}
      style={{
        border: '1px solid #bebebe',
        padding: '1rem',
        marginBottom: '1rem',
      }}
    >
      {inputValue.map((file, i) => (
        <FileMosaic {...file} preview key={i} />
      ))}
    </Dropzone>
  );
};
