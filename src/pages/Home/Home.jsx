// com
import {
  About,
  Books,
  Collections,
  Course,
  Hero,
  News,
  Teachers,
} from "../../components/main";

// image

function Home() {
  return (
    <>
      <div className="container">
        <Hero />

        <Collections />

        <About />

        <Teachers />

        <Course />

        <Books />
      </div>
      <News />
    </>
  );
}

export default Home;
