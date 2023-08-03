import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: #1b4d89;
  color: white;
  padding: 20px 0;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyrightText = styled.p`
  margin: 0;
  text-align: center;
`;

const Logo = styled.img`
  width: 300px;
  height: 30px;
  margin-right: 10px;
`;

const Yazılar = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

export default function Home() {
  return (
    <div>
      <Footer>
        <FooterInner>
          <Logo src="../icons/logo.svg" alt="Logo" />

          <Yazılar>
            <CopyrightText>&copy; 2023 All Rights Reserved</CopyrightText>
            <div>Egebis Bilgi İşlem Çözümleri Tekn. Ltd. Şti</div>
          </Yazılar>
        </FooterInner>
      </Footer>
    </div>
  );
}
