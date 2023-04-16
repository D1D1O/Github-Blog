import { Effect01, Effect02, HeaderContainer, ImgBox } from "./styles"

import Logo from '../../assets/Logo.png';
import effect02 from '../../assets/effect01.png';
import effect01 from '../../assets/effect02.png';



export const Header = () => {
  return (
    <HeaderContainer>

      <Effect01>
        <img src={effect01} alt=""/>
      </Effect01>
      
      <ImgBox src={Logo} alt=""/>
      
      <Effect02>
        <img src={effect02} alt=""/>
      </Effect02>
    </HeaderContainer>
  )
}