import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ContentCard, HeaderCard, MainContainer, MainContent } from "./styled"

interface propsType {
  titulo?: string;
  body?: string;
  created_at: string;
}

export const PostCard = ({ titulo,body,created_at }:propsType) => {

  return (
    <MainContainer>
      <MainContent>
        <HeaderCard>
          <h1> { titulo } </h1>
          <span>
          {formatDistanceToNow(new Date(created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}{' '}

          </span>
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