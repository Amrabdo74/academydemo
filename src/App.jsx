import "./App.css";
import Aboutus from "./component/Aboutus";
import Homesection from "./component/Homesection";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import loading from "./Images/loading.gif";
import logo from "./Images/logo.png";
import Questions from "./component/Questions";
import Contactus from "./component/Contactus";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import Service from "./component/Service";
import Courses from "./component/Courses";
import Testimonial from "./component/Testimonial ";
function App() {
  useEffect(() => {
    let mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.style.display = "none";}
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Your existing JavaScript code with null checks

    let header = document.querySelector("header");
    let goTopBtn = document.querySelector(".go-top");
    let loading = document.getElementById("loading");


    if (goTopBtn) {
      goTopBtn.addEventListener("click", () => {
        scrollTo(0, 0);
      });
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        if (header) {
          header.classList.add("sticky");
        }
        if (goTopBtn) {
          goTopBtn.classList.add("active");
        }
      } else {
        if (header) {
          header.classList.remove("sticky");
        }
        if (goTopBtn) {
          goTopBtn.classList.remove("active");
        }
      }
    });

    setTimeout(function () {
      if (loading) {
        loading.style.display = "none";
      }
      let mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.style.display = "block";
      }
    }, 3000);

    window.addEventListener("load", () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    });
  }, []);
  return (
    <>
      {/* <div id="loading">
        <img id="loading-image" src={loading} alt="Loading..." />
        <img id="loading-logo" src={logo} alt="Loading..." />
      </div> */}
      {/* <div id="main-content"> */}
        <Navbar />
        <Slider/>
        {/* <Homesection /> */}
        <Aboutus />
        <Questions />
        <Courses />
        <Service/>
        <Testimonial/>
        <Contactus />
        <Footer/>

      {/* </div> */}
    </>
  );
}

export default App;
