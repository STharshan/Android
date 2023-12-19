import { useCallback } from "react";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../../components/FrameComponent/FrameComponent";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./InternationalContractors.css";
import Footer from "../../components/Footer/footer";

const InternationalContractors = () => {

  const home = "vector";
  const international = "icon-park-outline_international";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/international-contractors");
  }, [navigate]);

  return (
    <div className="international-contractors">
      <ProfileSection
        profileImageUrl="/rectangle-623@2x.png"
        actionButtonText="View Profile"
      />
      <div className="pharrow-left-bold-parent">
        <img
          className="pharrow-left-bold-icon1"
          alt=""
          src="/pharrowleftbold.svg"
          onClick={onPharrowLeftBoldIconClick}
        />
        <div className="contractors-name-here">Contractor’s Name here</div>
      </div>
      <div className="roof-design1">Roof Design</div>
      <div className="international-contractors-inner">
        <div className="vector-container">
          <img className="vector-icon4" alt="" src="/vector4.svg" />
          <div className="div2">011 7460875</div>
        </div>
      </div>
      <div className="lorem-ipsum-dolor">
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
      <div className="our-projects">Our projects</div>
      <img
        className="international-contractors-child"
        alt=""
        src="/rectangle-84@2x.png"
      />
      <img
        className="international-contractors-item"
        alt=""
        src="/rectangle-82@2x.png"
      />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="1362px"
        frameDivLeft="43px"
        frameDivWidth="280px"
      />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="1894px"
        frameDivLeft="43px"
        frameDivWidth="280px"
      />
      <img
        className="emojione-v1flag-for-canada-icon"
        alt=""
        src="/emojionev1flagforcanada.svg"
      />
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="1980px"
        titleInternational="var(--color-goldenrod)"
      />
    </div>
  );
};

export default InternationalContractors;
