import "../ProductCard/price.scss";
export default function Price({
  className,
  price,
  currency,
  oldPrice = false,
}) {
  const containerClass =
    "priceContainer" +
    " " +
    (className || "") +
    " " +
    (oldPrice ? "oldPrice" : "");
  return (
    <div className={containerClass}>
      <div className="price">{price}</div>
      <div className="currency">{currency}</div>
    </div>
  );
}
