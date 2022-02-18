import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 35px;
  height: calc(100% - 70px);
`;

export const ResultsWrapper = styled.div`
    height: calc(100% - 37px);
  display: flex;
    flex-direction: column;
    /* width: calc(100% - 165px); */
    width: calc(100% - 500px);
    margin-left: 55px;
  `;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  /* margin-bottom: 30px; */
  margin-bottom: 10px;
`;

export const MainDiv = styled.div`
    background-color: #f2f2f2;
    padding: 45px;
    height: calc(100% - 90px);

`;

export const ContentDiv = styled.div`
  display: flex;
  height: calc(100% - 30px);
`;

export const ContentColumn = styled.section`
  width: 60%;
`;
