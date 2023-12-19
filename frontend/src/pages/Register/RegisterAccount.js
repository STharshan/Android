import { useCallback, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterAccount.css";

const RegisterAccount = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewpassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmpassword(e.target.value);
  };
  
  const register = async () => {
    try{
     if (newpassword !== confirmpassword){
       window.alert("Passwords do not match!");
       return;
     }

     if (!isValidEmailFormat(email)) {
       window.alert("Invalid email format!");
       return;
     }
    
     const response = await Axios.post("http://localhost:3001/register", {
       firstname,
       lastname,
       province,
       district,
       city,
       email,
       newpassword,
      
     });

     if(response.status ===201){
       window.alert("ACCOUNT CREATED SUCCESSFULLY");
     }
   }catch (error){
     console.error(error);
     window.alert(`Error registering user: ${error.response.data.message || error.message}`);
   }

 }

 const isValidEmailFormat = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


  const onHaveAnAccountClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div className="register-account">
      <img
        className="register-account-child"
        alt=""
        src="/rectangle-4440@2x.png"
      />
      <b className="more4">Register Account</b>
      <div className="rectangle-parent79">
        <input className="group-child103" type="text" name="firstname"
          onChange={handleFirstnameChange} placeholder="Enter your firstname" required/>
        <div className="shop-name5">First Name</div>
      </div>
      <div className="rectangle-parent80">
        <input className="group-child103" type="text" name="province"
          onChange={handleProvinceChange} placeholder="Enter your province" required />
        <div className="shop-name5">Province</div>
      </div>
      <div className="rectangle-parent81">
        <input className="group-child103" type="text" name="last name"
          onChange={handleLastnameChange} placeholder="Enter your lastname" required />
        <div className="shop-name5">Last Name</div>
      </div>
      <div className="rectangle-parent82">
        <input className="group-child103" type="text" name="district"
          onChange={handleDistrictChange} placeholder="Enter your province" required />
        <div className="shop-name5">District</div>
      </div>
      <div className="rectangle-parent83">
        <input className="group-child103" type="text" name="city"
          onChange={handleCityChange} placeholder="Enter your province" required />
        <div className="shop-name5">Nearest City</div>
        <img className="mdihide-icon6" src="/fluent_location-12-filled (1).png"/>
      </div>
      <div className="rectangle87">
        <input className="group-child103" type="email"
           onChange={handleEmailChange} placeholder="Enter your Email" required />
        <div className="shop-name5">Email</div>
      </div>
      <div className="rectangle85">
        <input className="group-child103" type="password"
           onChange={handleNewPasswordChange} placeholder="Enter your NewPassword" required />
        <div className="shop-name5">New Password</div>
      </div>
      <div className="rectangle86">
        <input className="group-child103" type="password"
           onChange={handleConfirmPasswordChange} placeholder="Enter your ConfirmPassword" required/>
        <div className="shop-name5">Confirm Password</div>
      </div>
      
      
      <img className="mdihide-icon5" alt="" src="/mdihide.svg" />
      <img className="mdihide7" alt="" src="/mdihide.svg" />
      <div className="rectangle-parent84" onClick={register}>
        <div className="group-child108" />
        <div className="continue">Continue</div>
      </div>
      <div className="have-an-account-container" onClick={onHaveAnAccountClick}>
        <span>Have an Account?</span>
        <span className="span1">{`  `}</span>
        <span className="sign-in1">Sign In</span>
      </div>
    </div>
  );
};

export default RegisterAccount;
