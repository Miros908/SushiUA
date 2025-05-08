import React from "react";
import config from "../../../config";
import { formatPrice } from "../../../src/helper";
import Button from "../Button";
function Card({ value }) {
  const {
    id,
    name,
    image,
    weight,
    weightUnit = "г",
    description,
    qty,
    price,
    className,
  } = value;

  const attributes = [weight + weightUnit];
  if (qty) {
    attributes.push(qty + "шт");
  }

  return (
    <div className="product-item">
      <div className="product-item-image">
        <img src={image} alt={"Изображение - " + name} />
      </div>
      <div className="body">
        <div className="product-item-attributes">{attributes.join("-")}</div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="bottom">
          <div className="price-wrap">
            <div className="price-old">{formatPrice(priceOld)}</div>
            <div className="price">{formatPrice(price)}</div>
          </div>
          <div className="action">
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
