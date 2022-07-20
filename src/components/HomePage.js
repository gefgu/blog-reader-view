import Subtitle from "../styled-components/Subtitle";
import Title from "../styled-components/Title";

function HomePage() {
  return (
    <div>
      <header className="flex gap-1">
        <Title>Attila</Title>
        <Subtitle>Thougths, stories and ideas.</Subtitle>
      </header>
    </div>
  );
}

export default HomePage;
