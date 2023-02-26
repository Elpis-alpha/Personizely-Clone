import { useCallback } from "react";
import styles from "./PersonalizedExperienceContaine.module.css";

const PersonalizedExperienceContaine = () => {
  const onButtonClick = useCallback(() => {
    window.open("http://elpis.cc/");
  }, []);

  return (
    <div className={styles.provideSection}>
      <div className={styles.inProvide}>
        <div className={styles.textPrt}>
          <div className={styles.websitePersonalization}>
            Website personalization
          </div>
          <div className={styles.providePersonalizedExperienc}>
            Provide personalized experiences for your visitors
          </div>
          <div className={styles.treatEveryVisitors}>
            Treat every visitors in a unique way based on dozens of targeting
            parameters
          </div>
        </div>
        <div className={styles.imgppr}>
          <img
            className={styles.unpersonalizedIcon}
            alt=""
            src="../unpersonalized@2x.png"
          />
          <div className={styles.tpr}>
            <div className={styles.div}>
              <div className={styles.div1}>
                <img
                  className={styles.icon114931fa572svg}
                  alt=""
                  src="../icon-1-14931fa572svg.svg"
                />
                <div className={styles.div2}>
                  <div className={styles.visitAs}>Visit as</div>
                  <div className={styles.anonymous}>Anonymous</div>
                </div>
              </div>
              <div className={styles.div3}>
                <div className={styles.ul}>
                  <div className={styles.li}>
                    <div className={styles.companySize}>Company Size</div>
                    <div className={styles.unknown}>Unknown</div>
                  </div>
                  <div className={styles.li1}>
                    <div className={styles.companySize}>Location</div>
                    <div className={styles.unknown}>Unknown</div>
                  </div>
                  <div className={styles.li1}>
                    <div className={styles.companySize}>Industry</div>
                    <div className={styles.unknown}>Unknown</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.div5}>
                <img
                  className={styles.icon114931fa572svg}
                  alt=""
                  src="../zendesk-logo-idcswalzpn-5ab333594esvg.svg"
                />
                <div className={styles.div6}>
                  <div className={styles.visitAs1}>Visit as</div>
                  <div className={styles.zendesk}>Zendesk</div>
                </div>
              </div>
              <div className={styles.div7}>
                <div className={styles.ul1}>
                  <div className={styles.li3}>
                    <div className={styles.companySize1}>Company size</div>
                    <div className={styles.k10kEmployees}>1K-10K employees</div>
                  </div>
                  <div className={styles.li4}>
                    <div className={styles.companySize1}>Location</div>
                    <div className={styles.k10kEmployees}>San Francisco</div>
                  </div>
                  <div className={styles.li5}>
                    <div className={styles.companySize1}>Industry</div>
                    <div className={styles.k10kEmployees}>SAAS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <div className={styles.learnMore}>Learn more</div>
        </button>
      </div>
    </div>
  );
};

export default PersonalizedExperienceContaine;
