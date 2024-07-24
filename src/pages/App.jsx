import React from "react";
import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default App;
