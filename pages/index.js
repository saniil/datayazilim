import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import ThirdPage from "../components/ThirdPage";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div id="home">
      <Header></Header>
      <FirstPage></FirstPage>
      <Projects></Projects>
      <ThirdPage></ThirdPage>

      <SecondPage></SecondPage>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
