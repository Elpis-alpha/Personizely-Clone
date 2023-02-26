import styles from "./EngagementContainer.module.css";

const EngagementContainer = () => {
  return (
    <div className={styles.powerfulSection} data-scroll-to="powerfulSection">
      <div className={styles.powerTop}>
        <div className={styles.widgets}>Widgets</div>
        <div className={styles.powerfulMarketingTools}>
          Powerful marketing tools to engage with your visitors
        </div>
        <div className={styles.createPopupBar}>
          Create popup, bar, callout and embedded widgets to drive conversion
          and sales
        </div>
      </div>
      <div className={styles.powerBottom}>
        <div className={styles.powerImage}>
          <img
            className={styles.listBuildingX25cc323af6dpnIcon}
            alt=""
            src="../list-building-x2-5cc323af6dpng@2x.png"
          />
        </div>
        <div className={styles.powerRight}>
          <div className={styles.powIii}>
            <div className={styles.everyUseCaseCovered}>
              Every use-case covered
            </div>
            <div className={styles.powerRrr}>
              <div className={styles.pitc}>
                <div className={styles.label}>
                  <div className={styles.listBuilding}>List building</div>
                  <div className={styles.list}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="../vector1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pitc}>
              <div className={styles.label}>
                <div className={styles.listBuilding}>Promotional</div>
                <div className={styles.addTask}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="../vector2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.pitc}>
              <div className={styles.label}>
                <div className={styles.listBuilding}>Cart abandonment</div>
                <div className={styles.shoppingCart}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="../vector3.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.pitc}>
              <div className={styles.label}>
                <div className={styles.listBuilding}>Surveys and forms</div>
                <div className={styles.queryBuilder}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="../vector4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.addTaskIcon} alt="" src="../add-task.svg" />
      </div>
    </div>
  );
};

export default EngagementContainer;
