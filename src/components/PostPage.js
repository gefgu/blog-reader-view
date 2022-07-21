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

    data = data.map((item) => {
      let newItem = item;
      newItem.date = newItem.publishedDate || newItem.creationDate;
      newItem.date = DateTime.fromISO(newItem.date).toLocaleString(
        DateTime.DATE_MED
      );
      newItem.author = newItem.author.username;
      return newItem;
    });
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
        <Paragraph>{post && post.content}</Paragraph>
      </ContentContainer>

      <CommentForm />

      {comments.map((comment) => (
        <CommentBox comment={comment} />
      ))}
    </OuterWrapper>

    // Build dummy comments
  );
}

export default PostPage;
