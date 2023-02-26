import { useCallback } from "react";
import Header from "../components/Header";
import ConversionContainer from "../components/ConversionContainer";
import TrustedContainer from "../components/TrustedContainer";
import EngagementContainer from "../components/EngagementContainer";
import PersonalizedExperienceContaine from "../components/PersonalizedExperienceContaine";
import IntegrationSection from "../components/IntegrationSection";
import StartConversionForm from "../components/StartConversionForm";
import ProductFooter from "../components/ProductFooter";
import styles from "./Personizely.module.css";

const Personizely = () => {
  const onDownIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='powerfulSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.personizely}>
      <Header />
      <div className={styles.heroSection}>
        <div className={styles.hInner}>
          <ConversionContainer />
          <TrustedContainer />
        </div>
        <button className={styles.downIcon} onClick={onDownIconClick}>
          <div className={styles.downBtn}>
            <div className={styles.down8e55b50dsvg}>
              <img
                className={styles.down8e55b50dsvgIcon}
                alt=""
                src="../down8e55b50dsvg.svg"
              />
            </div>
          </div>
        </button>
      </div>
      <EngagementContainer />
      <PersonalizedExperienceContaine />
      <IntegrationSection />
      <StartConversionForm />
      <ProductFooter />
    </div>
  );
};

export default Personizely;
