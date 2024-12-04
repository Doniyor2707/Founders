import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

function AuthLayout() {
  return (
    <>
      <Header />

      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayout;
