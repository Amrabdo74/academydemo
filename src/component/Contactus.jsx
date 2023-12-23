import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contactus = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 data-aos="fade-up">تواصل معنا </h2>
        <p data-aos="fade-up">
          بامكانك التواصل معنا من خلال وسائل الإتصال التالية.{" "}
        </p>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12">
            <div className="row justify-content-center">
              <div className="col-lg-3 info">
                <h3>
                  {" "}
                  <FaPhone />
                </h3>{" "}
                <h4>إتصل بنا</h4>
                <p>
                  <a href="tel:+966570094500">+966-57-009-4500</a>
                </p>
              </div>
              <div className="col-lg-3 info">
                <h3>
                  {" "}
                  <FaWhatsapp />
                </h3>
                <h4>الدعم الفني</h4>
                <p>
                  <a
                    href="https://api.whatsapp.com/send?phone=966570094500"
                    className="float-whatsApp"
                  >
                    +966-57-009-4500
                  </a>
                </p>
              </div>
              <div className="col-lg-3 info">
                <h3>
                  <MdOutlineMailOutline />
                </h3>
                <h4>راسلنا على</h4>
                <p>
                  <a href="mailto:tagme.supp@gmail.com">info@tag-me.net</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
