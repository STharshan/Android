import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../../components/Header/HeaderIcon";
import "./YourJobVacancies1.css";
import Footer from "../../../components/Footer/footer";
import axios from "axios";

const YourJobVacancies1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/your-job-vacancies1");
  }, [navigate]);

  const onApplication = useCallback(() => {
    navigate("/applications");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/job')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }, [])
 


  return (
    <div className="your-shop3">
      <div className="your-shop-child" />
      <div className="your-shops2">Your Shops</div>
      <img
        className="pharrow-left-bold-icon17"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />

    <div className="rectangle-parent96">
      {data.map((item) => (
      <div className="component-child7" key={item.id}>
        <img src={item.image} alt="Product" className="component-child8" />
        <p className="shop-name-here3">{item.shopname}</p>
        <p className="application" onClick={onApplication}>03 Application</p>
      </div>
      ))}
      
    </div>  
      
      <img
        className="your-job-vacancies-child3"
        alt=""
        src="/group-38122.svg"
        onClick={onGroupClick}
      />
      <div className="your-job-vacancies-child4" />
      <div className="pending3">Pending</div>
      <HeaderIcon />
      <Footer
          imageName1={international}
          imageName2={course}
          imageName3={vacancy}
          imageName4={home}
          footerTopmargin="1050px"      
      />
    </div>
  );
};

export default YourJobVacancies1;
