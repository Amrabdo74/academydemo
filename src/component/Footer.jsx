import { IoIosArrowUp } from "react-icons/io";
import logo from "../Images/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './cssFile/navbar.css'
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
             <div className=" row py-4 d-flex flex-row-reverse align-items-center justify-content-center justify-content-md-between flex-wrap">
          <div className="col-md-3 col-sm-12 col-lg-3 copyright d-flex flex-column text-center justify-content-center align-items-center    pb-3 pb-md-0">
            <img src={logo} style={{ width: "50px" }} alt="" />
            <p className="mt-3">جميع الحقوق محفوظة اكاديمية اقرأ © 2024</p>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-3 col-md-3 copyright d-flex flex-column  text-center justify-content-center align-items-center    pb-3 pb-md-0">
            <p className="mt-3">
              <CiLocationOn />
              الرياض، حي العزيزية طريق الملك عبدالله
            </p>
            <p className="mt-3">
              <CiMobile1 />
              +961 23154863
            </p>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-3 col-lg-3 d-flex flex-column  text-center justify-content-center align-items-center  pb-3 pb-md-0">
            <div className="footer-icons">
              <a href="">
                {" "}
                <FaFacebook />
              </a>
              <a href="">
                <FaYoutube />{" "}
              </a>
              <a href="">
                {" "}
                <FaInstagram />
              </a>
            </div>
            <p>لمزيد من المتابعه</p>
          </div>
        </div>
        </div>
     
      </footer>
      <a className="go-top">
        <IoIosArrowUp />
      </a>
      <a className="left-phone"   href="tel:+966570094500">
      <FaPhone />
      </a>
      <a className="whats-app"   href="https://api.whatsapp.com/send?phone=966570094500" >
      <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;
