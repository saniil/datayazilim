import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ana = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: #f7f7f7;
`;

const Let = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  margin: auto;
  padding-top: 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 30px 0;
  color: black;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  .slick-slide {
    display: flex;
    justify-content: center;
    transition: transform 0.5s ease;
  }

  img {
    width: 100%;
    max-width: 25vh;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease; /* Animasyon ekleniyor */
  }

  .slick-active img {
    transform: scale(1.1); /* Aktif slaytın büyüklüğünü artırır */
  }
`;

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Ana id="blue">
      <Let>
        <div>
          <SectionTitle>Referanslarımız</SectionTitle>
          <StyledSlider {...settings}>
            <div>
              <img src="../icons/5.png" alt="Referans 1" />
            </div>
            <div>
              <img src="../icons/4.png" alt="Referans 2" />
            </div>
            <div>
              <img src="../icons/3.png" alt="Referans 3" />
            </div>
            <div>
              <img src="../icons/2.webp" alt="Referans 4" />
            </div>
            <div>
              <img id="İş" src="../icons/1.png" alt="Referans 5" />
            </div>
          </StyledSlider>
        </div>
        <SectionTitle>İş Ortaklarımız</SectionTitle>
        <StyledSlider {...settings}>
          <div>
            <img src="../icons/logo_2.jpg" alt="İş Ortakları 1" />
          </div>
          <div>
            <img src="../icons/logo_3.jpg" alt="İş Ortakları 2" />
          </div>
          <div>
            <img src="../icons/logo_1.png" alt="İş Ortakları 3" />
          </div>
          <div>
            <img src="../icons/logo_4.png" alt="İş Ortakları 4" />
          </div>
        </StyledSlider>
      </Let>
    </Ana>
  );
}
