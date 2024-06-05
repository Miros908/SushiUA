import "./cardBucket.scss";
import { memo } from "react";
import config from "../../../config";
import Title from "../../../components/UI/ProductCard/title";
import Price from "../../../components/UI/ProductCard/price";
import ProdDetails from "../../../components/UI/ProductCard/productDetails";
import Counter from "../../../components/UI/Other/counter";

export default memo(function CardBucket({
  image,
  title,
  weight,
  quantity,
  price,
}) {
  const { currency } = config;
  return (
    <div className="container">
      <div className="title-img-container">
        <img src={image} className="cardBucket-img"></img>
        <div className="details-container">
          <Title title={title} className="title-in-bucket" />
          <ProdDetails
            weight={weight}
            quantity={quantity}
            className="prodDetailsInBucket"
          />
        </div>
      </div>
      <div className="price-counter-container">
        <Price price={price} currency={currency} className="priceInBucket" />
        <Counter />
      </div>
    </div>
  );
});
