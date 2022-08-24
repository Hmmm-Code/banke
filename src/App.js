import "./App.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <Content />
      <Footer />
    </>
  );
}

export default App;
