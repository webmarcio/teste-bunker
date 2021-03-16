import { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

export default function useCharacters({ pageSize, pageNumber, search }) {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const [ characters, setCharacters ] = useState([]);
  const [ hasMore, setHasMore ] = useState(false);

  useEffect(() => {
    setCharacters([]);
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
      url: `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publiKey}&hash=${hash}`,
      cancelToken: new axios.CancelToken(c => cancel = c),
    })
    .then(res => {
      const { data: { data: { results } } } = res;

      setCharacters(prevCharacters => {
        return [...new Set([ ...prevCharacters, ...results.map(characters => characters) ])]
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
    characters,
    hasMore,
  };
};
