import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //background-color: blue;
`;

export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 54rem;
  //background-color: brown;
`;

interface spanProps{
  variant: 'title'|'span';
}

export const SpanContent = styled.span<spanProps>`
color: ${props => props.theme["base-subtitle"]};
font-family: 'Nunito'; 

font-weight: 700;
font-size: 18px; 
line-height: 160%;

div {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: ${props => props.theme["base-span"]};

}
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3.125rem;
  color: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputCard = styled.input`
  height: 50px;
  padding: 15px;
  border: 1px solid ${ props => props.theme["base-border"]} ;
  background-color: ${props => props.theme["base-input"]} ;
  border-radius: 6px;
  margin-top: 0.75rem;
  color: ${props => props.theme["base-label"]} 
`

