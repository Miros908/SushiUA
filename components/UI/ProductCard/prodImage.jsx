import "../ProductCard/prodImage.scss";
export default function ProdImage({ url, alt }) {
  return <img src={url} className="productImage" alt={alt} />;
}
