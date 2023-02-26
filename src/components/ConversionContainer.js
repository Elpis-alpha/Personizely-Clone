import { useCallback } from "react";
import styles from "./ConversionContainer.module.css";

const ConversionContainer = () => {
  const onA3Click = useCallback(() => {
    window.open("http://elpis.cc/");
  }, []);

  const onA4Click = useCallback(() => {
    window.open("http://elpis.cc/");
  }, []);

  return (
    <div className={styles.hTop}>
      <div className={styles.htLeft}>
        <div className={styles.div}>
          <div className={styles.aConversionMarketing}>
            A conversion marketing platform
          </div>
          <div className={styles.turnYourWebsite}>
            Turn your website into a conversion machine
          </div>
          <div className={styles.popupsWebsitePersonalizatio}>
            Popups, Website Personalization and A/B Testing in one suite.
          </div>
        </div>
        <div className={styles.div1}>
          <button className={styles.a} onClick={onA3Click}>
            <div className={styles.freeTrial}>Free trial</div>
          </button>
          <button className={styles.a1} onClick={onA4Click}>
            <div className={styles.bookADemo}>Book a demo</div>
          </button>
        </div>
        <div className={styles.daysFreeTrial}>
          14 days free trial · No credit card required
        </div>
      </div>
      <div className={styles.div2}>
        <img className={styles.svgIcon} alt="" src="../svg1.svg" />
      </div>
    </div>
  );
};

export default ConversionContainer;
