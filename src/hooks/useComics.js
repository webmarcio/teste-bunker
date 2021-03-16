import { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

export default function useComics({ pageSize, pageNumber, search, id }) {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const [ comics, setComics ] = useState([]);
  const [ hasMore, setHasMore ] = useState(false);

  useEffect(() => {
    setComics([]);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    const publiKey = '65f4b877a800fe037289f1df70ed260f';
    const privateKey = '14a03611aac34fadbc3773fafd5117a5ce6dbbce';
    const ts = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    const hash = md5(ts + privateKey + publiKey);

    axios({
      method: 'GET',
      url: `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publiKey}&hash=${hash}`,
      cancelToken: new axios.CancelToken(c => cancel = c),
      params: {
        limit: pageSize,
        offset: pageSize * (pageNumber - 1),
        characters: id.join(','),
      }
    })
    .then(res => {
      const { data: { data: { results } } } = res;

      setComics(prevComics => {
        return [...new Set([ ...prevComics, ...results.map(comics => comics) ])]
      });
      setHasMore(results.length > 0);
      setLoading(false);
    })
    .catch(e => {
      if(axios.isCancel(e)) return
      setError(true);
    });
  }, [pageSize, pageNumber, search]);
  return {
    loading,
    error,
    comics,
    hasMore,
  };
};
