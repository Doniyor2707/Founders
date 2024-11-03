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
// ui
import Button from "../../components/ui/button/Button";

// image

function Home() {
  return (
    <div>
      <Hero />

      <Collections />

      <About />

      <Teachers />

      <Course />

      <Books />

      <News />
    </div>
  );
}

export default Home;
