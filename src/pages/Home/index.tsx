import { Header } from "../../components/Header"
import { MainCard } from "../../components/MainCard"
import { SearchForm } from "../../components/SearchForm"
import { HomeContainer } from "./styles"


export const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <MainCard/>
      <SearchForm/>



    </HomeContainer>
  )
}