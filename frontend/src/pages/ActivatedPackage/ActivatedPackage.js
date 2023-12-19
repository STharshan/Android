import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./ActivatedPackage.css";
import Footer from "../../components/Footer/footer";

const ActivatedPackage = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";


  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);


  return (
    <div className="activated-package">
      <div className="activated-package-child" />
      <div className="activated-packages">Activated Packages</div>
      <img
        className="pharrow-left-bold-icon18"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />
      <div className="d-parent">
        <div className="d">D</div>
        <div className="h">H</div>
        <div className="m">M</div>
        <div className="shop-name-parent">
          <div className="shop-name1">Shop Name</div>
          <div className="div8">29</div>
          <div className="div9">:</div>
          <div className="div10">:</div>
          <div className="div11">:</div>
          <div className="div12">23</div>
          <div className="div13">52</div>
          <div className="div14">06</div>
        </div>
        <div className="shop-name-group">
          <div className="shop-name1">Shop Name</div>
          <div className="div8">29</div>
          <div className="div9">:</div>
          <div className="div10">:</div>
          <div className="div11">:</div>
          <div className="div12">23</div>
          <div className="div13">52</div>
          <div className="div14">06</div>
        </div>
        <div className="shop-name-container">
          <div className="shop-name1">Shop Name</div>
          <div className="div8">00</div>
          <div className="div9">:</div>
          <div className="div10">:</div>
          <div className="div11">:</div>
          <div className="div12">00</div>
          <div className="div27">15</div>
          <div className="div14">39</div>
        </div>
        <div className="s">S</div>
      </div>
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

export default ActivatedPackage;
