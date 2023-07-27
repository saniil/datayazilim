import styled from "styled-components";
import Button from "./Button";

const HeaderDiv = styled.div`
  background-color: #000;
`;
const HeaderInline = styled.div`
  max-width: 800px;
  padding: 30px;
  display: flex;
  gap: 20px;
  margin: auto;
`;
const HeaderUst = styled.div`
  background-color: black;
  color: white;
  display: flex;
  margin: auto;
  max-width: 1400px;
  min-width: 500px;
  justify-content: space-between;
`;
const HeaderUstA = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 10px;
  margin-left: 50px;
  gap: 20px;
`;
const HeaderUstB = styled.div`
  display: flex;
  margin-top: 20px;
`;

export default () => (
  <HeaderDiv>
    <HeaderUst>
      <HeaderUstA>
        <div className="birinci">Karabağlar/İzmir</div>
        <div className="ikinci">bilgi@datayazilim.com.tr</div>
        <div className="ikinci">+90 232 464 23 83</div>
      </HeaderUstA>
      <HeaderUstB>
        <div>face</div>
        <div>TW</div>
      </HeaderUstB>
    </HeaderUst>
    <HeaderInline>
      <Button href={"/"}>Ana Sayfa</Button>
      <Button href={"/about"}>Ürünler</Button>
      <Button href={"/blog"}>Hizmetler</Button>
      <Button href={"/contact"}>Referanslar</Button>
      <Button href={"/movies"}>Filmler</Button>
    </HeaderInline>
  </HeaderDiv>
);
