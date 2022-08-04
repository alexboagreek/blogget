import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {getToken} from '../api/token';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const token = getToken();

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best?limit=8`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(response => {
        setPosts(response.data.children);
      })
      .catch(error => {
        console.error('нет данных', error);
      });
  }, [token]);

  return posts;
};
