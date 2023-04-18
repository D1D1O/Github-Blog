import { ContentCard, HeaderCard, MainContainer, MainContent } from "./styled"

interface propsType {
  titulo?: string;
  body?: string;
}

export const PostCard = ({ titulo,body }:propsType) => {

  console.log(body);

  return (
    <MainContainer>
      <MainContent>
        <HeaderCard>
          <h1> { titulo } </h1>
          <span>Há 1 dia</span>
        </HeaderCard>

        <ContentCard>
          <p>
            {body}
          </p>
        </ContentCard>
      </MainContent>


    </MainContainer>
  )
}