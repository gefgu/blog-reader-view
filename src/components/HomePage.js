import Subtitle from "../styled-components/Subtitle";
import Title from "../styled-components/Title";
import PostPreview from "./PostPreview";

function HomePage() {
  return (
    <div>
      <header className="flex flex-col gap-0 items-center my-12">
        <Title className="text-6xl">Attila</Title>
        <Subtitle className="text-3xl">Thougths, stories and ideas.</Subtitle>
      </header>
      <div className="flex flex-col max-w-2xl mx-auto">
        <PostPreview />
      </div>
    </div>
  );
}

export default HomePage;
