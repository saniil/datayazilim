import styled from "styled-components";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import { useState } from "react";

const MainContainer = styled.div`
  box-sizing: border-box;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    padding: 20px;
    font-size: 2rem;
    text-align: center;
    color: #333;
  }
`;

const NewsBox = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  background-color: white;
  width: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: black;
  }

  p {
    display: ${({ opened }) => (opened ? "block" : "none")};
    width: 100%;
    text-align: justify;
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Home() {
  const [opened1, setOpened1] = useState(false);
  const handleToggle1 = () => {
    setOpened1(!opened1);
  };

  const [opened2, setOpened2] = useState(false);
  const handleToggle2 = () => {
    setOpened2(!opened2);
  };

  const [opened3, setOpened3] = useState(false);
  const handleToggle3 = () => {
    setOpened3(!opened3);
  };

  const [opened4, setOpened4] = useState(false);
  const handleToggle4 = () => {
    setOpened4(!opened4);
  };

  const [opened5, setOpened5] = useState(false);
  const handleToggle5 = () => {
    setOpened5(!opened5);
  };

  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  function click() {
    toggle();
  }

  return (
    <MainContainer>
      <h1>Haberler</h1>
      <NewsContainer>
        <NewsBox opened={opened1}>
          <h4>Data Yazılım AADS Türkiye Genel Dağıtıcısı Oldu.</h4>
          <p>
            Windows PC'leri Terminal Sunucusuna çeviren bu yazılım sayesinde,
            artık bilgisayarınıza istediğiniz yerden ulaşabilirsiniz.
          </p>
          <Burger opened={opened1} onClick={handleToggle1} aria-label={label} />
        </NewsBox>

        <NewsBox opened={opened2}>
          <h4>Datasoft Seri 2012 Abonelikleri</h4>
          <p>
            Kasım ayı boyunca Datasoft Seri 2012 Abonelikleri 5 taksit ödeme
            avantajıyla. Mevzuat değişikliklerinden etkilenmemek için abonelik
            yenilemenizi hemen yapabilirsiniz.
          </p>
          <Burger opened={opened2} onClick={handleToggle2} aria-label={label} />
        </NewsBox>

        <NewsBox opened={opened3}>
          <h4>Endüstri Mühendisliği Yazılımları ve Uygulamaları Sempozyumu</h4>
          <p>
            Makina Mühendisleri Odası tarafından 30 Eylül - 2 Ekim tarihleri
            arasında Tepekule'de düzenlenmiş olan sempozyumun sponsorlarından
            Model Bilgi İşlem ile birlikte, ERP Uygulamaları konusunda tanıtım
            ve sunumlar gerçkleştirildi...
          </p>
          <Burger opened={opened3} onClick={handleToggle3} aria-label={label} />
        </NewsBox>

        <NewsBox opened={opened4}>
          <h4>
            Data Yazılım, Model Bilgi İşlemin Çözüm Ortağı olarak çalışmaya
            başladı.
          </h4>
          <p>
            ERP konusunda anahtar teslim projeler gerçekleştiren Model Bilgi
            İşlem İzmir'deki çalışmalarını Data Yazılım ile devam ettirecek.
          </p>
          <Burger opened={opened4} onClick={handleToggle4} aria-label={label} />
        </NewsBox>

        <NewsBox opened={opened5}>
          <h4>
            Data Yazılım, Model Bilgi İşlemin Çözüm Ortağı olarak çalışmaya
            başladı.Data Yazılım, Alpha Software Değer Katan Satıcı ünvanını
            aldı.
          </h4>
          <p>
            Hızlı veritabanı programlama aracı olarak öne çıkan Alpha Software,
            Data Yazılım tarafından özel yazılım ihtiyaçlarına çözüm üretmek
            amacıyla kullanılmaya başlandı.
          </p>
          <Burger opened={opened5} onClick={handleToggle5} aria-label={label} />
        </NewsBox>
      </NewsContainer>
    </MainContainer>
  );
}
