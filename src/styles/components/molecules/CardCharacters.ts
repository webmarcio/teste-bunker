import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  height: 320px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  transition: all .2s linear;
  &:hover {
    box-shadow: 0px 1.5px 3px rgba(0, 0, 0, 0.24);
  }
  img {
    max-width: 150px;
    margin-bottom: 20px
  }

  p {
    &:first-of-type {
      font-weight: bold
    }
    &:last-of-type {
      font-size: 0.9em;
      max-width: 20ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export default Card;
