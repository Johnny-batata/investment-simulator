import styled from 'styled-components';

export const ResultCard = styled.div`
  background-color:#f3f3f3;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  padding: 10px;
  min-width: 250px;
  height: 60px;
  /* margin-left: 45px; */
  margin-bottom: 45px;
  margin-right:0;
  align-items: center;
  width: calc(33.33% - 90px);


strong {
  font-size: 17px;
}
  `;

export const Wrapper = styled.div`
  justify-content: flex-end;

  display: flex;
    flex-direction: column;
    width: calc(100% - 85px);
    margin-left: 85px;
  `;

export const ResultCardSections = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 30%;
  width: 100%;
  margin-top: 32px;
  justify-content: space-between;
    width: auto;


`;

export const Title = styled.h2`
  /* margin-left: 45px; */
  
`;
