import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./AddShopItem.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const AddShopItem = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/shops-items-rent-machine");
  }, [navigate]);

  const [formData, setFormData] = useState({
    itemname: "",
    department: "",
    rentmachinetype: "",
    contact: "",
    contact1: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const onGotoshopItem = useCallback(async () => {
    
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("itemname", formData.itemname);
    formDataWithFiles.append("department", formData.department);
    formDataWithFiles.append("rentmachinetype", formData.rentmachinetype);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("contact1", formData.contact1);
    formDataWithFiles.append("price", formData.price);
    formDataWithFiles.append("image", image);
    formDataWithFiles.append("description", formData.description);


try {
    const response = await axios.post("http://localhost:3001/api/item", formDataWithFiles);
      window.alert(response.data.message);
      navigate("/shops-items-rent-machine");
  } catch (error) {
    console.error("Error submitting Item", error);
    window.alert("Error adding Item:", error);
  }
}, [formData, image, navigate]);

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


  return (
    <div className="your-shop3">
      <div className="add-shop-item-inner" />
      <div className="add-shop-item-parent">
        <div className="add-shop-item1">Add Shop Item</div>
        <div className="rectangle-parent21">
          <input className="group-child28" name="itemname"
          onChange={handleInputChange}/>
          <div className="item-name">Item Name</div>
        </div>
        <input className="frame-child13"  name="department"
          onChange={handleInputChange}/>
        <img
          className="icon-park-soliddown-one"
          alt=""
          src="/iconparksoliddownone.svg"
        />
        <input className="frame-child14" name="rentmachinetype"
          onChange={handleInputChange}/>
        <div className="department">Department</div>
        <div className="rent-machine-type">Rent Machine type</div>
        <div className="rectangle-parent22">
          <input className="group-child28" name="contact"
          onChange={handleInputChange}/>
          <div className="item-name">Contact Number</div>
        </div>
        <input className="frame-child15" name="contact1"
          onChange={handleInputChange}/>
        <div className="contact-number-2-if-any-wrapper">
          <div className="item-name">Contact Number 2 (if any)</div>
        </div>
        <div className="rectangle-parent23">
          <input className="group-child28" name="price"
          onChange={handleInputChange}/>
          <div className="item-name">Price</div>
        </div>
        <div className="rectangle-parent24">
        <input className="group-child28" name="image" type="file"
          onChange={handleImageChange}/>
          <div className="item-name">Image (00x00 pixel)</div>
        </div>
        <div className="rectangle-parent25">
          <input className="group-child32" name="description"
          onChange={handleInputChange}/>
          <div className="item-name">Description</div>
        </div>
        <img className="vector-icon19" alt="" src="/vector2.svg" />
        <div className="rectangle-parent27" onClick={onGotoshopItem}>
          <input className="group-child34" />
          <div className="add-item">Add Item</div>
        </div>
        <img
          className="icround-close-icon2"
          alt=""
          src="/icroundclose.svg"
          onClick={onIcroundCloseIconClick}
        />
        <img
          className="icon-park-soliddown-one1"
          alt=""
          src="/iconparksoliddownone.svg"
        />
      </div>
      <HeaderIcon />
      <Footer
        footerTopmargin="1120px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
    </div>
  );
};

export default AddShopItem;
