import Button from "../styled-components/Button";
import Form from "../styled-components/Form";
import Heading from "../styled-components/Heading";
import Input from "../styled-components/Input";

function CommentForm() {
  return (
    <Form>
      <Heading>Add comment</Heading>
      <Input placeholder="Comment" />
      <Button>Add</Button>
    </Form>
  );
}

export default CommentForm;
