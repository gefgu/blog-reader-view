import Header from "../styled-components/Header";
import Paragraph from "../styled-components/Paragraph";
import Subtitle from "../styled-components/Subtitle";
import Title from "../styled-components/Title";
import CommentForm from "./CommentForm";

function PostPage() {
  const post = {
    title: "Welcome to Ghost",
    author: "Corban",
    date: "30 Dec 2020",
    content:
      "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
  };

  return (
    <div className="px-6">
      <Header>
        <Title>{post.title}</Title>
        <Subtitle>
          By {post.author} on {post.date}
        </Subtitle>
      </Header>

      <div className="max-w-3xl mx-auto">
        <Paragraph>{post.content}</Paragraph>
      </div>
      <CommentForm />
    </div>
  );
}

export default PostPage;
