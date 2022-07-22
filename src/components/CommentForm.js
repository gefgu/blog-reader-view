import { useContext, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Button from "../styled-components/Button";
import Form from "../styled-components/Form";
import Heading from "../styled-components/Heading";
import Input from "../styled-components/Input";
import Paragraph from "../styled-components/Paragraph";

function CommentForm({ postId, updateComments }) {
  const commentInput = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = { content: commentInput.current.value };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      }
    );

    if (response.status === 401) {
      setErrorMessage("You must log-in to add comment.");
      return;
    }

    const data = await response.json();
    if (!data.errors) {
      // Successful creation of comment
      updateComments();
      commentInput.current.value = "";
      setErrorMessage(null);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Add comment</Heading>
      <Input placeholder="Comment" ref={commentInput} name="content" />
      <Button>Add</Button>
      {errorMessage && <Paragraph errorMessage>{errorMessage}</Paragraph>}
    </Form>
  );
}

export default CommentForm;
