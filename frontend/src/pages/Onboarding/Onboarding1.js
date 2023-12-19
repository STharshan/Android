import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ConstructionHubContainer from "../../components/ConstructionHubContainer/ConstructionHubContainer";
import "./Onboarding1.css";

const Onboarding1 = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/onboarding");
  }, [navigate]);

  const handleNext = () => {
    navigate('/onboarding2');
  };

  return (
    <div className="onboarding1">
      <img className="onboarding-child1" alt="" src="/rectangle-4440@2x.png" />
      <img
        className="onboarding-child2"
        alt=""
        src="/group-38261.svg"
        onClick={onGroupClick}
      />
      <ConstructionHubContainer
        locationDescription="he place or platform being described is the gateway to exciting opportunities and experiences."
        hubDescription="Your Next Job, Your Next Tool, Your Next Adventure."
        saveAndPrintLeft="59px"
      />
      <img className="onboarding-child3" alt="" src="/group-38254@2x.png" />
      <div className="skip1" onClick={handleNext}>Skip</div>
    </div>
  );
};

export default Onboarding1;
