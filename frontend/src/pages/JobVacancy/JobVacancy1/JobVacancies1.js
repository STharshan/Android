import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/footer";
import HeaderIcon from "../../../components/Header/HeaderIcon";
import "./JobVacancies1.css";
import { useCallback } from "react";

const JobVacancies1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline yellow";

  const navigate =useNavigate();

  const onGotoapply = useCallback(() => {
    navigate("/job-vacancies1");
  }, [navigate]);

  return (
    <div className="job-vacancies2">
      <HeaderIcon />
      <div className="company-name-here-container">
        <div className="company-name-here2">Company Name here</div>
        <div className="div33">2020-10-13</div>
        <div className="group-child64" />
        <img className="group-child65" alt="" src="/rectangle-93@2x.png" />
        <img className="bishare-icon2" alt="" src="/bishare.svg" />
        <div className="group-child66" />
      </div>

      <div className="rectangle-parent51">
        <div className="group-child70" />
        <div className="apply-now1" onClick={onGotoapply}>Apply Now</div>
      </div>

      <div className="company-name-here-parent1">
        <div className="company-name-here2">Company Name here</div>
        <div className="div33">2020-10-13</div>
        <div className="group-child64" />
        <img className="group-child65" alt="" src="/rectangle-93@2x.png" />
        <img className="bishare-icon3" alt="" src="/bishare.svg" />
        <div className="group-child66" />
      </div>
      
      <div className="rectangles-parent52" >
        <div className="groups-child71" />
        <div className="applys-now2" onClick={onGotoapply}>Apply Now</div>
      </div>
      
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        titleVacancy="var(--color-goldenrod)"
        footerTopmargin="1100px"
      />
    </div>
  );
};

export default JobVacancies1;
