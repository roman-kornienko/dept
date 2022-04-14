import Header from "./Header";
import Cases from "./Cases/Cases";
import Footer from "./Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { blue } from "../colors";

const Main = () => {
  return (
    <>
      <ScrollToTop smooth color={blue} />
      <Header />
      <Cases />
      <Footer />
    </>
  );
};

export default Main;
