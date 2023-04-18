import { useCallback, useContext, useEffect } from "react"
import { Header } from "../../components/Header"
import { MainCard } from "../../components/MainCard"
import { PostCard } from "../../components/PostCard"
import { SearchForm } from "../../components/SearchForm"
import { UserContext } from "../../contexts/UserContext"
import { HomeContainer, LinkPost, PostsContainer, PostsItems } from "./styles"
import { NavLink  } from "react-router-dom"

export const Home =  () => {

  const { issues,fillPost } = useContext(UserContext);

  const handleSelectCard = useCallback( async (title:string, body:string, html_url:string) => {
    await fillPost({title,body,html_url});
  },[]);

  return (
    <HomeContainer>
      <MainCard/>
      <SearchForm/>
      <PostsContainer>
        <PostsItems>
          {
            (
              issues.items && issues.items.map((item) => {
                return (
                  <NavLink onClick={()=> handleSelectCard(item.title,item.body,item.html_url)} key={item.id} to={'detail'} >
                     <LinkPost  style={{ textDecoration: 'none' }}>
                    
                        <PostCard titulo={item.title} body={item.body} />
                      
                     </LinkPost>
                  </NavLink>
                )
              }))
          }

        </PostsItems>
      </PostsContainer>
    </HomeContainer>
  )
}