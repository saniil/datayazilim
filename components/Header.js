import styled from "styled-components";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const HeaderDiv = styled.div`
  background-color: #ffff;
`;

const HeaderInline = styled.div`
  background-color: #1b4d89;
  padding: ${(props) => (props.isFixed ? "30px" : "50px")};
  top: ${(props) => (props.isFixed ? "0" : "")};
  display: flex;
  gap: 50px;
  justify-content: center;
  z-index: 100;
  color: white;
  left: 0;
  width: 100vw;
  transition: all 0.3s;
  box-sizing: border-box;
  position: fixed;

  @media (max-width: 1100px) {
    padding: ${(props) => (props.isFixed ? "15px" : "30px")};
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: #1b4d89;
    font-size: 17px;
    height: 30vh;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledImage = styled.img`
  display: ${(props) => (props.isImage ? "flex" : "none")};
  position: relative;
  width: 100px;
  border-radius: 50%;
  @media (max-width: 1100px) {
    display: flex;
  }
`;

const HeaderUst = styled.div`
  max-width: 1400px;
  min-width: 300px;
  color: black;
  display: flex;
  margin: auto;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderUstA = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 10px;
  margin-left: 20px;
  gap: 20px;
  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderUstB = styled.div`
  margin: 5px;
  padding: 5px;
  border: 2px solid #1b4d89;
`;

const IconIcın = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isImage, setImage] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  const handleImage = () => {
    if (window.pageYOffset > 200) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleImage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleImage);
    };
  }, []);

  const handleDownload = () => {
    const dosyaYolu = process.env.PUBLIC_URL + "/exe/helper.exe";

    fetch(dosyaYolu)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "helper.exe");
      })
      .catch((error) => {
        console.error("Dosya indirme hatası:", error);
      });
  };

  return (
    <HeaderDiv>
      <HeaderUst>
        <HeaderUstA>
          <IconIcın>
            <img
              style={{ width: "20px", height: "15px" }}
              src={`../icons/current-location.svg`}
            />
            <div className="birinci">Karabağlar/İzmir</div>
          </IconIcın>
          <IconIcın>
            <img
              style={{ width: "20px", height: "15px" }}
              src={`../icons/mail.svg`}
            />
            <div className="ikinci">bilgi@datayazilim.com.tr</div>
          </IconIcın>
          <IconIcın>
            <img
              style={{ width: "20px", height: "15px" }}
              src={`../icons/phone-call.svg`}
            />
            <div className="ikinci">+90 232 464 23 83</div>
          </IconIcın>
        </HeaderUstA>
        <HeaderUstB>
          <a href="#" onClick={handleDownload}>
            Anında destek programını indir
          </a>
        </HeaderUstB>
      </HeaderUst>

      <HeaderInline isFixed={isHeaderFixed}>
        <StyledImage
          isImage={isImage}
          src={`../icons/logo.svg`}
          alt="Resim Açıklaması"
        />
        <Link to="home" smooth={true} duration={1000}>
          Ana Sayfa
        </Link>
        <Link to="Proje" smooth={true} duration={1000}>
          Proje ve Hizmetlerimiz
        </Link>
        <Link to="haber" smooth={true} duration={1000}>
          Haberler
        </Link>
        <Link to="blue" smooth={true} duration={1000}>
          Referanslarımız
        </Link>
        <Link to="İş" smooth={true} duration={1000}>
          İş Ortaklarımız
        </Link>
        <Link to="iletisim" smooth={true} duration={1000}>
          İletişim
        </Link>{" "}
      </HeaderInline>
    </HeaderDiv>
  );
}
