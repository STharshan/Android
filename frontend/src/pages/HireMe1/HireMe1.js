import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./HireMe1.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const HireMe1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/hire-me1");
  }, [navigate]);

  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3001/api/submitjobrole')
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
    <div className="hire-me1">
      <div className="hire-me-child1" />
      <div className="your-job-roles">Your job roles</div>
      <img
        className="pharrow-left-bold-icon14"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />
    <div className="instance-parent1">


  <div className="rectangle-root">
     {data.map((item) => {
      return(
        <div className="component-inner">
        <div className="years-of-experience" >
          {item.experience} years of experience
        </div>
 <img className="group-child124" alt="" src={item.image} />
          <div className="name-here">{item.name}</div>
          <div className="vector-parent">
            <img
              className="vector-icon"
              alt=""
              src="/vector.svg"
            />
            <div className="div" >
              {item.contact}
            </div>
          </div>
          <div className="painting"> 
              <a href={item.cv} attributes-list download class >Download CV</a>
          </div>    
        </div>
      )
    })}
  </div>
      
    </div>
      
      <img
        className="hire-me-child2"
        alt=""
        src="/group-38122.svg"
        onClick={onGroupClick}
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

export default HireMe1;
