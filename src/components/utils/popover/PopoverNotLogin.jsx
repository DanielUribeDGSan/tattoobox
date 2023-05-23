import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const PopoverNotLogin = ({
  anchorEl,
  handleClose,
  handleOnClickCloseModal,
}) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClickRemoveModal = () => {
    handleOnClickCloseModal();
  };

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        disableEnforceFocus
      >
        <Typography sx={{ color: 'var(--tp-common-black)', p: 2 }}>
          Antes debes
          <Link href={'/registro'}>
            <a
              className='text-black'
              style={{
                marginLeft: '0.2rem',
                borderBottom: '1px solid var(--tp-common-black)',
              }}
              onClick={handleClickRemoveModal}
            >
              Inciar sesión / Registrarte
            </a>
          </Link>
        </Typography>
      </Popover>
    </div>
  );
};
