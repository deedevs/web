import { useEffect } from "react";
// import Header2 from "./Components/Header2";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Process from "./Components/Process";
import Partners from "./Components/Partners";
import GoToTop from "./Components/GoToTop";

import AOS from "aos";
import "aos/dist/aos.css";

// import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 200,
      easing: "ease-in-out",
      delay: 100,
      startEvent: "scroll",
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Header />
      <Features />
      <Process />
      <Services />
      <Partners />
      <Testimonial />
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
