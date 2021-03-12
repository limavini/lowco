import React from "react";

import { MobileHeader } from "./components/MobileHeader";
import { Top } from "./components/Top";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Application } from "./components/Application";
// import { Header } from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="h-100">
      <MobileHeader />
      {/* <Header /> */}

      <Top />

      <Hero />

      <Contact />

      <Services />

      <h2 className="text-2xl px-10 pb-12 text-gray-1">
        Good design means good business
      </h2>

      <div className="grid gap-y-9">
        <Application
          bgColor="green-500"
          bgImage="energy-dashboard"
          category="Full stack application"
          title="Energy saving dashboard"
        />
        <Application
          bgColor="yellow-500"
          bgImage="starbucks-project"
          category="Full stack application"
          title="Energy saving dashboard"
        />
        <Application
          bgColor="green-500"
          bgImage="energy-dashboard"
          category="Full stack application"
          title="Energy saving dashboard"
        />
        <Application
          bgColor="green-500"
          bgImage="energy-dashboard"
          category="Full stack application"
          title="Energy saving dashboard"
        />
      </div>
    </div>
  );
};

export default App;
