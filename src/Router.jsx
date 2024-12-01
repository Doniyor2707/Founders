import { Route, Routes } from "react-router-dom";
import { AuthLayout, MainLayout } from "./layout";
import { Home, Register } from "./pages";

function Router() {
  return (
    <Routes>
      {/* main */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* auth layout */}
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
      </Route>

      {/* not found */}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default Router;
