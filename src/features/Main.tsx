import Header from "./Header";
import Cases from "./Cases/Cases";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { blue } from "../colors";
import QuestionForm from "./QuestionForm/QuestionForm";
import Clients from "./Clients";

const Main = () => {
  return (
    <>
      <ScrollToTop smooth color={blue} />
      <Header />
      <Cases />
      <Clients />
      <QuestionForm />
      <Footer />
    </>
  );
};

export default Main;
