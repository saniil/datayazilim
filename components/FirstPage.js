import styled from "styled-components";
import { Text, Paper } from "@mantine/core";

const Container = styled.div`
  box-sizing: border-box;
  background-color: #f5f8fa; /* Açık mavi tonu */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  padding-bottom: 0px;
  img {
    height: 20vh;
    padding: 0px !important;
  }
`;

const Info = styled(Text)`
  font-family: "Bree Serif", serif;
  font-size: 20px;
  color: #333; /* Koyu gri */
  text-align: center;
  padding: 20px;
`;

const ServiceContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 40px;
  text-align: center;
`;

const ServiceHeader = styled.h2`
  font-size: 28px;
  color: #333; /* Koyu gri */
`;

const ServiceCard = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin: 20px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const ServiceText = styled(Text)`
  margin-top: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <img style={{ width: "200px" }} src="../icons/logo.svg" alt="Logo" />
        <Info>
          Data Yazılım, yılların bilgi birikimini sizlerden gelen taleplerle
          eşleştirerek, ihtiyaca doğrudan çözüm üretmeyi hedeflemektedir.
        </Info>
      </Header>
      <ServiceContainer>
        <ServiceHeader>Özel Yazılım Hizmetleri</ServiceHeader>
        <ServiceCard shadow="lg">
          <Icon src="../icons/budget.png" alt="Budget Icon" />
          <ServiceText>
            Günümüzün ihtiyaçlarına uygun çözümler sunuyoruz. Projelerimizden
            bazıları:
            <ul>
              <li>Datasoft özel raporlama sistemi</li>
              <li>Süt Toplama ve mutabakat takibi</li>
              <li>Özel Faturalama sistemi</li>
              <li>Asansör bakım takip sistemi</li>
              <li>Üye bilgi sistemi</li>
            </ul>
          </ServiceText>
        </ServiceCard>
        <ServiceCard shadow="lg">
          <Icon src="../icons/document.png" alt="Document Icon" />
          <ServiceText>
            Farklı entegrasyonlar ve takip sistemleri ile işlerinizi
            kolaylaştırıyoruz. Örneğin:
            <ul>
              <li>Yazarkasa/POS-Datasoft entegrasyonu</li>
              <li>Depo takibi ve datasoft entegrasyonu</li>
              <li>Netsis-Datasoft entegrasyonu</li>
              <li>Konteyner depolama takip sistemi</li>
              <li id="Proje">Cari Hesap takip sistemi</li>
            </ul>
          </ServiceText>
        </ServiceCard>
      </ServiceContainer>
    </Container>
  );
}
