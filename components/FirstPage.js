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
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: calc(80vh - 60px);
`;
export default function Home() {
  return (
    <Ana>
      <Head id="home">
        <img style={{ width: "50vw" }} src={`../icons/logo.svg`}></img>

        <Info>
          Data Yazılım, yılların bilgi birikimini sizlerden gelen taleplerle
          eşleştirerek, ihtiyaca doğrudan çözüm üretmeyi hedeflemektedir.
        </Info>
      </Head>
    </Ana>
  );
}
