import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: ${props => props.theme.colors.fontFamily};
  }

  .header {
    width: 100%;
    background: ${props => props.theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    img {
      max-width: 150px;
    }
  }
`;
