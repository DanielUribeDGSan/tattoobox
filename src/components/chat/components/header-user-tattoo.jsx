import React from 'react';
import Router from 'next/router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const HeaderUserTattoo = () => {
  const handleClick = () => {
    Router.push('/');
  };
  return (
    <div className='header-user'>
      <button
        className='btn text-black'
        onClick={handleClick}
        aria-label='regresar al inicio'
      >
        <ArrowBackIcon sx={{ fontSize: '1.5rem' }} />
      </button>
      <List sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem sx={{ margin: 0, padding: 0 }}>
          <ListItemAvatar>
            <Avatar>{/* <ImageIcon /> */}</Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{ color: 'var(--tp-common-black)' }}
            primary='Daniel Uribe'
            secondary='Tatuador'
          />
        </ListItem>
      </List>
    </div>
  );
};
