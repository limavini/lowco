import React from "react";
import { MobileHeader } from "./components/MobileHeader";
import { Top } from "./components/Top";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Card } from "./components/Card";
// import { Header } from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="h-100">
      <MobileHeader />
      {/* <Header /> */}

      <Top />

      <Hero />

      <Contact />

      {/* Services */}
      <h2 className="text-2xl px-10 pb-8 text-gray-1 mb-11">
        We offer high demand services
      </h2>

      <div className="px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-10 lg:gap-10">
        <Card />
      </div>
    </div>
  );
};

export default App;
