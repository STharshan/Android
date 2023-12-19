import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./AddYourShop.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";


const AddYourShop = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/job-seeker1");
  }, [navigate]);

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/your-shop");
  }, [navigate]);

  
  const [formData, setFormData] = useState({
    shopname: "",
    city: "",
    address: "",
    email: "",
    contact: "",
    contact2: "",
  });
  const [image, setImage] = useState(null);

 const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };

  const onGroupContainer7Click  = useCallback (async () => {

    const formDataWithFiles = new FormData();
    formDataWithFiles.append("shopname", formData.shopname);
    formDataWithFiles.append("city", formData.city);
    formDataWithFiles.append("address", formData.address);
    formDataWithFiles.append("email", formData.email);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("contact2", formData.contact2);
    formDataWithFiles.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/addShop",
        formDataWithFiles
      );

      window.alert(response.data.message);
      navigate("/your-shop");
    } catch (error) {
      console.error("Error adding shop:", error);
      window.alert("Error adding shop:", error);
    }
  }, [formData, image, navigate]);

  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const [data, setData] = useState([])
 
  useEffect(()=> {
    axios.get('http://localhost:3001/api/addShop')
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
    <div className="add-your-shop3">
      <div className="add-your-shop-inner" />
      <div className="add-your-shop-parent">
        <div className="add-your-shop1">Add your shop</div>
        <div className="rectangle-parent35">
          <input className="group-child42" name="shopname"
          value={formData.shopname}
          onChange={handleInputChange}/>
          <div className="shop-name">Shop Name</div>
        </div>
        <input className="city" name="city"
        value={formData.city}
        onChange={handleInputChange}/>
        <input className="frame-child20" name="address"
        value={formData.address}
        onChange={handleInputChange}/>
        <input className="frame-child21" name="contact"
        value={formData.contact}
        onChange={handleInputChange} />
        <input className="frame-child22"  name="email"
        value={formData.email}
        onChange={handleInputChange}/>
        <input className="frame-child23" name="contact2"
        value={formData.contact2}
        onChange={handleInputChange}/>
         <div className="city1">City</div>
        <div className="address1">Address</div>
        <div className="contact-number5">Contact Number</div>
        <div className="email2">Email</div>
        <div className="contact-number-22">Contact Number 2 (if any)</div>
        <input className="frame-child24"  type="file" name="image" accept="image/*"
        onChange={handleImageChange}/>
        <img className="vector-icon23" alt="" src="/vector6.svg" />
        <div className="image-00x00-pixel-wrapper">
          <div className="shop-name">Image (00x00 pixel)</div>
        </div>
        <div className="rectangle-parent37" onClick={onGroupContainer7Click}>
          <div className="group-child44" />
          <div className="add-shop">Add Shop</div>
        </div>
        <img
          className="icround-close-icon4"
          alt=""
          src="/icroundclose.svg"
          onClick={onIcroundCloseIconClick}
        />
      </div>
      <HeaderIcon />
      <Footer
        footerTopmargin="950px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
      />
    </div>
  );
};

export default AddYourShop;
