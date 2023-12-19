import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInformationSection1 from "../../components/PersonalInfo/PersonalInformationSection1";
import SectionCard1 from "../../components/Card/SectionCard1/SectionCard1";
import HelpSection from "../../components/HelpSection/HelpSection";
import AdvertisementForm from "../../components/AdvertisementForm/AdvertisementForm";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./Profile.css";
import Footer from "../../components/Footer/footer";

const Profile = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/persional-information");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/your-shop");
  }, [navigate]);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/your-job-vacancies");
  }, [navigate]);

  const onGroupContainer16Click = useCallback(() => {
    navigate("/help");
  }, [navigate]);

  const onGroupContainer17Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onGroupContainer25Click = useCallback(() => {
    navigate("/request-advertisement");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/activated-package");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/your-course");
  }, [navigate]);

  const onGroupContainer21Click = useCallback(() => {
    navigate("/hire-me");
  }, [navigate]);

  return (
    <div className="profile">
      <div className="group-parent5">
        <PersonalInformationSection1
          groupIconHeight="10.64%"
          groupIconBottom="89.36%"
          groupIconCursor="pointer"
          onGroupContainerClick={onGroupContainerClick}
        />
        <div className="group-parent6" onClick={onGroupContainer4Click}>
          <div className="rectangle-parent48">
            <div className="group-child58" />
            <img
              className="mingcutedown-fill-icon4"
              alt=""
              src="/mingcutedownfill1.svg"
            />
            <div className="activated-packages1">Activated Packages</div>
          </div>
          <div className="group-wrapper1">
            <div className="rectangle-wrapper1">
              <div className="group-child59" />
            </div>
          </div>
          <img
            className="material-symbolspackage-outli-icon1"
            alt=""
            src="/materialsymbolspackageoutline.svg"
          />
        </div>
        <SectionCard1
          pageTitle="Your shop"
          iconImageUrl="/mdishopoutline.svg"
          onGroupContainer7Click={onGroupContainer7Click}
        />
        <SectionCard1
          pageTitle="Your Job vacancies"
          iconImageUrl="/mdiusersearchoutline3.svg"
          propTop="38.3%"
          propBottom="51.06%"
          onGroupContainer7Click={onGroupContainer10Click}
        />
        <div className="group-parent7" onClick={onGroupContainer13Click}>
          <div className="your-education-courses-container">
            <div className="your-education-courses5">
              Your education courses
            </div>
          </div>
          <div className="rectangle-parent48">
            <div className="group-child58" />
            <img
              className="mingcutedown-fill-icon4"
              alt=""
              src="/mingcutedownfill1.svg"
            />
            <div className="group-child61" />
            <img
              className="mdieducation-outline-icon1"
              alt=""
              src="/mdieducationoutline.svg"
            />
            <div className="activated-packages1">Your education courses</div>
          </div>
        </div>
        <HelpSection
          buttonText="Help"
          onGroupContainer16Click={onGroupContainer16Click}
        />
        <HelpSection
          buttonText="Logout"
          propTop="89.36%"
          propBottom="0%"
          propCursor="unset"
          onGroupContainer16Click={onGroupContainer17Click}
        />
        <div className="group-parent8" onClick={onGroupContainer21Click}>
          <div className="rectangle-parent48">
            <div className="group-child58" />
            <img
              className="mingcutedown-fill-icon4"
              alt=""
              src="/mingcutedownfill1.svg"
            />
            <div className="activated-packages1">Hire me</div>
          </div>
          <img className="group-wrapper1" alt="" src="/group-38159.svg" />
        </div>
      </div>
      <AdvertisementForm
        propCursor="pointer"
        onGroupContainer25Click={onGroupContainer25Click}
      />
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
    </div>
  );
};

export default Profile;
