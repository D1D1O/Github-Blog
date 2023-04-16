import { Header } from "../../components/Header"
import { MainCard } from "../../components/MainCard"
import { PostCard } from "../../components/PostCard"
import { SearchForm } from "../../components/SearchForm"
import { HomeContainer, PostsContainer, PostsItems } from "./styles"


export const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <MainCard/>
      <SearchForm/>


    <PostsContainer>
      <PostsItems>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </PostsItems>
    </PostsContainer>


    </HomeContainer>
  )
}