import EmailFormContainer from "../../components/EmailFormContainer/EmailFormContainer";
import HeaderIcon from "../../components/Header/HeaderIcon";
import "./Help.css";
import Footer from "../../components/Footer/footer";
import { useState } from "react";
import axios from 'axios';

const Help = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const create = async () => {

    try {
      const response = await axios.post('http://localhost:3001/api/submitForm', formData);
      window.alert("Form submitted successfully!");
    } catch (error) {
      window.alert('Error submitting form:', error);
    }
  };


  return (
    <div className="help">
      <div className="help1">Help</div>
      <div className="rectangle-parent12">
        <div className="group-child17" />
        <div className="group-child18" />
        <div className="rectangle-parent13">
          <div className="group-child19" />
          <div className="group-child20" />
          <img
            className="material-symbolscall-icon"
            alt=""
            src="/materialsymbolscall.svg"
          />
          <div className="phone-numbers">Phone Numbers</div>
          <div className="div7">0112233445 / 0112233445</div>
        </div>
        <EmailFormContainer
          contactInfo="Email Address"
          contactDetails="samplemail@gmail.com"
        />
        <EmailFormContainer
          contactInfo="Address"
          contactDetails="No.21 , Colombo"
          propTop="338px"
        />
        <img
          className="icbaseline-email-icon"
          alt=""
          src="/icbaselineemail.svg"
        />
        <img
          className="carbonlocation-filled-icon"
          alt=""
          src="/carbonlocationfilled.svg"
        />
        <div className="customer-support">Customer Support:</div>
        <div className="send-us-a">Send Us a Message:</div>
        <div className="for-general-inquiries">
          For general inquiries, product information, or assistance with your
          orders, our dedicated customer support team is ready to help.
        </div>
        <div className="have-a-specific">
          Have a specific question or request? Use the form below to send us a
          message, and we'll get back to you as soon as possible.
        </div>
        <img
          className="skill-iconstwitter"
          alt=""
          src="/skilliconstwitter.svg"
        />
        <img
          className="logoswhatsapp-icon"
          alt=""
          src="/logoswhatsappicon.svg"
        />
        <img className="logosfacebook-icon" alt="" src="/logosfacebook.svg" />
      </div>
      <div className="rectangle-parent14">
        <input className="group-child21" name="name" onChange={handleInputChange}/>
        <div className="address">Full Name</div>
      </div>
      <input className="help-child" name="email" onChange={handleInputChange}/>
      <div className="email1">Email</div>
      <div className="rectangle-parent15">
        <input className="group-child21" name="contact" onChange={handleInputChange}/>
        <div className="address">Contact Number</div>
      </div>
      <div className="rectangle-parent16">
        <input className="group-child21" name="address"  onChange={handleInputChange} />
        <div className="address">Address</div>
      </div>
      <div className="rectangle-parent17">
        <input className="group-child24" name="message" onChange={handleInputChange}/>
        <div className="address">Message</div>
      </div>
      <div className="rectangle-parent18">
        <button className="group-child25" onClick={create} />
        <div className="submit2">Submit</div>
      </div>
      <HeaderIcon />
      <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="1500px"
      />
    </div>
  );
};

export default Help;
