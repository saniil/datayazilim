import styled from "styled-components";
import { Text, Paper, Image } from "@mantine/core";

const Ana = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background-color: gray;
`;
const Info = styled.div`
  font-family: "Bree Serif", serif;
  font-size: 20px;
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
  padding: 120px;
  padding-bottom: 0px;
`;
const Hizmetler = styled.div`
  margin: auto;
  max-width: 1500px;
`;
const Dortlu = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Kutu = styled.div`
  width: 400px;
  background-color: rgba(0, 0, 66, 1);
  border-radius: 10px;
`;
const KutuB = styled.div`
  width: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 80px;
`;
const Yazı = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul {
    padding: 0; /* Liste içi dolgu sıfırlandı */
    margin: 0;
    display: grid;
    gap: 20px;
    padding: 50px;
  }
  li {
    margin-bottom: 10px;
  }
`;

export default function Home() {
  return (
    <Ana>
      <Head>
        <img style={{ width: "30vw" }} src={`../icons/logo.svg`}></img>

        <Info>
          Data Yazılım, yılların bilgi birikimini sizlerden gelen taleplerle
          eşleştirerek, ihtiyaca doğrudan çözüm üretmeyi hedeflemektedir.
        </Info>
      </Head>
      <Hizmetler>
        <h2 style={{ textAlign: "center" }}>Özel Yazılım Hizmetleri</h2>
        <Paper radius="xl" shadow="xl" p="xl">
          <Text>
            Günümüzün değişen ve gelişen ihtiyaçları nedeniyle, mevcut paket
            programlar istekleri tam olarak karşılayamamakta, bazen ilave
            raporlar, bazen de tamamen özelleştirilmiş programlar talep
            edilmektedir. Data Yazılım, 25 yılı aşkın mühendislik, analiz ve
            yazılım tecrübesiyle her türlü yazılım ihtiyacınıza teknolojiye
            uygun çözümler sunmaktadır. Gerçekleştirdiğimiz projelerden
            bazıları:
          </Text>
        </Paper>
        <Dortlu>
          <KutuB>
            <img
              style={{ width: "152px", height: "155px" }}
              src={`../icons/budget.png`}
            ></img>
          </KutuB>
          <Kutu>
            <Yazı>
              <ul className="sa">
                <li>Datasoft özel raporlama sistemi</li>
                <li>Süt Toplama ve mutabakat takibi</li>
                <li>Özel Faturalama sistemi</li>
                <li>Asansör bakım takip sistemi</li>
                <li>Üye bilgi sistemi</li>
              </ul>
            </Yazı>
          </Kutu>
          <KutuB>
            <img
              style={{ width: "152px", height: "155px" }}
              src={`../icons/document.png`}
            ></img>
          </KutuB>
          <Kutu>
            <Yazı>
              <ul className="sa">
                <li>Yazarkasa/POS-Datasoft entegrasyonu</li>
                <li>Depo takibi ve datasoft entegrasyonu</li>
                <li>Netsis-Datasoft entegrasyonu</li>
                <li>Konteyner depolama takip sistemi</li>
                <li>Cari Hesap takip sistemi</li>
              </ul>
            </Yazı>
          </Kutu>
        </Dortlu>
      </Hizmetler>
    </Ana>
  );
}
