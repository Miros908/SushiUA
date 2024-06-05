import { memo } from "react";
import "../ProductCard/productDetails.scss";
function ProdDetails({ weight, quantity, className }) {
  const Name = "prodDetails" + " " + className;
  return (
    <div className={Name}>
      <div className="weight">{weight}г</div>
      <div className="point"></div>
      <div className="quantity">{quantity}шт</div>
    </div>
  );
}

export default memo(ProdDetails);
