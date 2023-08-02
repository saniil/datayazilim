import styled from "styled-components";

const Ana = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`;

const Icerik = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
`;

const HaritaKutu = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const BilgiKutular = styled.div`
  display: flex;
  flex-direction: column; /* Display children vertically */
`;

const Kutu = styled.div`
  margin-bottom: 15px;
  border-top: 1px solid #ccc;
  &.sa {
    border-bottom: 1px solid #ccc;
  }
`;

const Baslık = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Yazı = styled.p`
  font-size: 16px;
  color: #555;
`;

export default function Home() {
  return (
    <Ana id="iletisim">
      <Icerik>
        <HaritaKutu>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.9737722750865!2d27.065108576391125!3d38.39585547614056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdc109f33cbcd%3A0xbb8bef226c8727db!2sData%20Yaz%C4%B1l%C4%B1m%20Bilgisayar%20Hizmetleri!5e0!3m2!1str!2str!4v1690968619955!5m2!1str!2str"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Harita"
          ></iframe>
        </HaritaKutu>
        <BilgiKutular>
          <Kutu>
            <Baslık>Adres</Baslık>
            <Yazı>65/18 Sk. No:9/A Üçkuyular - İZMİR</Yazı>
          </Kutu>
          <Kutu>
            <Baslık>Telefon</Baslık>
            <Yazı>+90 232 464 23 83</Yazı>
          </Kutu>
          <Kutu>
            <Baslık>Faks</Baslık>
            <Yazı>+90 232 463 18 75</Yazı>
          </Kutu>
          <Kutu className="sa">
            <Baslık>E-Posta</Baslık>
            <Yazı>bilgi@datayazilim.com.tr</Yazı>
          </Kutu>
        </BilgiKutular>
      </Icerik>
    </Ana>
  );
}
