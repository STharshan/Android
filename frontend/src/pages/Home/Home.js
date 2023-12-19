import SectionAllItems from "../../components/SectionItem/SectionAllItems";
import Product from "../../components/AllProduct/Product/Product";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./Home.css";
import Footer from "../../components/Footer/footer";

const Home = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";



  return (
    <div className="home102">
      <div className="home-inner">
        <div className="group-child111" />
      </div>
      <div className="rectangle-parent85">
        <div className="rectangle4" />
        <SectionAllItems />
        <Product />
        <Product propTop="621px" propLeft="20px" />
        <Product propTop="375px" propLeft="225px" />
        <Product propTop="621px" propLeft="225px" />
      </div>      
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        titleHome="var(--color-goldenrod)"
      />      
      <HeaderIcon />
    </div>
  );
};

export default Home;
