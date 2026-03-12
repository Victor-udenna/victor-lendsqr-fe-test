import "./ButtonStyle.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  disabled,
  className = "",
  ...props
}) => {
  return (
    <button className={`btn ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
