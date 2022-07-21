import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentContainer from "../styled-components/ContentContainer";
import Header from "../styled-components/Header";
import OuterWrapper from "../styled-components/OuterWrapper";
import Paragraph from "../styled-components/Paragraph";
import Subtitle from "../styled-components/Subtitle";
import Title from "../styled-components/Title";
import CommentBox from "./CommentBox";
import CommentForm from "./CommentForm";

function PostPage() {
  const postId = useParams().postId;
  const [post, setPost] = useState();

  const getPost = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`
    );
    let data = await response.json();

    data.date = data.publishedDate || data.creationDate;
    data.date = DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_MED);
    data.author = data.author.username;

    console.log(data);
    return data;
  };

  useEffect(() => {
    getPost().then((data) => setPost(data));
  }, []);

  // const post = {
  //   title: "Welcome to Blog",
  //   author: "Corban",
  //   date: "30 Dec 2020",
  //   content:
  //     "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
  // };

  const comments = [
    {
      content: "Fun!",
      date: "30 Dec 2020",
      author: "john",
    },
    {
      content: "Awesome!",
      date: "30 Dec 2020",
      author: "john",
    },
    {
      content: "Great!",
      date: "30 Dec 2020",
      author: "john",
    },
  ];

  return (
    <OuterWrapper>
      <Header>
        <Title>{post && post.title}</Title>
        <Subtitle>
          By {post && post.author} on {post && post.date}
        </Subtitle>
      </Header>

      <ContentContainer>
        {post &&
          post.content
            .split("\n")
            .map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
      </ContentContainer>

      <CommentForm />

      {comments.map((comment, index) => (
        <CommentBox comment={comment} key={index} />
      ))}
    </OuterWrapper>

    // Build dummy comments
  );
}

export default PostPage;
