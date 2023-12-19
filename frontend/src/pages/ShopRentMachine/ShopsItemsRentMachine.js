import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./ShopsItemsRentMachine.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const ShopsItemsRentMachine = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/shops-items-category");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/add-shop-item1");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/item')
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
    <div className="shops-items-rent-machine">
      <div className="shops-items-rent-machine-child" />
      <div className="shop-name-here1">Shop Name Here</div>
      <img
        className="pharrow-left-bold-icon10"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />
      <div className="category-wrapper" onClick={onFrameContainerClick}>
        <div className="category">Category</div>
      </div>
      <div className="rent-machine-wrapper">
        <div className="rent-machine">Rent Machine</div>
      </div>
      <div className="rectangle-parent94">
        {data.map((item) =>{
          return(
          <div className="component-child3" key={item.id}>
              <img className="component-child4" alt="" src={item.image} />
              <div className="item-name-here3">{item.itemname}</div>
              <div className="price2">{item.price}</div>
              <div className="contact-number11">{item.contact}</div>
              <div className="rent-machine-type2">{item.rentmachinetype}</div>
              
          </div>
          )
        })}
      </div>
      <img
        className="shops-items-rent-machine-item"
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
        footerTopmargin="870px"
      />
    </div>
  );
};

export default ShopsItemsRentMachine;
