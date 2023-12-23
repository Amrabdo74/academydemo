import './cssFile/navbar.css'
const Slider = () => {
  return (
    <div className="header">
         <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://unsplash.it/1900/1024/?image=291"
            className="d-block w-100"
            alt="..."
          />
            
          <div data-aos="fade-up" className="carousel-caption d-none d-md-block">
            <h5 >First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://unsplash.it/1900/1024/?image=786"
            className="d-block w-100"
            alt="..."
          />
          <div data-aos="fade-up" className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://unsplash.it/1900/1024/?image=768"
            className="d-block w-100"
            alt="..."
          />
          <div data-aos="fade-up" className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default Slider;
