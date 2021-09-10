import s from "./Button.module.css";

function Button({ onClick, buttonName, type, disabled }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={disabled ? s.disabled : s.button}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}

export { Button };
