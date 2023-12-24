import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Testimonial() {
  return (

    <MDBContainer className="reviwe my-5 mb-5">
        <h2 >قالوا عنا </h2>
      <MDBCarousel showControls dark>
        {/* <MDBCarouselInner> */}
          <MDBCarouselItem className="active text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">ياسمين محمود</h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  تجربتى مع اكاديمية اعمل بيزنس تجربة ثرية جدا فكرة اعمل بيزنس انها كورسات بيزنس اون لاين بيديها ناس خبرة ومتخصصيين،اللى زاد احترامى ليهم انى لما تواصلت مع كذة مدرب من عندهم انك تستشير حد ويقوللك انا مش بدى استشارات بمقابل مادى هو بيقدمللك خدمة محترمة وعاوز يفيدك ومن اكتر الناس اللى استفدت من كورساتهم د محمد البااز شكرا يادكتور.


                </p>
              </MDBCol>
            </MDBRow>
   
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3"> محمد محمود</h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  تجربتى مع اكاديمية اعمل بيزنس تجربة ثرية جدا فكرة اعمل بيزنس انها كورسات بيزنس اون لاين بيديها ناس خبرة ومتخصصيين،اللى زاد احترامى ليهم انى لما تواصلت مع كذة مدرب من عندهم انك تستشير حد ويقوللك انا مش بدى استشارات بمقابل مادى هو بيقدمللك خدمة محترمة وعاوز يفيدك ومن اكتر الناس اللى استفدت من كورساتهم د محمد البااز شكرا يادكتور.


                </p>
              </MDBCol>
            </MDBRow>
        
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3"> نرمين محمود</h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  تجربتى مع اكاديمية اعمل بيزنس تجربة ثرية جدا فكرة اعمل بيزنس انها كورسات بيزنس اون لاين بيديها ناس خبرة ومتخصصيين،اللى زاد احترامى ليهم انى لما تواصلت مع كذة مدرب من عندهم انك تستشير حد ويقوللك انا مش بدى استشارات بمقابل مادى هو بيقدمللك خدمة محترمة وعاوز يفيدك ومن اكتر الناس اللى استفدت من كورساتهم د محمد البااز شكرا يادكتور.


                </p>
              </MDBCol>
            </MDBRow>

          </MDBCarouselItem>
        {/* </MDBCarouselInner> */}
      </MDBCarousel>
    </MDBContainer>
  );
}