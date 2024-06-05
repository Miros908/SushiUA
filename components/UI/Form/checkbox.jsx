import "../UI/checkbox.scss";
export default function Checkbox() {
  return (
    <label className="checkbox">
      <input type="checkbox" class="checkbox-input" />
      <span class="tick"></span>
    </label>
  );
}
