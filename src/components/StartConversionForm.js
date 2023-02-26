import { useCallback } from "react";
import styles from "./StartConversionForm.module.css";

const StartConversionForm = () => {
  const onA6Click = useCallback(() => {
    window.open("https://elpis.cc/");
  }, []);

  const onA7Click = useCallback(() => {
    window.open("https://elpis.cc/");
  }, []);

  return (
    <div className={styles.startSection}>
      <img
        className={styles.centerswirl1Icon}
        alt=""
        src="../centerswirl-1@2x.png"
      />
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.getStarted}>Get started</div>
          <div className={styles.startConvertingMore}>
            Start converting more of you existing traffic right now
          </div>
        </div>
        <div className={styles.div2}>
          <button className={styles.a} onClick={onA6Click}>
            <div className={styles.getStartedFor}>Get started for free</div>
          </button>
          <button className={styles.a1} onClick={onA7Click}>
            <div className={styles.bookADemo}>Book a demo</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartConversionForm;
