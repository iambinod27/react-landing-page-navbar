import React from "react";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <Content />

        <Footer />
      </div>
    </>
  );
};

export default App;
