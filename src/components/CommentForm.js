import { useRef } from "react";
import Button from "../styled-components/Button";
import Form from "../styled-components/Form";
import Heading from "../styled-components/Heading";
import Input from "../styled-components/Input";

function CommentForm({ token, postId, updateComments }) {
  const commentInput = useRef(null);

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
    const data = await response.json();
    if (!data.errors) {
      // Successful creation of comment
      updateComments();
      commentInput.current.value = "";
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Add comment</Heading>
      <Input placeholder="Comment" ref={commentInput} name="content" />
      <Button>Add</Button>
    </Form>
  );
}

export default CommentForm;
