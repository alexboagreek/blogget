import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {getToken} from '../api/token';

export const useCommentsData = (id) => {
  const token = getToken();
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);

          setCommentsData([post, comments]);
        },
      )
      .catch((error) => {
        console.error('Произошла ошибка получения данных!!!', error);
      });
  }, [token]);

  return commentsData;
};
