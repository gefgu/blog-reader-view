import ContentContainer from "../styled-components/ContentContainer";
import Header from "../styled-components/Header";
import OuterWrapper from "../styled-components/OuterWrapper";
import Paragraph from "../styled-components/Paragraph";
import Subtitle from "../styled-components/Subtitle";
import Title from "../styled-components/Title";
import CommentForm from "./CommentForm";

function PostPage() {
  const post = {
    title: "Welcome to Blog",
    author: "Corban",
    date: "30 Dec 2020",
    content:
      "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
  };

  return (
    <OuterWrapper>
      <Header>
        <Title>{post.title}</Title>
        <Subtitle>
          By {post.author} on {post.date}
        </Subtitle>
      </Header>

      <ContentContainer>
        <Paragraph>{post.content}</Paragraph>
      </ContentContainer>
      <CommentForm />
    </OuterWrapper>
  );
}

export default PostPage;
