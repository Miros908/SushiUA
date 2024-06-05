import "./button.scss";

export default function Button({ after, before, children, ...rest }) {
  return (
    <div className="button-container">
      <button {...rest}>
        <div className="button-before">{before}</div>
        {children}
        <div className="button-after">{after}</div>
      </button>
    </div>
  );
}
