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
    <div>
      <header className="flex flex-col gap-0 items-center my-12">
        <Title className="text-6xl">Attila</Title>
        <Subtitle className="text-3xl">Thougths, stories and ideas.</Subtitle>
      </header>
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
