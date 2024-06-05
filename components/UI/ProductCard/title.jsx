import "./title.scss";
export default function Title({ title, className }) {
  const titleClass = "title" + " " + (className || "");
  return <div className={titleClass}>{title}</div>;
}
