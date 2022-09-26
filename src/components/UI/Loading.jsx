import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingSection}>
      <CircularProgress size={100} />
    </div>
  );
};

export default Loading;
