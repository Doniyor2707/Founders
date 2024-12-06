import { Suspense } from "react";
import "./index.css";
import Router from "./Router";
import '@splidejs/react-splide/css';
import Loader from "./components/loader/Loader";

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Router />
    </Suspense>
  );
}

export default App;
