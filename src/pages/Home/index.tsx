import { useCallback, useContext, useEffect } from "react"
import { Header } from "../../components/Header"
import { MainCard } from "../../components/MainCard"
import { PostCard } from "../../components/PostCard"
import { SearchForm } from "../../components/SearchForm"
import { UserContext } from "../../contexts/UserContext"
import { HomeContainer, PostsContainer, PostsItems } from "./styles"


export const Home =  () => {

  const { issues,fetchIssues } = useContext(UserContext);

  useEffect( () => {
    const initalload = async () => {
      await fetchIssues('');
    }
     initalload()
  },[]);


  console.log('issues');
  console.log(issues);
  return (
    <HomeContainer>
      <MainCard/>
      <SearchForm/>
      <PostsContainer>
        <PostsItems>
          {
              issues.items.map((item) => {
                return (
                  <PostCard titulo={item.title} body={item.body} />
                )
              })
          }

        </PostsItems>
      </PostsContainer>
    </HomeContainer>
  )
}