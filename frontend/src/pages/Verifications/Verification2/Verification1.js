import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import "./Verification1.css";

const Verification1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/verification");
  }, [navigate]);

  return (
    <div className="verification1">
      <img className="verification-item" alt="" src="/rectangle-4440@2x.png" />
      <b className="more1">Verification</b>
      <div className="verification-inner1">
        <div className="rectangle-parent76">
          <div className="group-child100" onClick={onRectangleClick} />
          <div className="reset">Reset</div>
        </div>
      </div>
      <div className="we-have-sent-container">
        <span>{`We have sent a verification code to +628*******716 `}</span>
        <span className="change">Change?</span>
      </div>
      <ContainerBox />
    </div>
  );
};

export default Verification1;
