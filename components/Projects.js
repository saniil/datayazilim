import React from "react";
import styled from "styled-components";

const Ana = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120vh;
  background-color: #f2f2f2;
`;

const Baslik = styled.h1`
  font-size: 2rem;
  margin: 1em 0;
  color: #333;
`;

const Hizmetler = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const Hizmet = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 1em 0;
`;

const Icon = styled.div`
  font-size: 2rem;
  color: tomato;
`;

const Metin = styled.div`
  flex: 1;
  padding: 0 1em;
`;

export default function Home() {
  return (
    <Ana id="Proje">
      <Baslik>Proje ve Hizmetlerimiz</Baslik>
      <Hizmetler>
        <Hizmet>
          <Icon>🌐</Icon>
          <Metin>
            <h2>İnternet Hizmetleri</h2>
            <p>
              İnternet artık olmazsa olmazımız. Siz de şirketinizin internette
              doğru bir şekilde tanıtılmasını istiyorsanız bize
              başvurabilirsiniz. Anahtar teslim çözümlerimizle, güvenilir ve
              kalıcı hizmet için Data Yazılım en iyi adrestir. Profesyonel,
              sürekli güncellenen ve yenilenen kontrol panelli web sitenizi
              isterseniz kendiniz, isterseniz biz yönetebiliriz. İnternet
              üzerinden ticaret yapmak istiyorsanız, e-ticaret uygulamamız tam
              aradığınız çözüm olacaktır. Uygun fiyatlı, teknik altyapısı güçlü,
              denenmiş e-ticaret çözümü için bizi arayın...
            </p>
          </Metin>
        </Hizmet>
        <Hizmet>
          <Icon>📊</Icon>
          <Metin>
            <h2>Enterprise Model ERP</h2>
            <p>
              Enterprise Model ERP, ETO (Engineer-To-Order) odaklı, açık kaynak
              kodlu, birçok sektörün ortak aklını temsil eden hazır
              fonksiyonların, işletmeye özel uyarlandığı, geliştirildiği ve
              entegre edildiği bir ERP yazılımıdır. Firma ihtiyaçlarına göre
              tamamen özelleştirilebilen Enterprise Model’ın kısa uyarlama
              süresi, büyük maliyet avantajı ve denenmiş detaylı fonksiyonları
              ile geniş programcı ve danışman kadrolarına ihtiyacı ortadan
              kaldırır. Entegre yapısı ve kurumsal uygulamaların tüm
              detaylarında gerçek maliyetleri takip etmek, işletme ile ilgili
              gerçekçi analiz yapabilmek, değişen piyasa koşullarına süratli
              uyum sağlamak, tüm operasyonlarda kontrol ve denetim sahibi olmak,
              Enterprise Model ERP çözümü ile çok kolaydır.
            </p>
          </Metin>
        </Hizmet>
        <Hizmet>
          <Icon>🖥️</Icon>
          <Metin>
            <h2>AADS Terminal Sunucusu</h2>
            <p>
              AADS, Windows XP Pro SP2, Windows Vista Business, Windows 7
              Professional, Windows 8 yüklü bilgisayarlarınızı Terminal Server'a
              dönüştürerek dilediğiniz yerden erişebilmenizi sağlar. Günümüzde
              bilginin anında erişilebilir olması son derece önem kazanmıştır.
              Gittiğiniz her yerden bilgisayarınıza erişerek ihtiyacınız olan
              bilgiye anında ulaşabilmeniz için artık pahalı yatırımlara
              ihtiyacınız kalmadı. AADS ile bilgisayarınızı her yerden
              ulaşabileceğiniz bir Terminal Sunucusuna dönüştürebilirsiniz.
            </p>
          </Metin>
        </Hizmet>
        <Hizmet>
          <Icon>💼</Icon>
          <Metin>
            <h2>Datasoft Ticari Paket Programları</h2>
            <p>
              1989 yılında İstanbul'da kurulan datasoft Küçük ve Orta Ölçekli
              İşletmeler için Ticari Entegre yazılımları ile Muhasebe Büroları
              için sektörel yazılımlar üretmektedir. 1991 yılından beri
              sürdürdüğümüz datasoft'un Ege Bölge Dağıtıcılığı'nı, 1998 yılında
              kurduğumuz Data Yazılım'a taşıyarak, tamamen bu ürüne odaklandık.
              Halen gerek Ege Bölgesinde, gerekse Türkiye genelinde destek ve
              servis hizmeti verdiğimiz 1500'e yakın datasoft kullanıcısı
              mevcuttur.
            </p>
          </Metin>
        </Hizmet>
      </Hizmetler>
    </Ana>
  );
}
