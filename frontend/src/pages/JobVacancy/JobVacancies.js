import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./JobVacancies.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const JobVacancies = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline yellow";
  
  const navigate = useNavigate();

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/job-vacancies");
  }, [navigate]);

 

  return (
    <div className="job-vacancies">
      <div className="job-vacancies-child" />
      <div className="apply-this-job-parent">
        <div className="apply-this-job">Apply this job</div>
        <div className="rectangle-parent8">
          <input className="group-child13" name="name" onChange={handleInputChange}/>
          <div className="email">Full Name</div>
        </div>
        <input className="frame-child11" name="jobposition"
          onChange={handleInputChange}/>
        <div className="job-position">Job Position</div>
        <div className="rectangle-parent9">
          <input className="group-child13" name="email"
          onChange={handleInputChange} type="email"/>
          <div className="email">Email</div>
        </div>
        <div className="rectangle-parent10">
          <input className="group-child13" name="contact" type="number"
          onChange={handleInputChange}/>
          <div className="email">Contact Number</div>
        </div>
        <input className="frame-child12" type="file" onChange={handleimageChange}/>
        <div className="upload-cv1">Upload CV</div>
        <img className="vector-icon15" alt="" src="/vector6.svg" />
        <img className="mask-group-icon1" alt="" src="/mask-group.svg" />
        <div className="rectangle-parent11">
          <div className="group-child16" onClick={onHandlesubmit}/>
          <div className="submit1">Submit</div>
        </div>
        <img
          className="icround-close-icon1"
          alt=""
          src="/icroundclose.svg"
          onClick={onIcroundCloseIconClick}
        />
      </div>
      <HeaderIcon />
       <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="855px"
        titleVacancy="var(--color-goldenrod)"
       />
    </div>
  );
};

export default JobVacancies;
