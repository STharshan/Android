import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProgressContainer.css";
import axios from "axios";

const ProgressContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [error, setError] = useState('');
  
  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {
      email: email,
      newpassword: newpassword,
    })
    .then(res => {
        console.log(res);
        if(res.data.Status === 'Success') {
          console.log(res.data.Token);
            navigate('/home');
        } else {
            window.alert(res.data.Error);
        }
    })
    .catch(err => console.log(err));
}


  const onMoreText1Click = useCallback(() => {
    navigate("/reset-password");
  }, [navigate]);

  return (
    <div className="group-parent23">
      <h1>{error && error}</h1>
      <div className="rectangle-parent106">
        <input className="group-child138"  type="email"
           placeholder="Enter a valid email address"
           onChange={(e) => {setEmail(e.target.value)}}/>
        <div className="password">Email</div>
      </div>
      <div className="rectangle-parent107">
        <input className="group-child138"  type="password"
              placeholder="Enter password"
              onChange={(e) => {setNewpassword(e.target.value)}} />
        <div className="password">Password</div>
      </div>
      <img className="mdihide-icon7" alt="" src="/mdihide.svg" />
      <div className="rectangle-parent108" onClick={login}>
        <div className="group-child140" />
        <div className="continue1">Continue</div>
      </div>
      <div className="more5" onClick={onMoreText1Click}>
        Forgot Password
      </div>
    </div>
  );
};

export default ProgressContainer;
