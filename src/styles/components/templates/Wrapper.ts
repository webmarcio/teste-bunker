import styled from 'styled-components';

const Content = styled.div`
  margin: 30px auto;
  max-width: 1024px;
  background-color: #e3e3e3;

  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(4, .5fr);
  padding: 15px;

  @media screen and (max-width: 993px) {
    grid-template-columns: repeat(3, .5fr);
  }

  @media screen and (max-width: 736px) {
    grid-template-columns: repeat(2, .5fr);
  }

  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Content;
