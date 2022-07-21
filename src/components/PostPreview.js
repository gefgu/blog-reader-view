import Anchor from "../styled-components/Anchor";
import ContentContainer from "../styled-components/ContentContainer";
import Heading from "../styled-components/Heading";
import Paragraph from "../styled-components/Paragraph";
import SubHeading from "../styled-components/SubHeading";

function PostPreview({ post }) {
  return (
    <ContentContainer>
      <Anchor href={`/posts/${post._id}`}>
        <Heading> {post.title}</Heading>
      </Anchor>
      <SubHeading>
        By {post.author} on {post.date}
      </SubHeading>
      <Paragraph>{post.content.slice(0, 200)}...</Paragraph>
    </ContentContainer>
  );
}

export default PostPreview;
