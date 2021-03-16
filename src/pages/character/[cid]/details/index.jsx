import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
  Wrapper,
  Details,
  Thumb,
  Description,
  ListComics,
} from '../../../../styles/components/pages/Details';
import useDetails from '../../../../hooks/useDetails';
import useComics from '../../../../hooks/useComics';
import logoMarvel from '../../../../assets/marvel_logo.png';

const DetailsCharacter = () => {

  const [ apiParams, setApiParams ] = useState({
    pageSize: 12,
    pageNumber: 1,
    search: null,
  });

  const router = useRouter();
  const { cid } = router.query;

  const { details } = useDetails(cid);
  console.log(details);

  const { comics } = useComics({ ...apiParams, id: [cid] });
  console.log(comics)

  return (
    <>
      <div className="header">
        <img src={ logoMarvel }/>
      </div>
      <Wrapper>
        {
          details.map(item => {
            return (
              <Details>
                <Thumb>
                  <img src={ `${item.thumbnail.path}/portrait_xlarge.jpg` } alt=""/>
                </Thumb>
                <Description className="details">
                  <h2>{ item.name }</h2>
                  <p>{ item.description }</p>
                </Description>
              </Details>
            );
          })
        }
        {
          comics.map(item => {
            return (
              <ListComics key={ item.id }>
                <img src={ `${item.thumbnail.path}/portrait_small.jpg` } alt=""/>
                <div>
                  <h4>{ item.title }</h4>
                  <p>{ item.description }</p>
                </div>
              </ListComics>
            )
          })
        }

      </Wrapper>
    </>
  );
};

export default DetailsCharacter;
