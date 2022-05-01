import styles from "../../Display.module.css";

interface DisplayProps {
  children: any;
  miniDisplay?: boolean;
}

function Display({ children, miniDisplay = false }: DisplayProps) {
  return (
    <div className={miniDisplay ? styles.mini : styles.display}>{children}</div>
  );
}

export default Display;
