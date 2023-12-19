import { useMemo } from "react";
import "./AdvertisementForm.css";

const AdvertisementForm = ({ propCursor, onGroupContainer25Click }) => {
  const groupDiv16Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div
      className="group-parent20"
      style={groupDiv16Style}
      onClick={onGroupContainer25Click}
    >
      <div className="rectangle-wrapper2">
        <div className="group-child131" />
      </div>
      <div className="request-advertisement-parent">
        <div className="request-advertisement1">Request Advertisement</div>
        <img
          className="riadvertisement-line-icon"
          alt=""
          src="/riadvertisementline.svg"
        />
      </div>
    </div>
  );
};

export default AdvertisementForm;
