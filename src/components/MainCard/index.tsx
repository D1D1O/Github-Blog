import { DivContainer, DivContent, FooterContent, HeaderContent, ImgContainer, MainCardContainer, MainContent, MainDiv } from "./styles";

import didio from '../../assets/didio.jpg'
import github from '../../assets/github.png'

export const MainCard = () => {
  return (
    <MainDiv>
      <MainCardContainer>
        <DivContainer>
          <ImgContainer src={didio} alt="" />
        </DivContainer>

        <DivContainer>
          <DivContent>
            <HeaderContent>
              <h2>Cameron Williamson</h2>  <span> <img src={github} alt="" /></span>
            </HeaderContent>
            <MainContent>
              <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
              </p>
            </MainContent>

            <FooterContent>
                <span>@git</span> <span>@empresa</span> <span>@seguidores</span>
            </FooterContent>

          </DivContent>
        </DivContainer>

      </MainCardContainer>
    </MainDiv>
  )
}