import { Suspense } from "react";
import "./index.css";
import Router from "./Router";
import '@splidejs/react-splide/css';

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Router />
    </Suspense>
  );
}

export default App;
