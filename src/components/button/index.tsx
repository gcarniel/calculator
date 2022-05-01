import styles from "../../Button.module.css";

interface ButtonProps {
  type: "number" | "string";
  children: any;
  onClick: (value: any) => void;
}

function Button({ type, children, onClick }: ButtonProps) {
  return (
    <div className={styles.button}>
      <button onClick={() => (onClick ? onClick(children) : null)}>
        {children}
      </button>
    </div>
  );
}

export default Button;
