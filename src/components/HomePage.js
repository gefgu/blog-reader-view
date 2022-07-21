import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import ContentContainer from "../styled-components/ContentContainer";
import Divider from "../styled-components/Divider";
import Header from "../styled-components/Header";
import OuterWrapper from "../styled-components/OuterWrapper";
import Subtitle from "../styled-components/Subtitle";
import Title from "../styled-components/Title";
import PostPreview from "./PostPreview";

function HomePage() {
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
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
    return data;
  };

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <OuterWrapper>
      <Header>
        <Title>Blog</Title>
        <Subtitle>Thougths, stories and ideas.</Subtitle>
      </Header>
      <ContentContainer>
        <Divider/>
        {posts &&
          posts.map((post) => {
            return (
              <div key={post._id}>
                <PostPreview post={post} />
                <Divider />
              </div>
            );
          })}
      </ContentContainer>
    </OuterWrapper>
  );
}

export default HomePage;
