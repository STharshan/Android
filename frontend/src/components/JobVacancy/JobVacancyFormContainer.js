import { useMemo, useState } from "react";
import "./JobVacancyFormContainer.css";
import axios from "axios";

const JobVacancyFormContainer = ({
  formButtonText,
  propLeft,
  onIcroundCloseIconClick,
  onPostJob,
  shopName,
  setShopName,
  imageFile,
  setImageFile,
}) => {
  const addYourJobStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const handleShopNameChange  = (e) => {
    setShopName(e.target.value);
  };

  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const  onGroupContainer6Click= async () => {
    // Prepare the data to be sent
    if (!shopName.trim() || !imageFile) {
      console.error("Missing shopName or imageFile");
      window.alert("Missing shopName or imageFile");
      return;
    }

    await onPostJob();

    // Reset form fields or take other actions after posting
    setShopName("");
    setImageFile(null);
  };


  return (
    <div className="add-your-job-vacancy-parent">
      <div className="add-your-job1" style={addYourJobStyle}>
        {formButtonText}
      </div>
      <div className="rectangle-parent86">
        <input className="group-child112" type="text"
          value={shopName}
          onChange={handleShopNameChange}/>
        <div className="shop-name6">Shop Name</div>
      </div>
      <input className="frame-child40"type="file"
        name="image"
        onChange={handleImageFileChange} />
      <div className="image">Image</div>
      <div className="rectangle-parent87">
        <div className="group-child112"/>
        <div className="shop-name6">Image ( 00x00 pixel )</div>
      </div>
      <div className="upload-cv7">Upload CV</div>
      <img className="vector-icon48" alt="" src="/vector2.svg" />
      <div className="rectangle-parent88" type="submit" onClick={onGroupContainer6Click}>
        <div className="group-child114" />
        <div className="post">Post</div>
      </div>
      <img
        className="icround-close-icon7"
        alt=""
        src="/icroundclose.svg"
        onClick={onIcroundCloseIconClick}
      />
    </div>
  );
};

export default JobVacancyFormContainer;
