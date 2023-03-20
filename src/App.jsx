import { useEffect } from "react";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Process from "./Components/Process";
import Partners from "./Components/Partners";
import GoToTop from "./Components/GoToTop";
import Team from "./Components/Team";

import AOS from "aos";
import "aos/dist/aos.css";
import Mission from "./Components/Mission";
import Form from "./Components/Form";

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
    <div className="overflow-x-hidden font-poppins">
      <Header />
      <Features />
      <Process />
      <Services />
      <Mission />
      <Team />
      <Partners />
      <Testimonial />
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
