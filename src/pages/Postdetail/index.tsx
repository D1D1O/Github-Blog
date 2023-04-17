import { MainCard } from "../../components/MainCard"
import { MainCardDetail } from "../../components/MainCardDetail"
import { ContentPostDetail, PostDetail, PostDetailMain } from "./styled"

export const Postdetail = () => {
  return (
    <PostDetailMain>
      <MainCardDetail/>
      <ContentPostDetail>
          <PostDetail>
            <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            </p>
          </PostDetail>
      </ContentPostDetail>
      


    </PostDetailMain>
  )
}