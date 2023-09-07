import React from "react";
import Header from "./components/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";

const App = () => {
  return (
    <ParallaxProvider>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/artists"} element={<Artists />} />
      </Routes>
    </ParallaxProvider>
  );
};

export default App;
