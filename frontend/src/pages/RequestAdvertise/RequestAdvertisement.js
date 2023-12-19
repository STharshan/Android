import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./RequestAdvertisement.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";

const RequestAdvertisement = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const [formData, setFormData] = useState({
    shopname: "",
    contact: "",
    message: "",
    department: "",
    category: "",
    area: "",
  });

  const [receipt, setReceipt] = useState(null);
  const [image, setImage] = useState(null);

  const handleReceiptChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  const handleImageFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onGroupContainer26Click = useCallback(async () => {
    
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("shopname", formData.shopname);
      formDataWithFiles.append("contact", formData.contact);
      formDataWithFiles.append("message", formData.message);
      formDataWithFiles.append("department", formData.department);
      formDataWithFiles.append("category", formData.category);
      formDataWithFiles.append("area", formData.area);
      formDataWithFiles.append("image", image);
      formDataWithFiles.append("receipt", receipt);

  try {
      const response = await axios.post("http://localhost:3001/api/submitAdvertisement", formDataWithFiles);
        window.alert(response.data.message);
        navigate("/profile");
    } catch (error) {
      console.error("Error submitting advertisement:", error);
      window.alert("Error adding job role:", error);
    }
  }, [formData, receipt , image, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="request-advertisement">
      <div className="request-advertisement-child" />
      <div className="request-for-advertisement-parent">
        <div className="request-for-advertisement">
          Request for advertisement
        </div>
        <div className="rectangle-parent44">
          <input className="group-child54" name="shopname"
          onChange={handleInputChange}
          value={formData.shopname}/>
          <div className="shop-name4">Shop Name</div>
        </div>
        
        <input className="frame-child30" name="contact"
          onChange={handleInputChange}
          value={formData.contact}/>
        <div className="contact-number7">Contact Number</div>

        <div className="rectangle-parent45">
          <input className="group-child55" name="message"
          onChange={handleInputChange}
          value={formData.message}/>
          <div className="shop-name4">Message</div>
        </div>
        <input className="department7" name="department"
          onChange={handleInputChange}
          value={formData.department}/>
        <div className="department8">Department</div>

        <input className="category7" name="category"
          onChange={handleInputChange}
          value={formData.category}/>
        <div className="category8">Category Type</div>

        <input className="area7" name="area"
          onChange={handleInputChange}
          value={formData.area}/>
        <div className="area8">Area that can be supplied</div>
        <img className="location"  src="/mingcute_location-fill.png"/>
        <div className="image-00x00-pixel3">Image (00x00 pixel)</div>
          <input className="frame-child31" type="file" name="image" onChange={handleImageFileChange}   />
          <img className="vector-icon38" alt="" src="/vector6.svg" />
        <div className="payment-receipt">Payment Receipt</div>
          <input className="frame-child32"  type="file" name="receipt" onChange={handleReceiptChange}  />

        <div className="rectangle-parent47" onClick={onGroupContainer26Click}>
          <div className="group-child57" />
          <div className="submit3">Submit</div>
        </div>
        <img
          className="icround-close-icon6"
          alt=""
          src="/icroundclose.svg"
          onClick={onIcroundCloseIconClick}
        />
      </div>
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="1160px"
      />
    </div>
  );
};

export default RequestAdvertisement;
