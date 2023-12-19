import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verification.css";

const Verification = () => {
  const navigate = useNavigate();
  const [newpassword, setNewpassword] = useState("");

  const onResetPassword  = useCallback(async () => {
    try {
      if (newpassword !== confirmpassword) {
        window.alert("Passwords do not match!");
        return;
      }
      await Axios.post("http://localhost:3001/update-password", { newpassword });
      navigate("/sign-in");

    }catch(error){
      console.error(error);
      window.alert("error updating password");
    }

  }, [newpassword,navigate]);

  return (
    <div className="verification">
      <img className="verification-child" alt="" src="/rectangle-4440@2x.png" />
      <b className="more">Update Password</b>
      <div className="verification-inner">
        <div className="rectangle-parent73">
          <div className="group-child97" onClick={onResetPassword} />
          <div className="save-update">Save Update</div>
        </div>
      </div>
      <div className="rectangle-parent74">
        <input className="group-child98" type="password" 
            value={newpassword}
            onChange={(e) => setNewpassword(e.target.value)}/>
        <div className="new-password1">New Password</div>
      </div>
      <div className="rectangle-parent75">
        <input className="group-child98" type="password"/>
        <div className="new-password1">Confirm Password</div>
      </div>
      <img className="mdihide-icon3" alt="" src="/mdihide.svg" />
      <img className="mdihide-icon4" alt="" src="/mdihide.svg" />
    </div>
  );
};

export default Verification;
