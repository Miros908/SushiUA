import "./button.scss";

export default function Button({ children, ...rest }) {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
}
