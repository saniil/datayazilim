import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Ana = styled.div`
  box-sizing: border-box;
  height: 70vh;
  background-color: orange;
`;
const Let = styled.div`
  width: 75vw;
  padding-top: 10px;
  margin: auto;
  div {
    margin-bottom: 15px;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // Ekran genişliği 1024px ve daha küçük olduğunda
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // Ekran genişliği 768px ve daha küçük olduğunda
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Home() {
  return (
    <Ana id="blue">
      <Let>
        <div>
          <h2 style={{ textAlign: "center", margin: "30px" }}>
            Referanslarımız
          </h2>
          <Slider {...settings}>
            <div>
              <img style={{ width: "25vh" }} src={`../icons/5.png`}></img>
            </div>
            <div>
              <img style={{ width: "25vh" }} src={`../icons/4.png`}></img>
            </div>
            <div>
              <img style={{ width: "25vh" }} src={`../icons/3.png`}></img>
            </div>
            <div id="iş">
              <img style={{ width: "25vh" }} src={`../icons/2.webp`}></img>
            </div>
            <div>
              <img style={{ width: "25vh" }} src={`../icons/1.png`}></img>
            </div>
          </Slider>
        </div>
        <h2 style={{ textAlign: "center", margin: "30px" }}>İş Ortaklarımız</h2>
        <div>
          <Slider {...settings}>
            <div>
              <img style={{ width: "25vh" }} src={`../icons/logo_2.jpg`}></img>
            </div>
            <div>
              <img style={{ width: "25vh" }} src={`../icons/logo_3.jpg`}></img>
            </div>
            <div>
              <img style={{ width: "25vh" }} src={`../icons/logo_1.png`}></img>
            </div>
            <div>
              <img style={{ width: "25vh" }} src={`../icons/logo_4.png`}></img>
            </div>
          </Slider>
        </div>
      </Let>
    </Ana>
  );
}
