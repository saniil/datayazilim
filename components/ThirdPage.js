import styled from "styled-components";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
const Ana = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background-color: tomato;
`;
const Kutu = styled.div`
  padding: 10px;
  border: 1px solid blue;
  background-color: white;
  width: fit-content;
`;

export default function Home() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  function click() {
    toggle();
  }
  return (
    <Ana>
      <Kutu>
        <h4>Data Yazılım AADS Türkiye Genel Dağıtıcısı oldu.</h4>
        <p style={{ display: opened ? "block" : "none" }}>
          Windows PC'leri Terminal Sunucusuna çeviren bu yazılım sayesinde,
          artık bilgisayarınıza istediğiniz yerden ulaşabilirsiniz.
        </p>
        <Burger opened={opened} onClick={(toggle, click)} aria-label={label} />
      </Kutu>
    </Ana>
  );
}
