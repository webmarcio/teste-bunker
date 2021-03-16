import React, {
  useState,
  useRef,
  useCallback,
} from 'react';

import Wrapper from '../../templates/Wrapper';
import CardCharacters from '../../molecules/CardCharacters';
import useCharacters from '../../../hooks/useCharacters';

interface ApiParams {
  pageSize: Number,
  pageNumber: Number,
  search: String,
};

const Home: React.FC = () => {
  const [ apiParams, setApiParams ] = useState<ApiParams>({
    pageSize: 12,
    pageNumber: 1,
    search: null,
  });

  const {
    loading,
    error,
    characters,
    hasMore,
  } = useCharacters({ ...apiParams });

  return (
    <Wrapper>
      {
        characters.map((character, index) => {
          return (
            <CardCharacters
              key={ character.id }
              { ...character }
            />
          );
        })
      }
    </Wrapper>
  );
};

export default Home;
