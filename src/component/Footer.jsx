import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
<>
<footer id="footer">
    <div
        className="container py-4 d-flex flex-row-reverse align-items-center justify-content-center justify-content-md-between flex-wrap">
        <div className="copyright pb-3 pb-md-0">
            <p>Copyright <script> document.write(new Date().getFullYear());</script> Tag-me . All Rights Reserved | Developed by </p> <a target="_blank" href="https://e-dever.com">E-dever</a>
        </div>
        <div className="credits">
            <a href="/home/TermsAndConditions">سياسة الخصوصية</a>
        </div>
    </div>
</footer>
<a className="go-top"><IoIosArrowUp/></a>
</>
  )
}

export default Footer
