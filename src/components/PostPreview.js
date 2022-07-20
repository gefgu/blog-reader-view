import Heading from "../styled-components/Heading";
import Paragraph from "../styled-components/Paragraph";
import SubHeading from "../styled-components/SubHeading";

function PostPreview({ post }) {
  return (
    <div className="my-8">
      <Heading>{post.title}</Heading>
      <SubHeading>
        By {post.author} on {post.date}
      </SubHeading>
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
