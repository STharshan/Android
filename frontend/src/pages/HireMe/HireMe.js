import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./HireMe.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const HireMe = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/your-course1");
  }, [navigate]);

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/hire-me");
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    experience: "",
    jobcategory: "",
  });

    const [file, setFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
  
    const handleCVChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleImageFileChange = (e) => {
      setImageFile(e.target.files[0]);
    };


    const onGroupContainer33Click = useCallback(async () => {
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("name", formData.name);
      formDataWithFiles.append("contact", formData.contact);
      formDataWithFiles.append("experience", formData.experience);
      formDataWithFiles.append("jobcategory", formData.jobcategory);
      formDataWithFiles.append("cv", file);
      formDataWithFiles.append("image", imageFile);
  
      try {
        const response = await axios.post(
          "http://localhost:3001/api/submitJobRole",
          formDataWithFiles
        );
  
        // Assuming your server returns a success message
        window.alert(response.data.message);
        navigate("/hire-me");
      } catch (error) {
        console.error("Error adding job role:", error);
        window.alert("Error adding job role:", error);
      }
    }, [formData, file, imageFile, navigate]);
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  
  return (
    <div className="hire-me">
      <div className="hire-me-child" />
      <div className="your-education-courses1">Your education courses</div>
      <img
        className="pharrow-left-bold-icon13"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />
      {/* <EducationCoursesForm />
      <EducationCoursesForm ellipseIconTop="418px" />
      <EducationCoursesForm ellipseIconTop="642px" />
      <EducationCoursesForm ellipseIconTop="306px" />
      <EducationCoursesForm ellipseIconTop="530px" />
      <EducationCoursesForm ellipseIconTop="754px" /> */}
      <img
        className="hire-me-item"
        alt=""
        src="/group-38122.svg"
        onClick={onGroupClick}
      />
      <div className="hire-me-inner" />
      <div className="add-your-job-role-parent">
        <div className="add-your-job">Add your job role</div>
        <div className="rectangle-parent38">
          <input className="group-child45" name="name"
          onChange={handleInputChange}
          value={formData.name}/>
          <div className="your-name">Your Name</div>
        </div>
        <input className="frame-child25" 
        name="contact"
        onChange={handleInputChange}
        value={formData.contact}/>
        <input className="frame-child26" 
        name="experience"
        onChange={handleInputChange}
        value={formData.experience}/>
        <input className="frame-child27" name="jobcategory" onChange={handleInputChange}
        value={formData.jobcategory} />
        <input className="frame-child28" type="file" name="image" onChange={handleImageFileChange}   />
        <div className="contact-number6">Contact Number</div>
        <div className="experience-of-years">Experience of years</div>
        <div className="job-category1">Job Category</div>
        <div className="profile-image">Profile Image ( 00x00 pixel )</div>
        <div className="your-cv-wrapper">
          <div className="your-name">Your CV</div>
        </div>
        <div className="rectangle-parent39">
          <div className="group-child45" />
          <div className="your-name">Image ( 00x00 pixel )</div>
        </div>
        <input className="frame-child29" type="file" name="cv" onChange={handleCVChange} />
        <div className="upload-cv5">Upload CV</div>
        <img className="vector-icon29" alt="" src="/vector6.svg" />
        <img className="vector-icon30" alt="" src="/vector2.svg" />
        <div className="rectangle-parent40" onClick={onGroupContainer33Click}>
          <div className="group-child47" />
          <div className="add-job-role">Add Job Role</div>
        </div>
        <img
          className="icround-close-icon5"
          alt=""
          src="/icroundclose.svg"
          onClick={onIcroundCloseIconClick}
        />
        <img
          className="icon-park-soliddown-one5"
          alt=""
          src="/iconparksoliddownone.svg"
        />
      </div>
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="860px"
      />
    </div>
  );
};

export default HireMe;
