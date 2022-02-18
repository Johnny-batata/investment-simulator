import styled from 'styled-components';

export const ResultCard = styled.div`
  background-color:#f3f3f3;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  padding: 10px;
  /* min-width: 180px; */
  /* min-width: 265px; */
  height: 55px;
  margin-left: 45px;
  margin-bottom: 45px;
 
  margin-right:0;
  align-items: center;
  /* width: calc(33.33% - 90px); */
  width: calc(33.33% - 65px);


strong {
  /* font-size: 17px; */
  font-size: 16px;
}
p {
  margin-bottom:0;

}
  `;

export const ResultCardSections = styled.section`
  display: flex;
  /* padding-left: 40px; */
  /* padding-right: 40px; */
  flex-wrap: wrap;
  flex-basis: 30%;
  margin-top: 35px;
    width: calc(100% - 19px) ;
    /* width: 100%; */
    margin-left: 19px;


`;

export const Title = styled.h2`
  margin-left: 63px;
`;

export const Wrapper = styled.div`
  width: 100%;

  @media( max-height: 850px) {
    ${ResultCard} {
      min-width: 168px;
      margin-left: 33px;
      height: 46px;
      margin-bottom: 33px;
    }
  }
`;
