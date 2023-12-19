import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./ChangePassword.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const ChangePassword = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/persional-information");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
   
  }, [navigate]);
  
  const [change, setChange] = useState({
    newpassword : "value",
  });
  const [error,setError] = useState(false)
  const location = useLocation();

  const userId = location.pathname.split("/")[2];

  console.log(location.pathname)
  console.log(userId)


  const handleChange = (e) => {
    setChange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onupdateClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/user/${userId}`, change);
      window.alert("Password Change Successfully");
      console.log(userId)
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };


  return (
    <div className="change-password">
      <div className="change-password-child" />
      <div className="change-password1">Change Password</div>
          <img
            className="pharrow-left-bold-icon5"
            alt=""
            src="/pharrowleftbold.svg"
            onClick={onPharrowLeftBoldIconClick}
          />
      <div className="rectangle-parent19">
        <input className="group-child26" />
        <div className="current-password" type="password"
        placeholder="Current Password"
         >Current Password</div>
        <img className="mdihide-icon" alt="" src="/mdihide.svg" />
      </div>
      
      <input className="change-password-item" />
      <img className="mdihide-icon1" alt="" src="/mdihide.svg" />
      <input className="change-password-inner" />
      <img className="mdihide-icon2" alt="" src="/mdihide.svg" />
      <div className="new-password" type="password"
        placeholder="New Password"
        name="newpassword"
        onChange={handleChange}>New Password</div>
      <div className="confirm-password">Confirm Password</div>
      <div className="rectangle-parent20" onClick={onupdateClick}>
        <div className="group-child27" />
        <div className="update" >Update</div>
      </div>
      <HeaderIcon />
      <Footer
        footerTopmargin="855px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
    </div>
  );
};

export default ChangePassword;
