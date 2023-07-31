import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
  color: blue;
  margin: 0;
  font-family: sans-serif;
  a {
    text-decoration: none;
    & :hover {
    color: rgba(255, 255, 255, 0.5);
  }
   
  }
}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
