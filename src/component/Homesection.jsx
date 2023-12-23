import "./cssFile/navbar.css";
const Homesection = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 d-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 text-center text-lg-end"
            data-aos="fade-up"
          >
            <div>
              <h1>
                <span className="fw-normal">شارك معلوماتك</span>
                <br />
                بمسحه واحدة بس
              </h1>
              <h2 className="mt-4 mb-5">مشاركة معلوماتك صارت أسهل مع تاق مي</h2>
              <div className="form-group d-flex gap-2 justify-content-center justify-content-lg-start flex-wrap">
                <a href="https://play.google.com/store/apps/details?id=com.app.android.tagme">
                  Google Play
                </a>
                <a href="https://apps.apple.com/sa/app/tagme/id1598114927">
                  App Store
                </a>
                <a href="http://store.tag-me.net"> متجر تاق مي </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 d-flex flex-lg-column align-items-lg-stretch justify-content-center justify-content-lg-start order-1 order-lg-2"
            data-aos="fade-up"
          >
            {/* <!-- <img src="./Images/img_02.png" alt=""> --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homesection;
