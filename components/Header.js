import styled from "styled-components";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const HeaderDiv = styled.div`
  background-color: #ffff;
`;
//
const HeaderInline = styled.div`
  /* Normal header stilini burada belirleyin */
  background-color: #1b4d89;
  padding: ${(props) => (props.isFixed ? "30px" : "50px")};
  top: ${(props) => (props.isFixed ? "0" : "")};
  display: flex;
  gap: 50px;
  justify-content: center;
  z-index: 100;
  color: white;
  left: 0;
  width: 100%;
  transition: all 0.3s;
  box-sizing: border-box;
  position: fixed;
  @media (max-width: 600px) {
    justify-content: flex-start;
    gap: 20px;
    background-color: lightblue;
  }

  //   gap: 50px;
  //   justify-content: flex-end;
  //   position: fixed;
  //
`;
const StyledImage = styled.img`
  /* İstediğiniz stil tanımlarını burada yapabilirsiniz */
  display: ${(props) => (props.isImage ? "flex" : "none")};
  position: relative;
  width: 100px;
  border-radius: 50%;
`;
const HeaderUst = styled.div`
  max-width: 1400px;
  min-width: 500px;
  color: black;
  display: flex;
  margin: auto;

  justify-content: space-between;
`;
const HeaderUstA = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 10px;
  margin-left: 20px;
  gap: 20px;
`;
const HeaderUstB = styled.div`
  margin: 5px;
  padding: 5px;
  border: 2px solid #1b4d89;
`;
const IconIcın = styled.div`
  display: flex;
`;

export default function Header() {
  // ss
  // Header display fixed için
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      // Sayfanın 100 piksel altından itibaren sabit kalsın
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };
  const [isImage, setImage] = useState(false);

  const handleImage = () => {
    if (window.pageYOffset > 200) {
      setImage(true);
    } else {
      setImage(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleImage);
    return () => {
      window.removeEventListener("scroll", handleImage);
    };
  }, []);
  // ss
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
  //ss
  return (
    <HeaderDiv>
      <HeaderUst>
        <HeaderUstA>
          <IconIcın>
            <img
              style={{ width: "20px", height: "15px" }}
              src={`../icons/current-location.svg`}
            ></img>
            <div className="birinci">Karabağlar/İzmir</div>
          </IconIcın>
          <IconIcın>
            <img
              style={{ width: "20px", height: "15px" }}
              src={`../icons/mail.svg`}
            ></img>
            <div className="ikinci">bilgi@datayazilim.com.tr</div>
          </IconIcın>

          <IconIcın>
            <img
              style={{ width: "20px", height: "15px" }}
              src={`../icons/phone-call.svg`}
            ></img>
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
        <Link to="iletisim" smooth={true} duration={1000}>
          İletişim
        </Link>{" "}
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
      </HeaderInline>
    </HeaderDiv>
  );
}
