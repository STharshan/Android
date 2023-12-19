import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../../components/Header/HeaderIcon";
import "./JobSeeker2.css";
import Footer from "../../../components/Footer/footer";
import axios from "axios";

const JobSeeker2 = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/job-seeker");
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    jobcategory: "",
    experience: "",
    contact: "",
  });

  const [image, setImage] = useState(null);

  const handleCvChange = (e) => {
    setImage(e.target.files[0]);
  };


  const onGotojobSeeker = useCallback(async () => {
    
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("name", formData.name);
    formDataWithFiles.append("jobcategory", formData.jobcategory);
    formDataWithFiles.append("experience", formData.experience);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("image", image);

try {
    const response = await axios.post("http://localhost:3001/api/cv", formDataWithFiles);
      window.alert(response.data.message);
      navigate("/job-seeker");
  } catch (error) {
    console.error("Error submitting CV", error);
    window.alert("Error adding CV:", error);
  }
}, [formData, image, navigate]);

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  return (
    <div className="job-seeker">
      <div className="job-seeker-child" />
      <div className="upload-your-cv-parent">
        <div className="upload-your-cv">Upload your CV</div>
        <div className="rectangle-parent1">
          <input className="group-inner" name="name"
          onChange={handleInputChange}/>
          <div className="full-name">Full Name</div>
        </div>
        <input className="frame-child1" name="jobcategory"
          onChange={handleInputChange}/>
        <div className="job-category">Job Category</div>
        <div className="rectangle-parent2">
          <input className="group-inner" name="experience"
          onChange={handleInputChange}/>
          <div className="full-name">Years Of Experience</div>
        </div>
        <div className="rectangle-parent3">
          <input className="group-inner" name="contact"
          onChange={handleInputChange}/>
          <div className="full-name">Contact Number</div>
        </div>
        <input className="frame-child2" name="image" type="file"
          onChange={handleCvChange}/>
        <div className="frame-child3" />
        <div className="upload-cv">Upload CV</div>
        <img className="vector-icon11" alt="" src="/vector6.svg" />
        <div className="submit" onClick={onGotojobSeeker}>Submit</div>
        <img
          className="icround-close-icon"
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
        footerTopmargin="880px"
        titleHome="var(--color-goldenrod)"
      />
    </div>
  );
};

export default JobSeeker2;
