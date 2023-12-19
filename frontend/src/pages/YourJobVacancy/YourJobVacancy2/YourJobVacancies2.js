import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobVacancyFormContainer from "../../../components/JobVacancy/JobVacancyFormContainer";
import HeaderIcon from "../../../components/Header/HeaderIcon";
import "./YourJobVacancies2.css";
import Footer from "../../../components/Footer/footer";
import axios from 'axios';


const YourJobVacancies2 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";
  
  const navigate = useNavigate();

  const onIcroundCloseIconClick = useCallback(() => {
    navigate("/your-job-vacancies");
  }, [navigate]);

  const onPharrowLeftBoldIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const [shopName, setShopName] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const onPostJob = useCallback(async (data) => {
    try {

      if (!shopName || !imageFile) {
        console.error("Missing shopName or imageFile");
        return;
      }
      const formData = new FormData();
      formData.append("shopName", shopName);
      formData.append("image", imageFile);
      // Send data to the backend
      const response = await axios.post("http://localhost:3001/jobs", formData);

      // Handle the response as needed
      console.log(response.data);
      window.alert("Job posted successfully")
      navigate('/your-job-vacancies')

      // You may want to update the state or take other actions based on the response
    } catch (error) {
      // Handle errors
      console.error("Error posting job:", error);
    }
  }, [ shopName , imageFile]);

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
    <div className="your-shop3">
      <div className="your-shop-child" />
      <div className="your-shops2">Your Shops</div>
      <img
        className="pharrow-left-bold-icon17"
        alt=""
        src="/pharrowleftbold.svg"
        onClick={onPharrowLeftBoldIconClick}
      />

    <div className="rectangle-parent96">
      {data.map((item) => (
      <div className="component-child7" key={item.id}>
        {typeof item.image === 'string' ? (
        <img src={item.image} alt="Product" className="component-child8" />
      ) : (
        <p className="component-child8">Invalid Image</p>
      )}
        <p className="shop-name-here3">{item.shopname}</p>
        <p className="address-here">{item.address}</p>
      </div>
      ))}
      
    </div>  
      
      <img className="your-job-vacancies-item" alt="" src="/group-38122.svg" />
      <div className="your-job-vacancies-inner" />
      <div className="pending">Pending</div>
      <div className="your-job-vacancies-child1" />
      <JobVacancyFormContainer
        formButtonText="Add your Job vacancy"
        onPostJob={onPostJob} 
        onIcroundCloseIconClick={onIcroundCloseIconClick}
        shopName={shopName}
        setShopName={setShopName} 
        imageFile={imageFile} 
        setImageFile={setImageFile} 

      />
      <HeaderIcon />
     <Footer
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
        footerTopmargin="860px"
     />
    </div>
  );
};

export default YourJobVacancies2;
