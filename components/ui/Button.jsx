export function Button({ children, disabled, className, ...rest }) {
  const disabledClassNames = "disabled";
  return (
    <button
      className={`btn py-3 ${className ? className : ""} ${disabled ? disabledClassNames : ""}`}
      {...rest}
    >
      {disabled ? "Please wait..." : children}
    </button>
  );
}

export function PrimaryButton({ children, ...rest }) {
  return (
    <Button className="btn-primary-local" {...rest}>
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, ...rest }) {
  return (
    <Button className={"btn-secondary-local"} {...rest}>
      {children}
    </Button>
  );
}
