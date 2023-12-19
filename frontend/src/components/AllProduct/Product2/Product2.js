import { useCallback, useMemo } from "react";
import "./Product2.css";
import { useNavigate } from "react-router-dom";

const Product2 = ({ propTop, propLeft }) => {
  const product1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const navigate = useNavigate();

  const onGotocontractor = useCallback(() => {
    navigate("/special-contractors1");
  }, [navigate]);

  return (
    <div className="product2" style={product1Style}>
      <div className="dummy-product1">
        <img
          className="dummy-product-item"
          alt=""
          src="/rectangle-626@2x.png"
          onClick={onGotocontractor}
        />
      </div>
      <div className="product-inner2">
        <div className="contractor-name-group">
          <div className="contractor-name1">Contractor Name</div>
          <b className="roof-design4">Roof Design</b>
        </div>
      </div>
    </div>
  );
};

export default Product2;
