import Header from "../components/Header";
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import ThirdPage from "../components/ThirdPage";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
    </div>
  );
}
