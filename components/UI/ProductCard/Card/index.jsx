import Composition from "../composition";
import Price from "../price";
import ProdImage from "../prodImage";
import ProdDetails from "../productDetails";
import Title from "../title";
import Button from "../../Button/index";
import "./card.scss";

import config from "/config";

export default function ProductCard({
  image,
  weight,
  quantity,
  title,
  classNameTitle,
  compositionList,
  classNamePrice,
  price,
  oldPrice,
  currency = config.currency,
  classNameButton,
  buttonValue = "В КОРЗИНУ",
}) {
  return (
    <div className="product-card">
      <ProdImage url={image} alt={title} />
      <div className="details-container">
        <ProdDetails weight={weight} quantity={quantity} />
        <Title title={title} className={classNameTitle} />
        <Composition compositionList={compositionList} />
      </div>
      <div className="button-price-container">
        <div className="price-container">
          <Price
            className={classNamePrice}
            price={oldPrice}
            currency={currency}
            oldPrice={true}
          />
          <Price className={classNamePrice} price={price} currency={currency} />
        </div>
        <Button className={classNameButton}>{buttonValue}</Button>
      </div>
    </div>
  );
}
