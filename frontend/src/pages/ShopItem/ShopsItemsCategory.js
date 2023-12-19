import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./ShopsItemsCategory.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const ShopsItemsCategory = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/shops-items-rent-machine");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/add-shop-item");
  }, [navigate]);

  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/item1')
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
    <div className="shops-items-category">
      <div className="shops-items-category-child" />
      <div className="shop-name-here2">Shop Name Here</div>
      <img
        className="pharrow-left-bold-icon11"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />
      <div className="category-container">
        <div className="category1">Category</div>
      </div>
      <div className="rent-machine-container" onClick={onFrameContainer1Click}>
        <div className="rent-machine1">Rent Machine</div>
      </div>
      <div className="rectangle-parent95">
        {data.map((item) => {
          return(
            <div className="component-child5" key={item.id}>
            <img className="component-child6" alt="product" src={item.image} />
            <div className="item-name-here4">{item.itemname}</div>
            <div className="category-type1">{item.categorytype}
              
              <div className="sub-category1">{item.subcategory}</div>
            </div>
            <div className="contact-number12">{item.contact}</div>
            <div className="price3">{item.price}</div>
            </div>
          )
        })}
      </div>
      <img
        className="shops-items-category-item"
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

export default ShopsItemsCategory;
