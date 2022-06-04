import React, { useCallback, useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  const [count, setCount] = useState("0");
  const getProjectNum = (props) => {
    setCount(props);
  };

  const toggleHandler = useCallback(() => {
    console.log("first");
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About projectNum={count} />
      <Portfolio getProjectNum={getProjectNum} />
      <Experience />
      <Contact />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default App;
