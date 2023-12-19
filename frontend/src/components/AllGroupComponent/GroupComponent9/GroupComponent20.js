import { useCallback, useMemo } from "react";
import "./GroupComponent20.css";
import { useNavigate } from "react-router-dom";

const GroupComponent20 = ({ propLeft, propTop }) => {
  const groupDiv19Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const navigate = useNavigate();
  
  const onGotointernational = useCallback(() => {
    navigate("/international-contractors1");
  }, [navigate]);

  return (
    <div className="product-parent" style={groupDiv19Style}>
      <div className="product1">
        <div className="dummy-product">
          <img
            className="dummy-product-child"
            alt=""
            src="/rectangle-626@2x.png"
            onClick={onGotointernational}
          />
        </div>
        <div className="product-inner1">
          <div className="contractor-name-parent">
            <div className="contractor-name">Contractor Name</div>
            <b className="roof-design3">Roof Design</b>
          </div>
        </div>
      </div>
      <img
        className="emojione-v1flag-for-canada-icon1"
        alt=""
        src="/emojionev1flagforcanada.svg"
      />
    </div>
  );
};

export default GroupComponent20;
