import Header from "../styled-components/Header";
import Subtitle from "../styled-components/Subtitle";
import Title from "../styled-components/Title";
import PostPreview from "./PostPreview";

function HomePage() {
  const posts = [
    {
      title: "Welcome to Ghost",
      author: "Corban",
      date: "30 Dec 2020",
      content:
        "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
    },
    {
      title: "Welcome to Ghost #2",
      author: "Corban",
      date: "30 Dec 2020",
      content:
        "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
    },
    {
      title: "Welcome to Ghost #3",
      author: "Corban",
      date: "30 Dec 2020",
      content:
        "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time…",
    },
  ];

  return (
    <div className="px-6">
      <Header>
        <Title>Attila</Title>
        <Subtitle>Thougths, stories and ideas.</Subtitle>
      </Header>
      <div className="flex flex-col max-w-2xl mx-auto">
        <hr />
        {posts.map((post) => {
          return (
            <>
              <PostPreview post={post} />
              <hr />
            </>
          );
        })}
        <hr />
      </div>
    </div>
  );
}

export default HomePage;
