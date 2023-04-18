import { useContext } from "react";
import { MainCard } from "../../components/MainCard"
import { MainCardDetail } from "../../components/MainCardDetail"
import { ContentPostDetail, PostDetail, PostDetailMain } from "./styled"
import { UserContext } from "../../contexts/UserContext";

export const Postdetail = () => {

  const {post} = useContext(UserContext);
  return (
    <PostDetailMain>
      <MainCardDetail title={post.title} />
      <ContentPostDetail>
          <PostDetail>
            <p>
              {post.body}
            </p>
          </PostDetail>
      </ContentPostDetail>
      
    </PostDetailMain>
  )
}