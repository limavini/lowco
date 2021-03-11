import React from "react";
import { MobileHeader } from "./components/MobileHeader";
// import { Header } from "./components/Header";
const App: React.FC = () => {
  return (
    <div className="h-100">
      <MobileHeader />
      {/* <Header /> */}
      <div className="bg-red-100 pt-10 px-11">
        <h3 className="text-blue">Unhappy with your website?</h3>
      </div>
    </div>
  );
};

export default App;
