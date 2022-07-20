import Heading from "../styled-components/Heading";
import Paragraph from "../styled-components/Paragraph";
import SubHeading from "../styled-components/SubHeading";

function PostPreview() {
  return (
    <div className="my-8">
      <Heading>Welcome to Ghost</Heading>
      <SubHeading>By Some Writer in Getting Started on 30 Dec 2020</SubHeading>
      <Paragraph>
        Welcome, it's great to have you here. We know that first impressions are
        important, so we've populated your new site with some initial getting
        started posts that will help you get familiar with everything in no
        time.…
      </Paragraph>
    </div>
  );
}

export default PostPreview;
