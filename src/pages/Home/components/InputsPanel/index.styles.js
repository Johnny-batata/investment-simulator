import styled from 'styled-components';

export const Columns = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: calc(100% - 70px);

`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    .MuiInputAdornment-root {
      display: ${(props) => props.display};
    }
  
    margin-top: 35px;
    margin-bottom: 35px;

    .fields {
      display: flex !important;
      flex-direction: column !important;
    }


`;
export const ButtonsSection = styled.section`
  display: flex;
  height: 40px;
  width: 100%;
  font-size:15px;

  .btn-sec {
    height: 100%;
    width: 100%;
    color: 'black'  !important,
  }
  .MuiButton-startIcon, .MuiSvgIcon-root  {
    color: 'white';
     font-size: 17px !important;
      margin: 0 ;
  }
  button {
    height: 100%;
    width: 100%;
    color: 'black'  !important,

    }
`;

export const Input = styled.input`
font: inherit;
    letter-spacing: inherit;
    color: currentColor;
    padding: 4px 0 5px;
    border: 0;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-width: 0;
    width: 100%;

    text-rendering: auto;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;

`;

export const MainDiv = styled.div`
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media( max-height: 850px) {
    ${Label} {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    }
`;
