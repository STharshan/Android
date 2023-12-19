import { useCallback } from "react";
import ProfileSection from "../../../components/ProfileSection/ProfileSection";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../../../components/FrameComponent/FrameComponent";
import HeaderIcon from "../../../components/Header/HeaderIcon";
import "./SpecialContractors.css";
import Footer from "../../../components/Footer/footer";

const SpecialContractors1 = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/special-contractors");
  }, [navigate]);


  return (
    <div className="special-contractors">
      <ProfileSection
        profileImageUrl="/rectangle-623@2x.png"
        actionButtonText="View Profile"
        iconParkrightLeft="279px"
        iconParkrightWidth="91px"
        viewProfileLeft="75px"
        propCursor="unset"
      />
      <div className="pharrow-left-bold-group">
        <img
          className="pharrow-left-bold-icon2"
          alt=""
          src="/pharrowleftbold.svg"
          onClick={onPharrowLeftBoldIconClick}
        />
        <div className="contractors-name-here1">Contractor’s Name here</div>
      </div>
      <div className="roof-design2">Roof Design</div>
      <div className="special-contractors-inner">
        <div className="vector-parent1">
          <img className="vector-icon6" alt="" src="/vector4.svg" />
          <div className="div3">011 7460875</div>
        </div>
      </div>
      <div className="lorem-ipsum-dolor1">
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
      <div className="our-projects1">Our projects</div>
      <img
        className="special-contractors-child"
        alt=""
        src="/rectangle-84@2x.png"
      />
      <img
        className="special-contractors-item"
        alt=""
        src="/rectangle-82@2x.png"
      />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="1362px"
        frameDivLeft="45px"
        frameDivWidth="270px"
      />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="1894px"
        frameDivLeft="45px"
        frameDivWidth="270px"
      />
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="1980px"
        titleHome="var(--color-goldenrod)"
      />
    </div>
  );
};

export default SpecialContractors1;
