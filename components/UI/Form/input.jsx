import "../UI/input.scss";

export default function Input({
  after,
  before,
  error = false,
  type = "text",

  ...rest
}) {
  const wrapClassName =
    "input-wrap" + (before ? " is-before" : "") + (after ? " is-before" : ""); //!!!!

  return (
    <div className={wrapClassName}>
      <div className="input-before">{before}</div>
      <input type={type} {...rest} />
      <div className="input-after">{after}</div>
    </div>
  );
}

//<Input type="text" name='alala' width={50} />
