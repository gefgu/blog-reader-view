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
  const [comments, setComments] = useState();

  const getPost = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}`
    );
    let data = await response.json();

    data.date = data.publishedDate || data.creationDate;
    data.date = DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_MED);
    data.author = data.author.username;
    return data;
  };

  const getComments = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/comments`
    );
    let data = await response.json();

    data = data.map((item) => {
      item.date = item.publishedDate || item.creationDate;
      item.date = DateTime.fromISO(item.date).toLocaleString(DateTime.DATE_MED);
      item.author = item.author.username;
      return item;
    });

    return data;
  };

  useEffect(() => {
    getPost().then((data) => setPost(data));
    getComments().then((data) => setComments(data));

    return () => {
      setPost(null);
      setComments(null);
    };
  }, []);

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

      {comments &&
        comments.map((comment, index) => (
          <CommentBox comment={comment} key={index} />
        ))}
    </OuterWrapper>

    // Build dummy comments
  );
}

export default PostPage;
