import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { Home } from "./pages";

function Router() {
  return (
    <Routes>
      {/* main */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* not found */}

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default Router;
