import { NavLink } from 'react-router-dom'


import { DivContainer, DivContent, FooterContent, HeaderContent, ImgContainer, MainCardContainer, MainContent, MainDiv } from "./styles";

import back from '../../assets/back.png'
import github from '../../assets/github2.png'

export const MainCardDetail = () => {
  return (
    <MainDiv>
      <MainCardContainer>
        <DivContainer>
          <HeaderContent>
            <NavLink to="/" title="Home">
              <span> <img src={back} alt="" /> </span>
            </NavLink>
            <span> <img src={github} alt="" />  </span>
          </HeaderContent>

          <MainContent>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
          </MainContent>

          <FooterContent>
            <span>@git</span> <span>@empresa</span> <span>@seguidores</span>
          </FooterContent>
        </DivContainer>
      </MainCardContainer>
    </MainDiv>
  )
}