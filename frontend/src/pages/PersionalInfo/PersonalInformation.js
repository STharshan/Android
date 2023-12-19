import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./PersonalInformation.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const PersonalInformation = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onChangePasswordClick = useCallback(() => {
    navigate("/change-password");
  }, [navigate]);

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);


  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Make a request to the server to get the user info
    axios.get('http://localhost:3001/api/userinfo', {
      headers: {
        Authorization: 'Bearer your-jwt-token', // Include the JWT token
      },
    })
    .then(response => {
      setUserId(response.data.userId);
    })
    .catch(error => {
      // Handle unauthorized or other errors
      console.error(error);
    });
  }, []);

  return (
    <div className="personal-information">
   
          <div className="personal-information-child">
          <div className="personal-information1">Personal Information</div>
        
          {userId ? (
        <div>
          <h2>User Details</h2>
          <p>Name: {userId}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
       
          </div>


      {/* <div className="samplemailgmailcom">samplemail@gmail.com</div>
      <div className="div29">03142445556</div>
      <div className="ptcnihal">P.T.C.Nihal</div> */}
      <div className="shops">Shops:</div>
      <div className="div30">08</div>
      <div className="div31">05</div>
      <div className="div32">02</div>
      <div className="job-vacancies1">Job vacancies:</div>
      <div className="education-courses">Education courses:</div>
      <div
        className="change-password-"
        onClick={onChangePasswordClick}
      >{`Change password ->`}</div>
      <div className="personal-information-item" />
      <img
        className="pharrow-left-bold-icon19"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
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

export default PersonalInformation;
