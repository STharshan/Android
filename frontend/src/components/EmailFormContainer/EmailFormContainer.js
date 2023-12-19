import { useMemo } from "react";
import "./EmailFormContainer.css";

const EmailFormContainer = ({ contactInfo, contactDetails, propTop }) => {
  const groupDiv7Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="rectangle-parent92" style={groupDiv7Style}>
      <div className="group-child122" />
      <div className="group-child123" />
      <div className="email-address1">{contactInfo}</div>
      <div className="samplemailgmailcom2">{contactDetails}</div>
    </div>
  );
};

export default EmailFormContainer;
