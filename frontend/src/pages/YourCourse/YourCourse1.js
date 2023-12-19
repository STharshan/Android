import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./YourCourse1.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const YourCourse1 = () => {

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

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/educationcourse')
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
    <div className="your-course1">
      <div className="your-course-child4" />
      <div className="your-education-courses2">Your education courses</div>
      <img
        className="pharrow-left-bold-icon15"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />
      {data.map((item) =>{
        return(
            <img className="your-course-child5" alt="" src={item.image} />
        )
      })}
      <div className="pending-container">
        <div className="pending2">Pending</div>
      </div>
      <img
        className="your-course-child8"
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
          footerTopmargin="974px"
      />
    </div>
  );
};

export default YourCourse1;
