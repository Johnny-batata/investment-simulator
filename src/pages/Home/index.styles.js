import styled from 'styled-components';

export const ResultsWrapper = styled.div`
    height: calc(100% - 37px);
  display: flex;
    flex-direction: column;
    /* width: calc(100% - 165px); */
    /* width: calc(100% - 500px); */
    width: 60%;
    margin-left: 55px;
  `;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 55px;

`;

export const ContentDiv = styled.div`
  display: flex;
  height: calc(100% - 30px);
`;

export const ContentColumn = styled.section`
  width: 60%;
`;

export const GraphSection = styled.section`
  height: 50%;
  min-height: 200px;

`;

export const MainDiv = styled.div`
    background-color: #f2f2f2;
    padding: 45px;
    /* height: calc(100% - 90px); */
    min-height: calc(100% - 90px);
    @media (max-height: 800px) {
      ${Title} {
        margin-bottom: 10px;
      }
  }
    @media( max-width: 1201px) {
      flex-direction: column;
      
      ${ContentDiv} {
        flex-direction: column;
      }
      ${ResultsWrapper} {
      }
  }
`;

export const Wrapper = styled.main`
  padding: 35px;
  height: calc(100vh - 70px);

  @media( max-height: 850px) {
    ${ResultsWrapper} {
      margin-left: 55px;
    }
  }
  @media( max-width: 1201px) {
    /* height: 100%; */
  }

`;
