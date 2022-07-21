import { useEffect, useState } from "react";
import ContentContainer from "../styled-components/ContentContainer";
import Divider from "../styled-components/Divider";
import Header from "../styled-components/Header";
import OuterWrapper from "../styled-components/OuterWrapper";
import Subtitle from "../styled-components/Subtitle";
import Title from "../styled-components/Title";
import PostPreview from "./PostPreview";

function HomePage() {
  console.log(process.env.REACT_APP_API_URL);

  const [posts, setPosts] = useState([
    {
      title: "Welcome to Blog",
      author: "Corban",
      date: "30 Dec 2020",
      content:
        "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
    },
    {
      title: "Welcome to Blog #2",
      author: "Corban",
      date: "30 Dec 2020",
      content:
        "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
    },
    {
      title: "Welcome to Blog #3",
      author: "Corban",
      date: "30 Dec 2020",
      content:
        "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
    },
  ]);

  const getPosts = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getPosts();
  });

  return (
    <OuterWrapper>
      <Header>
        <Title>Blog</Title>
        <Subtitle>Thougths, stories and ideas.</Subtitle>
      </Header>
      <ContentContainer>
        <Divider />
        {posts.map((post, index) => {
          return (
            <>
              <PostPreview post={post} />
              <Divider />
            </>
          );
        })}
      </ContentContainer>
    </OuterWrapper>
  );
}

export default HomePage;
