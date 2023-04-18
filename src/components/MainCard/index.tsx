import { DivContainer, DivContent, FooterContent, HeaderContent, ImgContainer, MainCardContainer, MainContent, MainDiv } from "./styles";

import git from '../../assets/git.png'
import company from '../../assets/company.png'
import followers from '../../assets/followers.png'


import github from '../../assets/github.png'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const MainCard = () => {

  const {user} = useContext(UserContext);

  return (
    <MainDiv>
      <MainCardContainer>
        <DivContainer>
          <ImgContainer src={user.avatar_url} alt="" />
        </DivContainer>

        <DivContainer>
          <DivContent>
            <HeaderContent>
              <h2> {user.name} </h2>
                
                <a rel="stylesheet" href={user.html_url} target="_blank">
                <span> <img src={github} alt="" /></span>
                </a> 
            </HeaderContent>
            <MainContent>
              <p>
                {user.bio}
              </p>
            </MainContent>

            <FooterContent>
                <span> <img src={git} /> {user.login} 
                </span> <span> <img src={company} />  {user.company} 
                </span> <span> <img src={followers} /> {user.followers} </span>
            </FooterContent>

          </DivContent>
        </DivContainer>

      </MainCardContainer>
    </MainDiv>
  )
}