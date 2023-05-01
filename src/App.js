import React from "react";

import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Navbar, Brand } from "./components";

export default function App() {
  return (
    <div className="App">
      <div className="gradients__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
