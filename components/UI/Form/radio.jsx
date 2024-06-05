import "../UI/radio.scss";
export default function Radiocheck() {
  return (
    <label className="radio">
      <input type="radio" className="radio-input" />
      <span className="radio-button"></span>
    </label>
  );
}
