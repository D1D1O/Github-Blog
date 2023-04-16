import styled from "styled-components";


export const MainContainer = styled.main`
  display  : flex ;
  flex-direction: column;
  width: 26rem;
  height: 16.25rem;
  background-color: ${ props => props.theme["base-post"]} ;
  border-radius: 10px;

`;
export const HeaderCard = styled.main`
  display  : flex ;
  flex-direction: row;

`;
export const ContentCard = styled.main`

`;