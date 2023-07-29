import styled from "styled-components";
import Button from "./Button";

const HeaderDiv = styled.div`
  background-color: gray;
`;
const HeaderInline = styled.div`
  max-width: 1400px;
  min-width: 500px;
  padding: 20px;
  display: flex;
  gap: 50px;
  justify-content: flex-end;
`;
const HeaderUst = styled.div`
  max-width: 1400px;
  min-width: 500px;
  color: black;
  display: flex;
  margin: auto;

  justify-content: space-between;
`;
const HeaderUstA = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 10px;
  margin-left: 20px;
  gap: 20px;
`;
const HeaderUstB = styled.div`
  display: flex;
  margin-top: 20px;
`;
const IconIcın = styled.div`
  display: flex;
`;

export default () => (
  <HeaderDiv>
    <HeaderUst>
      <HeaderUstA>
        <IconIcın>
          <img
            style={{ width: "20px", height: "15px" }}
            src={`../icons/current-location.svg`}
          ></img>
          <div className="birinci">Karabağlar/İzmir</div>
        </IconIcın>
        <IconIcın>
          <img
            style={{ width: "20px", height: "15px" }}
            src={`../icons/mail.svg`}
          ></img>
          <div className="ikinci">bilgi@datayazilim.com.tr</div>
        </IconIcın>

        <IconIcın>
          <img
            style={{ width: "20px", height: "15px" }}
            src={`../icons/phone-call.svg`}
          ></img>
          <div className="ikinci">+90 232 464 23 83</div>
        </IconIcın>
      </HeaderUstA>
      <HeaderUstB></HeaderUstB>
    </HeaderUst>
    <HeaderInline>
      <Button href={"#home"}>Ana Sayfa</Button>
      <Button href={"/about"}>Ürünler</Button>
      <Button href={"/blog"}>Hizmetler</Button>
      <Button href={"/contact"}>Referanslar</Button>
      <Button href={"#blue"}>Filmler</Button>
    </HeaderInline>
  </HeaderDiv>
);
