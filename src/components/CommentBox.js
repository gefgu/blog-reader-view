import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Box from "../styled-components/Box";
import Button from "../styled-components/Button";
import ContentContainer from "../styled-components/ContentContainer";
import Paragraph from "../styled-components/Paragraph";

function CommentBox({ comment }) {
  const authContext = useContext(AuthContext);

  return (
    <ContentContainer>
      <Box>
        <Paragraph>{comment.content}</Paragraph>
        <Button>Delete</Button>
        <Paragraph align="end" size="0.9rem">
          By {comment.author} on {comment.date}
        </Paragraph>
      </Box>
    </ContentContainer>
  );
}

export default CommentBox;
