import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Image from 'mui-image';
import InfiniteScroll from 'react-infinite-scroll-component';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTattoboxTattoos from '../../../hooks/use-tattobox-tattoos';
import Link from 'next/link';

export const GridMansoryNotModalTattoo = ({
  data = [],
  idContent,
  setShownModal,
  idContentTattoo,
}) => {
  const matches = useMediaQuery('(max-width:800px)');
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');
  const [showComponent, setShowComponent] = useState(false);
  const {
    getRelatedTattoos,
    relatedTattoos,
    relatedTattoosAllData,
    isLoading,
  } = useTattoboxTattoos();

  const handleShowTatuaje = () => {
    setShownModal(false);
  };

  const getData = async (currentPage = 0) => {
    if (currentPage >= 1) {
      await getRelatedTattoos(idContent, currentPage + 1);
    } else {
      await getRelatedTattoos(idContent, 1);
    }
    if (!showComponent) setShowComponent(true);
  };

  useEffect(() => {
    let isActive = true;

    if (idContent && isActive) {
      getData();
    }
    return () => {
      isActive = false;
    };
  }, [idContent]);

  if (isLoading && !showComponent) {
    return <p className='text-black'>Cargando..</p>;
  }

  return (
    <>
      <InfiniteScroll
        dataLength={relatedTattoos.length} //This is important field to render the next data
        next={async () => {
          getData(relatedTattoosAllData.current_page);
        }}
        hasMore={true}
        loader={<></>}
        scrollableTarget='infiniteScroll'
        endMessage={
          <p style={{ textAlign: 'center', color: 'black' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ overflow: 'hidden' }}
      >
        <Box sx={{ width: '100%', minHeight: 400 }}>
          <Masonry
            columns={matches ? 2 : 4}
            spacing={2}
            sx={{
              marginRight: movilIpadaScreen && 0,
              marginLeft: movilIpadaScreen && 0,
            }}
          >
            {relatedTattoos.map((item, index) => (
              <div key={index}>
                <Link
                  href='/tatuajes/[id]'
                  as={`/tatuajes/${item?.IdContenido}`}
                >
                  <a onClick={handleShowTatuaje}>
                    <Image
                      duration={2000}
                      easing='ease-in'
                      showLoading={false}
                      distance='100px'
                      shiftDuration={900}
                      src={`${item.UrlImagen}?w=162&auto=format`}
                      alt={item?.Titulo}
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                        borderRadius: matches ? 5 : 20,
                        boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.16)',
                      }}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </Masonry>
        </Box>
      </InfiniteScroll>
    </>
  );
};
