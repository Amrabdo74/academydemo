import "./cssFile/navbar.css";
import logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg auto container d-flex align-items-center justify-content-between  ">
        <div className="logo d-flex justify-content-between ">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        
        </div>     <button
          className="navbar-toggler ms-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={true}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <div
          className="collapse navbar-collapse hide  "
          id="navbarSupportedContent"
        >
          <ul className=" nav-item d-flex  justify-content-center navbar-nav  mx-auto  ">
            <li className="nav-item">
              <a className=" nav-link active scrollto" href="#who">
                من نحن
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#questions">
                الأسئلة الشائعة
              </a>
            </li>
            <li className="nav-item">
              <a className="login scrollto" href="#">
                تسجيل الدخول
              </a>
            </li>
            <li className="nav-item">
              <a className="contact scrollto" href="./bootsrapcasule.html">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

   
      </nav>
    </header>
  );
};

export default Navbar;
