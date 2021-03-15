import React from "react";
import { MobileHeader } from "./components/MobileHeader";
import { Top } from "./components/Top";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Business } from "./components/Business";
import { Team } from "./components/Team";
import { Quote } from "./components/Quote";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="h-100">
      <MobileHeader />
      <Header />

      <Top />

      <Hero />

      <Contact />

      <Services />

      <Business />

      <Team />

      <Quote />

      <Footer />
    </div>
  );
};

export default App;
