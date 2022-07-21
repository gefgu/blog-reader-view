import ContentContainer from "../styled-components/ContentContainer";
import Heading from "../styled-components/Heading";
import Paragraph from "../styled-components/Paragraph";
import SubHeading from "../styled-components/SubHeading";

function PostPreview({ post }) {
  post.content = post.content.replaceAll(/<.*?>/g, "");

  return (
    <ContentContainer>
      <Heading>{post.title}</Heading>
      <SubHeading>
        By {post.author} on {post.date}
      </SubHeading>
      <Paragraph>{post.content.slice(0, 200)}</Paragraph>
    </ContentContainer>
  );
}

export default PostPreview;
