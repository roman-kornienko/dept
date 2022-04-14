import Header from "./Header";
import Cases from "./Cases/Cases";
import Footer from "./Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { blue } from "../colors";
import QuestionForm from "./QuestionForm/QuestionForm";

const Main = () => {
  return (
    <>
      <ScrollToTop smooth color={blue} />
      <Header />
      <Cases />
      <QuestionForm />
      <Footer />
    </>
  );
};

export default Main;
