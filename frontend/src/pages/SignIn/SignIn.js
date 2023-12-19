import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProgressContainer from "../../components/ProgressContainer/ProgressContainer";
import "./SignIn.css";

const SignIn = () => {

  const navigate = useNavigate();

  const onIDontHaveClick = useCallback(() => {
    navigate("/register-account");
  }, [navigate]);


  return (
    <div className="sign-in">
      <img className="sign-in-child" alt="" src="/rectangle-4440@2x.png" />
      <b className="more3">Welcome to IDIKIRIM.COM</b>
      <div className="i-dont-have-container" onClick={onIDontHaveClick}>
        <span>I don’t have an Account?</span>
        <span className="span">{`  `}</span>
        <span className="sign-up">Sign Up</span>
      </div>
      <ProgressContainer />
    </div>
  );
};

export default SignIn;
