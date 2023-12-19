import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent17 from "../../components/AllGroupComponent/GroupComponent6/GroupComponent17";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./Applications.css";
import Footer from "../../components/Footer/footer";

const Applications = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/your-job-vacancies");
  }, [navigate]);


  return (
    <div className="applications">
      <div className="applications-child" />
      <div className="job-vacancy-name">Job vacancy Name Here</div>
      <img
        className="pharrow-left-bold-icon9"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />
      <GroupComponent17 />
      <GroupComponent17 contactNumberTop="470px" />
      <GroupComponent17 contactNumberTop="332px" />
      <GroupComponent17 contactNumberTop="608px" />
      <HeaderIcon />
      <Footer
        footerTopmargin="856px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
    </div>
  );
};

export default Applications;
