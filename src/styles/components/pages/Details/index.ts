import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 30px auto;
  max-width: 1024px;
  background-color: #e3e3e3;
  padding: 15px;
`;

const Details = styled.div`
  display: flex;
`;

const Thumb = styled.div`

`;

const Description = styled.div`
  flex: 2;
  padding: 20px;
  h2 {
    margin-bottom: 20px;
  }
`;

const ListComics = styled.div`
  margin: 15px auto;
  padding-right: 10px;
  /* height: 75px; */
  max-width: 1024px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  img {
    max-height: 75px;
  }
  &:first-of-type {
    margin-top: 30px;
  }
  display: flex;
  > div {
    margin-top: 10px;
    margin-left: 15px;
    h4{
      margin-bottom: 10px;
    }
    p {
      font-size: .9em;
      font-style: italic;
      margin-bottom: 15px
    }
  }
`;

export {
  Wrapper,
  Details,
  Thumb,
  Description,
  ListComics,
};
