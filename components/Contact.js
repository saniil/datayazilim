import styled from "styled-components";

const Ana = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background-color: green;
`;
const Baslık = styled.div`
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
`;

export default function Home() {
  return (
    <Ana id="iletisim">
      <Baslık>asddddddddddddddddddddddddddd</Baslık>
    </Ana>
  );
}
