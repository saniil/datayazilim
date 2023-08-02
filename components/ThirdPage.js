import styled from "styled-components";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import { useState } from "react";
const Ana = styled.div`
  box-sizing: border-box;
  height: 50vh;
  background-color: tomato;
  h1 {
    margin: 0;
    padding: 30px;
    text-align: center;
  }
`;
const Kutu = styled.div`
  padding: 10px;
  border: 1px solid blue;
  background-color: white;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    width: 250px;
  }
  h4 {
    width: 250px;
  }
`;

const Hizala = styled.div`
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
    <Ana>
      <h1>Haberler</h1>
      <Hizala>
        <Kutu>
          <h4>Data Yazılım AADS Türkiye Genel Dağıtıcısı oldu.</h4>
          <p style={{ display: opened1 ? "block" : "none" }}>
            Windows PC'leri Terminal Sunucusuna çeviren bu yazılım sayesinde,
            artık bilgisayarınıza istediğiniz yerden ulaşabilirsiniz.
          </p>
          <Burger opened={opened1} onClick={handleToggle1} aria-label={label} />
        </Kutu>
        <Kutu>
          <h4>Datasoft Seri 2012 Abonelikleri</h4>
          <p style={{ display: opened2 ? "block" : "none" }}>
            Kasım ayı boyunca Datasoft Seri 2012 Abonelikleri 5 taksit ödeme
            avantajıyla. Mevzuat değişikliklerinden etkilenmemek için abonelik
            yenilemenizi hemen yapabilirsiniz.
          </p>
          <Burger opened={opened2} onClick={handleToggle2} aria-label={label} />
        </Kutu>
        <Kutu>
          <h4>Endüstri Mühendisliği Yazılımları ve Uygulamaları Sempozyumu</h4>
          <p style={{ display: opened3 ? "block" : "none" }}>
            Makina Mühendisleri Odası tarafından 30 Eylül - 2 Ekim tarihleri
            arasında Tepekule'de düzenlenmiş olan sempozyumun sponsorlarından
            Model Bilgi İşlem ile birlikte, ERP Uygulamaları konusunda tanıtım
            ve sunumlar gerçkleştirildi...
          </p>
          <Burger opened={opened3} onClick={handleToggle3} aria-label={label} />
        </Kutu>
        <Kutu>
          <h4>
            Data Yazılım, Model Bilgi İşlemin Çözüm Ortağı olarak çalışmaya
            başladı.
          </h4>
          <p style={{ display: opened4 ? "block" : "none" }}>
            ERP konusunda anahtar teslim projeler gerçekleştiren Model Bilgi
            İşlem İzmir'deki çalışmalarını Data Yazılım ile devam ettirecek.
          </p>
          <Burger opened={opened4} onClick={handleToggle4} aria-label={label} />
        </Kutu>
        <Kutu>
          <h4>
            Data Yazılım, Model Bilgi İşlemin Çözüm Ortağı olarak çalışmaya
            başladı.Data Yazılım, Alpha Software Değer Katan Satıcı ünvanını
            aldı.
          </h4>
          <p style={{ display: opened5 ? "block" : "none" }}>
            Hızlı veritabanı programlama aracı olarak öne çıkan Alpha Software,
            Data Yazılım tarafından özel yazılım ihtiyaçlarına çözüm üretmek
            amacıyla kullanılmaya başlandı.
          </p>
          <Burger opened={opened5} onClick={handleToggle5} aria-label={label} />
        </Kutu>
      </Hizala>
    </Ana>
  );
}
