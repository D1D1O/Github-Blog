import { useForm } from 'react-hook-form'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CardContainer, CardHeader, FormCard, InputCard, MainContainer, SpanContent } from "./styles"
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const SearchFormSchema = z.object({
  conteudo: z.string(),
});
type SearchFormType = z.infer<typeof SearchFormSchema>;

export const SearchForm = () => {

const { fetchIssues,issues } = useContext(UserContext);

  const { register,
          handleSubmit,
          formState:{ isSubmitting, errors}
        } = useForm<SearchFormType>({
          resolver: zodResolver(SearchFormSchema),
        });
  
  async function onSubmit(data: SearchFormType) {
    console.log(data);
    await fetchIssues(data.conteudo);
  }      
 
  return (
    <MainContainer>
      <CardContainer>
        <CardHeader>
          <SpanContent variant="title">Publicações</SpanContent>
          <SpanContent variant="span"><div> {issues.total_count} Publicações</div></SpanContent>
        </CardHeader>

        <FormCard onSubmit={handleSubmit(onSubmit)}>
          <InputCard
            placeholder="Bucar conteúdo"
            {...register("conteudo", { required: true })}
          >
          </InputCard>
        </FormCard>

      </CardContainer>
    </MainContainer>
  )

}