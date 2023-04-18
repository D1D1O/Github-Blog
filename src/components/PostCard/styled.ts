import styled from "styled-components";


export const MainContainer = styled.main`
  display  : flex ;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  background-color: ${props => props.theme["base-post"]} ;
  border-radius: 10px;
`;
export const MainContent = styled.main`
  margin:32px

`;


export const HeaderCard = styled.main`
  display  : grid ;
  grid-template-columns: 2fr 3fr;
  justify-content: center;
  gap: 5px;

  h1 {
    //background-color: red;
    width: 262px;
    height: 30px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: ${props => props.theme["base-title"]};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;

  }
  span {

    height: 22px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${props => props.theme["base-span"]} ;
  }

`;
export const ContentCard = styled.div`
  width: 352px;
  height: 112px;
  margin-top: 20px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${props => props.theme["base-text"]};

  /* overflow: hidden;
  word-wrap: break-word;
  white-space: pre-line;
  text-overflow:ellipsis; */
   p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}


`;