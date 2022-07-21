import ContentContainer from "../styled-components/ContentContainer";

function CommentBox({comment}) {
  return (
    <ContentContainer>
      {comment.content}
    </ContentContainer>
  )
}

export default CommentBox;