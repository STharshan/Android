import { useCallback } from "react";
import SectionCard3 from "../../components/Card/SectionCard2/SectionCard2";
import Product from "../../components/AllProduct/Product/Product";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./Shop.css";
import Footer from "../../components/Footer/footer";

const Shop = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/after-tap-item");
  }, [navigate]);

  return (
    <div className="shop">
      <div className="group-parent">
        <SectionCard3 />
        <Product propTop="410px" propLeft="20px" />
        <Product propTop="656px" propLeft="20px" />
        <Product propTop="410px" propLeft="225px" />
        <Product propTop="656px" propLeft="225px" />
      </div>
      <div className="pharrow-left-bold-parent1">
        <img
          className="pharrow-left-bold-icon4"
          alt=""
          src="/pharrowleftbold.svg"
          onClick={onPharrowLeftBoldIconClick}
        />
        <div className="shop-name-here">Shop Name here</div>
      </div>
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="997px"
        titleHome="var(--color-goldenrod)"
      />
    </div>
  );
};

export default Shop;
