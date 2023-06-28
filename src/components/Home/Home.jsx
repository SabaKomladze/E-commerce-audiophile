import "./Home.css";
import FirstComp from "../../components/FirstComp/FirstComp";
import Category from "../category/Category";
import Adv from "../adv/Adv";
import Bring from "../bring/Bringing";
import Footer from "../folder/Footer";
function Home() {
  return (
    <div>
      <FirstComp />
      <Category />
      <Adv />
      <Bring />
      <Footer />
    </div>
  );
}
export default Home;
