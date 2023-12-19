import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import Axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const onRequestReset = useCallback(async () => {
    try {
      await Axios.post('http://localhost:3001/request-reset', { email });
      window.alert('Password reset email sent successfully');
      navigate("/verification1");
    } catch (error) {
      console.error(error);
      window.alert('Error sending password reset email');
    }
  }, [email]);
   

  return (
    <div className="reset-password">
      <img
        className="reset-password-child"
        alt=""
        src="/rectangle-4440@2x.png"
      />
      <b className="more2">Reset Password</b>
      <div className="group-parent11">
        <div className="rectangle-parent77">
          <input className="group-child101"  value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <div className="emailphone">Email/Phone</div>
        </div>
        <div className="rectangle-parent78">
          <div className="group-child102" onClick={onRequestReset} />
          <div className="reset1">Reset</div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
