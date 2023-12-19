import SectionAllItems1 from "../../components/SectionItem1/SectionAllItems1";
import Product from "../../components/AllProduct/Product/Product";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./HomeRentMachinesOther.css";
import Footer from "../../components/Footer/footer";

const HomeRentMachinesOther = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  return (
    <div className="home-rent-machines-other">
      <div className="rectangle-parent56">
        <div className="rectangle3" />
        <div className="frame-child39" />
        <SectionAllItems1 />
        <Product propTop="375px" propLeft="20px" />
        <Product propTop="621px" propLeft="20px" />
        <Product propTop="375px" propLeft="225px" />
        <Product propTop="621px" propLeft="225px" />
      </div>
      <div className="rent-machines-other-parent">
        <div className="rent-machines">{` / Rent Machines / Other `}</div>
        <img
          className="material-symbolshome-outline-icon5"
          alt=""
          src="/materialsymbolshomeoutline.svg"
        />
      </div>
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        titleHome="var(--color-goldenrod)"
      />
    
    </div>
  );
};

export default HomeRentMachinesOther;
