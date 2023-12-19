import { useCallback, useMemo } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ propTop, propLeft }) => {
  const product2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const navigate = useNavigate();

  const onAftertap = useCallback(() => {
    navigate("/after-tap-item");
  }, [navigate]);


  return (
    <div className="product3" style={product2Style}>
      <div className="dummy-product2">
        <img className="image-5-icon" onClick={onAftertap} alt="" src="/image-5@2x.png" />
      </div>
      <div className="product-inner3">
        <div className="tma-2-hd-wireless-parent">
          <div className="tma-2-hd-wireless">TMA-2 HD Wireless</div>
          <b className="rs-1500">Rs. 1.500</b>
        </div>
      </div>
      <div className="product-inner4">
        <div className="vector-parent4">
          <img className="vector-icon50" alt="" src="/vector5.svg" />
          <div className="div40">011 7460875</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
