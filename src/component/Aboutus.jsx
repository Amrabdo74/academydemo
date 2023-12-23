import pageIamge from'../Images/img02.png';
const Aboutus = () => {
  return (
    <section id="who">
      <div className="container">
        <h2>من نحن</h2>
        <p>
          نحن شركة رقمية ريادية , نهدف الى تقديم خدمات رقمية متطورة , ونسعى
          دائمًا للأبتكار و التطور لمستقبل أفضل.
          <br />
          نقدم لكم خدمات و حلول متميزة و مواكبة للتطور الرقمي و المعلوماتي عن
          طريق منصة الكترونية تحتوي على صفحات المستخدمين و التي تسمح لهم بإضافة
          المعلومات الشخصية كرقم الجوال و البريد الالكتروني و مواقع التواصل
          الاجتماعي و يمكن الوصول لها عن طريق خدمة NFC التي بدورها تُسهل للأفراد
          والشركات الحصول على المعلومات الشخصية للأفراد.
        </p>

        <div className="qr">
          <div className="row d-flex align-items-center">
            <div className="img-qr col-lg-4" data-aos="fade-left">
              <img src={pageIamge} />
            </div>

            <div className="text-qr col-lg-8 text-end">
              <div>
                <div className="row" data-aos="fade-up">
                  <div className="col-md-1 col-2">
                  </div>

                  <div className="col-md-11 col-10">
                    <div>
                      <h4>رؤيتنا:</h4>
                      <p>
                        تهدف شركة تاق مي بأن تصبح شركة ريادية للأفراد و
                        القطاعات الحكومية و الخاصة عن طريق تقديم خدمات رقمية و
                        منصات مبتكرة لعملائنا و تمكين التحويل الرقمي في العالم
                        العربي.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row" data-aos="fade-up" data-aos-delay="200">
                  <div className="col-md-1 col-2">
                   
                  </div>

                  <div className="col-md-11 col-10">
                    <div>
                      <h4>رسالتنا:</h4>
                      <p>
                        تقديم خدمات و حلول الكترونية متميزة لمواكبة التطور
                        الرقمي و المعلوماتي.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
