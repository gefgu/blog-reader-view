import Box from "../styled-components/Box";
import ContentContainer from "../styled-components/ContentContainer";
import Paragraph from "../styled-components/Paragraph";

function CommentBox({ comment }) {
  return (
    <ContentContainer>
      <Box>
        <Paragraph>{comment.content}</Paragraph>
        <Paragraph align="end" size="0.9rem">By {comment.author} on {comment.date}</Paragraph>
      </Box>
    </ContentContainer>
  );
}

export default CommentBox;
