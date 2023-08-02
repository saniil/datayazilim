import styled from "styled-components";

const Ana = styled.div`
  box-sizing: border-box;
  height: 80vh;
  background-color: tomato;
`;
const Hizmetler = styled.div`
  padding-left: 20em;
  padding-right: 20em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Büyük = styled.div`
  display: flex;
`;

const Yazı = styled.div`
  width: 200em;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const Açıklama = styled.div`
  width: 500em;
`;

export default function Home() {
  return (
    <Ana id="Proje">
      <h1 style={{ paddingTop: "1em", margin: "auto", textAlign: "center" }}>
        Proje ve Hizmetlerimiz
      </h1>
      <Hizmetler>
        <Büyük>
          <Yazı>İnternet Hizmetleri</Yazı>
          <Açıklama>
            İnternet artık olmazsa olmazımız. Siz de şirketinizin internette
            doğru bir şekilde tanıtılmasını istiyorsanız bize başvurabilirsiniz.
            Anahtar teslim çözümlerimizle, güvenilir ve kalıcı hizmet için Data
            Yazılım en iyi adrestir. Profesyonel, sürekli güncellenen ve
            yenilenen kontrol panelli web sitenizi isterseniz kendiniz,
            isterseniz biz yönetebiliriz. İnternet üzerinden ticaret yapmak
            istiyorsanız, e-ticaret uygulamamız tam aradığınız çözüm olacaktır.
            Uygun fiyatlı, teknik altyapısı güçlü, denenmiş e-ticaret çözümü
            için bizi arayın...
          </Açıklama>
        </Büyük>
        <Büyük>
          <Yazı>Enterprise Model ERP</Yazı>
          <Açıklama>
            Enterprise Model ERP, ETO (Engineer-To-Order) odaklı, açık kaynak
            kodlu, birçok sektörün ortak aklını temsil eden hazır
            fonksiyonların, işletmeye özel uyarlandığı, geliştirildiği ve
            entegre edildiği bir ERP yazılımıdır. Firma ihtiyaçlarına göre
            tamamen özelleştirilebilen Enterprise Model’ın kısa uyarlama süresi,
            büyük maliyet avantajı ve denenmiş detaylı fonksiyonları ile geniş
            programcı ve danışman kadrolarına ihtiyacı ortadan kaldırır. Entegre
            yapısı ve kurumsal uygulamaların tüm detaylarında gerçek maliyetleri
            takip etmek, işletme ile ilgili gerçekçi analiz yapabilmek, değişen
            piyasa koşullarına süratli uyum sağlamak, tüm operasyonlarda kontrol
            ve denetim sahibi olmak, Enterprise Model ERP çözümü ile çok
            kolaydır.
          </Açıklama>
        </Büyük>
        <Büyük>
          <Yazı>AADS Terminal Sunucusu</Yazı>
          <Açıklama>
            AADS, Windows XP Pro SP2, Windows Vista Business, Windows 7
            Professional, Windows 8 yüklü bilgisayarlarınızı Terminal Server'a
            dönüştürerek dilediğiniz yerden erişebilmenizi sağlar. Günümüzde
            bilginin anında erişilebilir olması son derece önem kazanmıştır.
            Gittiğiniz her yerden bilgisayarınıza erişerek ihtiyacınız olan
            bilgiye anında ulaşabilmeniz için artık pahalı yatırımlara
            ihtiyacınız kalmadı. AADS ile bilgisayarınızı her yerden
            ulaşabileceğiniz bir Terminal Sunucusuna dönüştürebilirsiniz.
          </Açıklama>
        </Büyük>
        <Büyük>
          <Yazı>Datasoft Ticari Paket Programları</Yazı>
          <Açıklama>
            1989 yılında İstanbul'da kurulan datasoft Küçük ve Orta Ölçekli
            İşletmeler için Ticari Entegre yazılımları ile Muhasebe Büroları
            için sektörel yazılımlar üretmektedir. 1991 yılından beri
            sürdürdüğümüz datasoft'un Ege Bölge Dağıtıcılığı'nı, 1998 yılında
            kurduğumuz Data Yazılım'a taşıyarak, tamamen bu ürüne odaklandık.
            Halen gerek Ege Bölgesinde, gerekse Türkiye genelinde destek ve
            servis hizmeti verdiğimiz 1500'e yakın datasoft kullanıcısı
            mevcuttur.
          </Açıklama>
        </Büyük>
      </Hizmetler>
    </Ana>
  );
}
