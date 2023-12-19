import Footer from "../../components/Footer/footer";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./EducationCourses.css";

const EducationCourses = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education";
  const vacancy = "mdi_user-search-outline";

  return (
    <div className="education-courses1">
      <div className="company-name-here-parent2">
        <div className="company-name-here4">Company Name here</div>
        <div className="div35">2020-10-13</div>
        <div className="group-child71" />
        <img className="group-child72" alt="" src="/rectangle-931@2x.png" />
        <img className="bishare-icon4" alt="" src="/bishare.svg" />
        <div className="group-child73" />
      </div>
      <div className="company-name-here-parent3">
        <div className="company-name-here4">Company Name here</div>
        <div className="div35">2020-10-13</div>
        <div className="group-child71" />
        <img className="group-child72" alt="" src="/rectangle-931@2x.png" />
        <img className="bishare-icon4" alt="" src="/bishare.svg" />
        <div className="group-child73" />
      </div>
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        titleCourse="var(--color-goldenrod)"
      />
    </div>
  );
};

export default EducationCourses;
