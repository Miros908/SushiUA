import "./saleItem.scss";
export default function SaleItem({ header, date, saleUrl, alt, info }) {
  return (
    <div className="saleItem-container">
      <div className="saleItem__header">{header}</div>
      <div className="saleItem__date">Акція діє:{date}</div>
      <img className="saleItem__img" src={saleUrl} alt={alt} />
      <p className="saleItem__info">{info}</p>
    </div>
  );
}
