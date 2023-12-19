import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobVacancyFormContainer from "../../components/JobVacancy/JobVacancyFormContainer";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./YourCourse.css";
import Footer from "../../components/Footer/footer";
import axios from 'axios';

const YourCourse = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/your-course");
  }, [navigate]);

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const [shopName, setShopName] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const onPostJob = useCallback(async (data) => {
    try {

      if (!shopName || !imageFile) {
        console.error("Missing shopName or imageFile");
        return;
      }
      const formData = new FormData();
      formData.append("shopName", shopName);
      formData.append("image", imageFile);
      // Send data to the backend
      const response = await axios.post("http://localhost:3001/educationcourse", formData);

      // Handle the response as needed
      console.log(response.data);
      window.alert(" course posted successfully")
      navigate("/your-course");
      // You may want to update the state or take other actions based on the response
    } catch (error) {
      // Handle errors
      console.error("Error posting course:", error);
    }
  }, [ shopName , imageFile]);


  return (
    <div className="your-course">
      <div className="your-course-child" />
      <div className="your-education-courses">Your education courses</div>
      <img
        className="pharrow-left-bold-icon12"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />
      <img className="your-course-item" alt="" src="/rectangle-102@2x.png" />
      <img className="your-course-inner" alt="" src="/rectangle-4480@2x.png" />
      <img className="your-course-child1" alt="" src="/rectangle-4480@2x.png" />
      <div className="pending-wrapper">
        <div className="pending1">Pending</div>
      </div>
      <img className="your-course-child2" alt="" src="/group-38122.svg" />
      <div className="your-course-child3" />
      <JobVacancyFormContainer
        formButtonText="Add your course"
        propLeft="104px"
        onPostJob={onPostJob} 
        onIcroundCloseIconClick={onIcroundCloseIconClick}
        shopName={shopName}
        setShopName={setShopName} 
        imageFile={imageFile} 
        setImageFile={setImageFile} 
      />
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="855px"
      />
    </div>
  );
};

export default YourCourse;
