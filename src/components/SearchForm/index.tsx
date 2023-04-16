import { CardContainer, CardHeader, InputCard, MainContainer, SpanContent } from "./styles"

export const SearchForm = () => {
  return (
    <MainContainer>
      <CardContainer>
        <CardHeader>
          <SpanContent variant="title">Publicações</SpanContent> 
          <SpanContent variant="span"><div> 6 Publicações</div></SpanContent>
        </CardHeader>

        <InputCard placeholder="Bucar conteúdo">
        </InputCard>
      </CardContainer>
    </MainContainer>
  )
  
}