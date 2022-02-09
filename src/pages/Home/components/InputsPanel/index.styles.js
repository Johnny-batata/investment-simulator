import styled from 'styled-components';

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Columns = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;


`;

export const Label = styled.label`
    .MuiInputAdornment-root {
      display: ${(props) => props.display};
    }
`;
export const ButtonsSection = styled.section`
  display: flex;
`;
