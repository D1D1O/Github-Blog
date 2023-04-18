import { NavLink } from 'react-router-dom'


import { DivContainer, DivContent, FooterContent, HeaderContent, ImgContainer, MainCardContainer, MainContent, MainDiv } from "./styles";

import back from '../../assets/back.png'
import github from '../../assets/github2.png'

import git from '../../assets/git.png'
import company from '../../assets/company.png'
import followers from '../../assets/followers.png'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

interface MainCardDetailProps {
  title?: string;
  html_url?: string;
}

export const MainCardDetail = ({title, html_url}:MainCardDetailProps) => {

  const {user} = useContext(UserContext);

  return (
    <MainDiv>
      <MainCardContainer>
        <DivContainer>
          <HeaderContent>
            <NavLink to="/" title="Home">
              <span> <img src={back} alt="" /> </span>
            </NavLink>
            <span> 
              <a rel="stylesheet" href={html_url} target="_blank">
                <img src={github} alt="" />
              </a>  
            </span>
          </HeaderContent>

          <MainContent>
            <p>
              {
                title
              }
            </p>
          </MainContent>

          <FooterContent>
            <span> <img src={git} /> {user.login}
            </span> <span> <img src={company} />  {user.company}
            </span> <span> <img src={followers} /> {user.followers} </span>
          </FooterContent>
        </DivContainer>
      </MainCardContainer>
    </MainDiv>
  )
}