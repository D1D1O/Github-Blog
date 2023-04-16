import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MainCardContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr; //repeat(2,1fr);
  width: 54rem;
  height: 13.25rem;
  background-color: ${ props => props.theme["base-profile"]};
  border-radius: 10px;
  margin-top: -8rem;
`;

export const ImgContainer = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin-left: 40px;
  margin-top: calc(50% - 148px/2);
`;

export const DivContainer = styled.div`
`;

export const DivContent = styled.div`
  margin-top: 2.5rem;
  margin-right: 2.5rem;
`;

export const HeaderContent = styled.div`
  display:  flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  display:  flex;
  flex-direction: row;
  margin-top: 0.625rem;
`;

export const FooterContent = styled.div`
  display:  flex;
  flex-direction: row;
  margin-top: 3rem;
`;