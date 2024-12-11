import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Brand from "./Components/Brand/Brand";
import BrandText from "./Components/Brand/BrandText";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
      </UpdateFollower>
      <Hero />
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Services />
        <Brand />
        <BrandText/>
        <Subscribe/>
        <Footer/>
      </UpdateFollower>
     
    </main>
  );
};

export default App;
