import styled from "styled-components";

const Ana = styled.div`
  box-sizing: border-box;
  background-color: green;
  margin: auto;
  height: 50vh;
`;
const H1 = styled.div`
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  font-size: 30px;
`;

const Konum = styled.div`
  display: flex;
  justify-content: center;
`;
const Baslık = styled.div``;
const Yazı = styled.div``;
const Kutu = styled.div`
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 3px;
  margin-left: 1px;

  div {
    padding: 5px;
    box-sizing: border-box;
    font-size: 17px;
  }
`;
export default function Home() {
  return (
    <Ana id="iletisim">
      <H1>İletişim</H1>
      <Konum>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.9737722750865!2d27.065108576391125!3d38.39585547614056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdc109f33cbcd%3A0xbb8bef226c8727db!2sData%20Yaz%C4%B1l%C4%B1m%20Bilgisayar%20Hizmetleri!5e0!3m2!1str!2str!4v1690968619955!5m2!1str!2str"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Kutu>
          <div>
            <Baslık>Adres</Baslık>
            <Yazı>65/18 Sk. No:9/A Üçkuyular - İZMİR</Yazı>
          </div>
          <div>
            <Baslık>E-Posta</Baslık>
            <Yazı>bilgi@datayazilim.com.tr</Yazı>
          </div>
          <div>
            <Baslık>Telefon</Baslık>
            <Yazı>+90 232 464 23 83</Yazı>
          </div>
          <div>
            <Baslık>Faks</Baslık>
            <Yazı>+90 232 463 18 75</Yazı>
          </div>
        </Kutu>
      </Konum>
    </Ana>
  );
}
