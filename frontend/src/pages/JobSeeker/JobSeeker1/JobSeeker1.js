import { useCallback, useEffect, useState } from "react";
import "./JobSeeker1.css";
import HeaderIcon from "../../../components/Header/HeaderIcon";
import GroupComponent3 from "../../../components/AllGroupComponent/GroupComponent3/GroupComponent3";
import Footer from "../../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const JobSeeker1 = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onGroup1Click = useCallback(() => {
    navigate("/job-seeker1");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/cv')
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
    <div className="job-seeker1">
      <div className="frame-div">
        <div className="rectangle" />
        <div className="frame-child4" />
        <div className="frame-group">
          <div className="rectangle-parent4">
            <div className="frame-child5" />
            <div className="frame-child6" />
          </div>
          <div className="all-items1">All Items</div>
          <div className="job-seekers1">30 job seekers</div>
          <div className="group-child3" />
          <GroupComponent3
            choose="Job seeker"
            showMingcutedownFillIcon
            groupDivWidth="79.07%"
            groupDivHeight="3.83%"
            groupDivPosition="absolute"
            groupDivTop="19.54%"
            groupDivRight="16.05%"
            groupDivBottom="76.63%"
            groupDivLeft="4.88%"
            groupDivCursor="unset"
            rectangleDivBorderRadius="6px"
            chooseHeight="39.5%"
            chooseWidth="23.53%"
            chooseFontFamily="'IBM Plex Sans'"
            chooseColor="#959595"
            chooseFontWeight="500"
          />
          <div className="group-child4" />
          <img
            className="carbonlocation-icon1"
            alt=""
            src="/carbonlocation.svg"
          />
          
        </div>
        <div className="product">
        {data.map((item) => {
          return(
            <div key={item.id} className="productgroup">
              <img className="dummy-product-icon" alt="" src="ellipse-2@2x.png" />
              <div className="product-inner">
                <div className="name-here-group">
                  <div className="name-here1">{item.name}</div>
                  <div className="years-of-experience2" >{item.experience} years of experience</div>
                  <a href ={item.image} attributes-list download class="painting1">Download CV</a>  
                </div>
              </div>
              <div className="product-child">
                  <div className="div38">
                  <img className="vector-icon49" alt="" src="/vector5.svg" />
                    {item.contact}
                  </div>
              </div>
             </div> 
          )
        })};
        </div>
        <img
          className="frame-child7"
          alt=""
          src="/group-38122.svg"
          onClick={onGroup1Click}
        />
      </div>
      <div className="sub-contractors-group">
        <div className="sub-contractors1"> / Sub Contractors</div>
        <img
          className="material-symbolshome-outline-icon1"
          alt=""
          src="/materialsymbolshomeoutline.svg"
        />
      </div>
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="972px"
        titleHome="var(--color-goldenrod)"
      />
    </div>
  );
};

export default JobSeeker1;
