import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ConstructionHubContainer from "../../components/ConstructionHubContainer/ConstructionHubContainer";
import "./Onboarding.css";

const Onboarding = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/register-account");
  }, [navigate]);

  const handleNext = () => {
    navigate('/onboarding1');
  };

  return (
    <div className="onboarding">
      <img className="onboarding-child" alt="" src="/rectangle-4440@2x.png" />
      <img
        className="onboarding-item"
        alt=""
        src="/group-38261.svg"
        onClick={onGroupClick}
      />
      <ConstructionHubContainer
        locationDescription="The central role of the location as a hub for various aspects of careers and construction while emphasizing its convenience."
        hubDescription={`A Hub for Construction & Convenience`}
      />
      <img className="onboarding-inner" alt="" src="/group-38256@2x.png" />
      <div className="skip" onClick={handleNext}>Skip</div>
    </div>
  );
};

export default Onboarding;
