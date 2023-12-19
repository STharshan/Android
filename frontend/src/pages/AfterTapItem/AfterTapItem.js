import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import Product from "../../components/AllProduct/Product/Product";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./AfterTapItem.css";
import Footer from "../../components/Footer/footer";

const AfterTapItem = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onVisitStoreTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/home-rent-machines-other");
  }, [navigate]);

  return (
    <div className="after-tap-item">
      <ProfileSection
        profileImageUrl="/rectangle-624@2x.png"
        actionButtonText="Visit Store"
        iconParkrightLeft="289px"
        iconParkrightWidth="81px"
        viewProfileLeft="65px"
        propCursor="pointer"
        onVisitStoreTextClick={onVisitStoreTextClick}
      />
      <div className="pharrow-left-bold-container">
        <img
          className="pharrow-left-bold-icon3"
          alt=""
          src="/pharrowleftbold.svg"
          onClick={onPharrowLeftBoldIconClick}
        />
        <div className="item-name-here1">Item Name here</div>
      </div>
      <div className="rs-00001">Rs. 00.00</div>
      <div className="after-tap-item-inner">
        <div className="vector-parent2">
          <img className="vector-icon8" alt="" src="/vector4.svg" />
          <div className="div4">011 7460875</div>
        </div>
      </div>
      <div className="lorem-ipsum-dolor2">
        Lorem ipsum dolor sit amet consectetur. Scelerisque auctor tellus est
        varius nunc ullamcorper arcu nibh orci. Elementum turpis ut est turpis
        turpis quam consequat. Ornare tristique ultrices mauris neque pulvinar
        in nisl. At sed laoreet nullam malesuada phasellus. Faucibus varius
        augue pretium ut in integer pharetra. Quam enim sodales ligula nulla
        amet duis pellentesque semper. Purus accumsan vulputate in sapien mattis
        sem. Non tempus proin ultrices sit faucibus quis et diam. Sit lorem
        mattis arcu ornare quis. Ac tincidunt aliquam bibendum nunc ipsum nibh
        et. Eu ipsum consequat proin diam sit arcu sit cursus eget. Suspendisse.
      </div>
      <div className="related-items">Related Items</div>
      <Product propTop="931px" propLeft="20px" />
      <Product propTop="1177px" propLeft="20px" />
      <Product propTop="931px" propLeft="225px" />
      <Product propTop="1177px" propLeft="225px" />
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="1410px"
        titleHome="var(--color-goldenrod)"
      />
    </div>
  );
};

export default AfterTapItem;
