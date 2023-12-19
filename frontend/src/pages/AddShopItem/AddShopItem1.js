import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./AddShopItem1.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const AddShopItem1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/shops-items-category");
  }, [navigate]);

  const [formData, setFormData] = useState({
    itemname: "",
    department: "",
    categorytype: "",
    subcategory: "",
    contact: "",
    contact1: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const onGroupContainer11Click = useCallback(async () => {
    
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("itemname", formData.itemname);
    formDataWithFiles.append("department", formData.department);
    formDataWithFiles.append("categorytype", formData.categorytype);
    formDataWithFiles.append("subcategory", formData.subcategory);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("contact1", formData.contact1);
    formDataWithFiles.append("price", formData.price);
    formDataWithFiles.append("image", image);
    formDataWithFiles.append("description", formData.description);


try {
    const response = await axios.post("http://localhost:3001/api/item1", formDataWithFiles);
      window.alert(response.data.message);
      navigate("/shops-items-category");
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
      <div className="add-shop-item-child3" />
      <div className="add-shop-item-group">
        <div className="add-shop-item3">Add Shop Item</div>
        <div className="rectangle-parent28">
          <input className="group-child35" name="itemname"
          onChange={handleInputChange}/>
          <div className="item-name1">Item Name</div>
        </div>
        <input className="frame-child16" name="department"
          onChange={handleInputChange}/>
            <div className="department1">Department</div>
        <img
          className="icon-park-soliddown-one2"
          alt=""
          src="/iconparksoliddownone.svg"
        />
        <input className="frame-child17" name="subcategory"
          onChange={handleInputChange}/>
          <div className="sub-category">Sub Category</div>
        <input className="frame-child18" name="categorytype"
          onChange={handleInputChange}/>
        <div className="category-type">Category Type</div>
        <div className="rectangle-parent29">
          <input className="group-child35" name="contact" type="number"
          onChange={handleInputChange}/>
          <div className="item-name1">Contact Number</div>
        </div>
        <div className="contact-number-2-if-any-container">
          <div className="item-name1">Contact Number 2 (if any)</div>
        </div>
        <input className="frame-child19" name="contact1" type="number"
          onChange={handleInputChange}/>
        <div className="rectangle-parent30">
          <input className="group-child35" name="price" type="number"
          onChange={handleInputChange}/>
          <div className="item-name1">Price</div>
        </div>
        <div className="rectangle-parent31">
          <input className="group-child35" type="file" onChange={handleImageChange}/>
          <div className="item-name1">Image (00x00 pixel)</div>
        </div>
        <div className="rectangle-parent32">
          <input className="group-child39" name="description"
          onChange={handleInputChange}/>
          <div className="item-name1">Description</div>
        </div>
      
        <img className="vector-icon21" alt="" src="/vector2.svg" />
        <div className="rectangle-parent34" onClick={onGroupContainer11Click}>
          <div className="group-child41" />
          <div className="add-item1">Add Item</div>
        </div>
        <img
          className="icround-close-icon3"
          alt=""
          src="/icroundclose.svg"
          onClick={onIcroundCloseIconClick}
        />
        <img
          className="icon-park-soliddown-one3"
          alt=""
          src="/iconparksoliddownone.svg"
        />
        <img
          className="icon-park-soliddown-one4"
          alt=""
          src="/iconparksoliddownone.svg"
        />
      </div>
      <HeaderIcon />
      <Footer
        footerTopmargin="1200px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
    </div>
  );
};

export default AddShopItem1;
