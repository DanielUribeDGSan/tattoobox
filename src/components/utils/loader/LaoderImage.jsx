import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';

export const LoaderImage = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);
  const movilIpadaScreen = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [image]);

  return (
    <>
      {isLoading ? (
        <div className='loader'>
          {/* <img className='img-fluid' src={image} alt='logo danone nutrición' /> */}
          <Box
            sx={{
              display: 'flex',
              marginLeft: movilIpadaScreen ? '0%' : '-25%',
            }}
          >
            <CircularProgress sx={{ color: 'var(--tp-theme-1)' }} />
          </Box>
        </div>
      ) : null}
    </>
  );
};
