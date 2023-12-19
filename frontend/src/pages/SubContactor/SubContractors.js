import GroupComponent3 from "../../components/AllGroupComponent/GroupComponent3/GroupComponent3";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./SubContractors.css";
import Footer from "../../components/Footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";

const SubContractors = () => {

  const home = "vector yellow";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

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
    <div className="sub-contractors2">
      <div className="rectangle-parent5">
        <div className="rectangle1" />
        <div className="frame-child8" />
        <div className="frame-container">
          <div className="rectangle-parent6">
            <div className="frame-child9" />
            <div className="frame-child10" />
          </div>
          <div className="all-items2">All Items</div>
          <div className="sub-contractors3">30 sub contractors</div>
          <div className="group-child5" />
          <GroupComponent3
            choose="Sub Contractors"
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
            chooseHeight="unset"
            chooseWidth="unset"
            chooseFontFamily="Inter"
            chooseColor="#5e5b5b"
          />
          <div className="group-child6" />
          <img
            className="carbonlocation-icon2"
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
                  <div className="years-of-experience2">{item.experience} years of experience</div>
                  <b className="painting1">{item.jobcategory}</b>
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
      </div>
      <div className="sub-contractors-container">
        <div className="sub-contractors4"> / Sub Contractors</div>
        <img
          className="material-symbolshome-outline-icon2"
          alt=""
          src="/materialsymbolshomeoutline.svg"
        />
      </div>
      <HeaderIcon />
      <Footer
        titleHome="var(--color-goldenrod)"
         imageName1={international}
         imageName2={course}
         imageName3={vacancy}
         imageName4={home} 
         footerTopmargin="972px"
      />
    </div>
  );
};

export default SubContractors;
