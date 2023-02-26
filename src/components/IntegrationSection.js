import { useCallback } from "react";
import styles from "./IntegrationSection.module.css";

const IntegrationSection = () => {
  const onA5Click = useCallback(() => {
    window.open("https://elpis.cc/");
  }, []);

  return (
    <div className={styles.integrateSection}>
      <div className={styles.div}>
        <div className={styles.integrations}>Integrations</div>
        <div className={styles.integrateIntoYour}>
          Integrate into your marketing funnel
        </div>
        <div className={styles.aSeamlessWorkflow}>
          A seamless workflow with the tools you already use.
        </div>
      </div>
      <img
        className={styles.integrationsHomeA25b06e86e1Icon}
        alt=""
        src="../integrations-home-a25b06e86e-1@2x.png"
      />
      <button className={styles.a} onClick={onA5Click}>
        <div className={styles.seeAllIntegrations}>See all integrations</div>
      </button>
    </div>
  );
};

export default IntegrationSection;
