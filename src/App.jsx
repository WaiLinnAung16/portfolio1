import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Label from "./pages/Label";

const App = () => {
  return (
    <>
      <ParallaxProvider>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/label"} element={<Label />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
};

export default App;
