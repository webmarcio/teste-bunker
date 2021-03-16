import React from 'react';

import Content from '../../../styles/components/templates/Wrapper';
import logoMarvel from '../../../assets/marvel_logo.png';

const Wrapper: React.FC = (props) => {
  return (
    <>
      <div className="header">
        <img src={ logoMarvel }/>
      </div>
      <Content>
        { props.children }
      </Content>
    </>

  );
};

export default Wrapper;
