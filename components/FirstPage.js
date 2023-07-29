import styled from "styled-components";

const Ana = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background-color: gray;
`;
const Info = styled.div`
  font-family: "Bree Serif", serif;
  font-size: 40px;
  color: black;
  width: 50vw;
  text-align: center;
  padding: 20px;
  @media (max-width: 1000px) {
    font-size: 20px;
    background-color: lightblue;
  }
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 200px;
  height: calc(100vh - 90vh);
`;
export default function Home() {
  return (
    <Ana>
      <Head>
        <img style={{ width: "50vw" }} src={`../icons/logo.svg`}></img>

        <Info>
          Data Yazılım, yılların bilgi birikimini sizlerden gelen taleplerle
          eşleştirerek, ihtiyaca doğrudan çözüm üretmeyi hedeflemektedir.
        </Info>
      </Head>
      <div>
        <div>
          <h2>Özel Yazılım Hizmetleri</h2>
          <h4>
            Günümüzün değişen ve gelişen ihtiyaçları nedeniyle, mevcut paket
            programlar istekleri tam olarak karşılayamamakta, bazen ilave
            raporlar, bazen de tamamen özelleştirilmiş programlar talep
            edilmektedir. Data Yazılım, 25 yılı aşkın mühendislik, analiz ve
            yazılım tecrübesiyle her türlü yazılım ihtiyacınıza teknolojiye
            uygun çözümler sunmaktadır. Gerçekleştirdiğimiz projelerden
            bazıları:
          </h4>
        </div>
        <div></div>
      </div>
    </Ana>
  );
}
