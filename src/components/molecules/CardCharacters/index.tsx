import React from 'react';
import Link from 'next/link';

import Card from '../../../styles/components/molecules/CardCharacters';

interface Character {
  comics: Object,
  description: String,
  events: Object,
  id: BigInteger,
  modified: String,
  name: String,
  resourceURI: String,
  series: Object,
  stories: Object,
  thumbnail: {
    type: Object,
    path: {
      type: String,
    }
  },
  urls: ArrayBuffer,
}

const CardCharacters: React.FC<Character> = ({
  description,
  id,
  name,
  thumbnail,
}) => {
  const { path } = thumbnail;
  return (
    <Link href={ `/character/${id}/details` }>
      <Card>
        <img src={ `${path}/portrait_xlarge.jpg` } />
        <p>{ name }</p>
        <p>{ description }</p>
      </Card>
    </Link>
  );
};

export default CardCharacters;
