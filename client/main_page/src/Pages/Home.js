import React from "react";
import Intro from "../Home/pages_elements/Intro";
import Services from "../Home/pages_elements/Services";
import Team from "../Home/pages_elements/Team";
import Navbar from "../Home/pages_elements/Navbar";

export default function Home() {
  return (
    <section>
      <Intro />
      <Services />
      <Team />
    </section>
  );
}
