import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding2.css";

const Onboarding2 = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/onboarding1");
  }, [navigate]);

  const gotoRegister = useCallback(() => {
    navigate("/register-account");
  }, [navigate]);


  return (
    <div className="onboarding2">
      <img className="onboarding-child4" alt="" src="/rectangle-4440@2x.png" />
      <img className="onboarding-child5" alt="" src="/group-38255@2x.png" />
      <div className="our-community-of">
        The convenience of having everything you need in a single location.
      </div>
      <b className="welcome-to-camo">Join. Build. Create. All in One Place.</b>
      <img
        className="onboarding-child6"
        alt=""
        src="/group-38261.svg"
        onClick={onGroupClick}
      />
      <div className="skip2" onClick={gotoRegister} >Skip</div>
    </div>
  );
};

export default Onboarding2;
