import React from "react";
import Header from "./../sections/Header";
import Help from "./../sections/Help";
import Donation from "./../sections/Donation";
import Footer from "./../sections/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Help />

      <Donation />

      <Footer />
    </div>
  );
};

export default Home;
