import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FormCommentTatto } from '../../utils/forms/form-comment-tatto';
import useTattoboxTattoos from '../../../hooks/use-tattobox-tattoos';
import useMediaQuery from '@mui/material/useMediaQuery';

export const CommentsTattoo = ({
  idContent,
  user,
  handleOnClickCloseModal,
}) => {
  const [newMessages, setNewMessages] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const movilIpadaScreen = useMediaQuery('(max-width:1000px)');
  const { getCommentsTattoo, comments, commentsAllData, isLoading } =
    useTattoboxTattoos();

  const getData = async () => {
    await getCommentsTattoo(idContent, 1, newMessages);

    if (!showComponent) setShowComponent(true);
  };

  const nextPage = async (currentPage) => {
    await getCommentsTattoo(idContent, currentPage + 1, newMessages);
  };

  useEffect(() => {
    let isActive = true;

    if ((isActive, idContent)) {
      getData();
    }
    return () => {
      setNewMessages(false);
      isActive = false;
    };
  }, [newMessages, idContent]);

  if (isLoading && !showComponent) {
    return <p className='text-black'>Cargando..</p>;
  }

  return (
    <div>
      <div className='row grid gx-3 comments w-100 m-0 p-0'>
        <div className='col-12 mt-2 mb-3 w-100 m-0 p-0'>
          <FormCommentTatto
            setNewMessages={setNewMessages}
            IdContenido={idContent}
            user={user}
            handleOnClickCloseModal={handleOnClickCloseModal}
          />
        </div>

        {comments.length > 1 && (
          <>
            <div className='col-12 w-100 m-0 p-0'>
              {comments?.map((comment, index) => (
                <div className='row grid gx-3 w-100 m-0 p-0' key={index}>
                  <div className='col-1 p-0 m-0 '>
                    <Avatar
                      alt={'Titulo'}
                      src={
                        'https://www.infobae.com/new-resizer/UROAjCU6hMtvAvfGQXjUD0sm6Zk=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/13145720/Emma-Watson-41.jpg'
                      }
                    />
                  </div>
                  <div className='col-9 p-0 m-0'>
                    <div className='comment'>
                      <p className='text-black p-0 m-0'>
                        <strong style={{ margin: '0px 5px' }}>
                          {comment?.Perfil?.UserName}
                        </strong>
                      </p>
                      <p className='text-black m-0 p-0'>
                        <span style={{ margin: '0px 5px' }}>
                          {comment?.Cuerpo}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-2 d-flex justify-content-center'>
                    <MoreVertIcon sx={{ color: 'var(--tp-common-black)' }} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
