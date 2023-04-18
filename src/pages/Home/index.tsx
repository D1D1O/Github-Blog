import { useContext } from "react"
import { Header } from "../../components/Header"
import { MainCard } from "../../components/MainCard"
import { PostCard } from "../../components/PostCard"
import { SearchForm } from "../../components/SearchForm"
import { UserContext } from "../../contexts/UserContext"
import { HomeContainer, PostsContainer, PostsItems } from "./styles"


export const Home =  () => {

  //const { issues } = useContext(UserContext);

  return (
    <HomeContainer>
      <MainCard/>
      <SearchForm/>
      <PostsContainer>
        <PostsItems>
        
          <PostCard />

        </PostsItems>
      </PostsContainer>
    </HomeContainer>
  )
}