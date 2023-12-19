import { useNavigate } from "react-router-dom";
import "./HeaderIcon.css";

const HeaderIcon = () => {

  const navigate = useNavigate();

  const handlenotification = () => {
    navigate('/notification');
  };

  const onProfile = () => {
    navigate('/profile');
  };

  return(
    <div className="header">
      <img className="header-line" onClick={onProfile} alt="" src="/Group 38059.png" />
      <img className="header-icon" alt="" src="/rectangle-4440@2x.png" />
      <img className="header-bell-back" alt="" src="/Ellipse 8.png" />
      <img className="header-bell" onClick={handlenotification}  alt="" src="/carbon_notification.png" />
     
    </div>

  ) ;

};

export default HeaderIcon;
