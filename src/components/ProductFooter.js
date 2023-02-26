import { useCallback } from "react";
import styles from "./ProductFooter.module.css";

const ProductFooter = () => {
  const onFacebook379f937asvgClick = useCallback(() => {
    window.open("https://elpis.cc/contact");
  }, []);

  const onTwitter7806cd1esvgClick = useCallback(() => {
    window.open("https://elpis.cc/contact");
  }, []);

  const onLinkedind5a3eb8asvgClick = useCallback(() => {
    window.open("https://elpis.cc/contact");
  }, []);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navBar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.footerSection}>
      <div className={styles.div}>
        <div className={styles.nav}>
          <div className={styles.divParent}>
            <div className={styles.div1}>
              <div className={styles.product}>Product</div>
              <div className={styles.ul}>
                <div className={styles.widgets}>Widgets</div>
                <div className={styles.widgets}>Website personalization</div>
                <div className={styles.widgets}>Integrations</div>
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.solutions}>Solutions</div>
              <div className={styles.ul1}>
                <div className={styles.widgets}>List building</div>
                <div className={styles.widgets}>Promotions</div>
                <div className={styles.widgets}>Cart abandonment</div>
                <div className={styles.widgets}>Cross and upsell</div>
                <div className={styles.widgets}>Personalization</div>
                <div className={styles.widgets}>Surveys</div>
              </div>
            </div>
          </div>
          <div className={styles.divGroup}>
            <div className={styles.div1}>
              <div className={styles.solutions}>Company</div>
              <div className={styles.ul2}>
                <div className={styles.aboutUs}>About us</div>
                <div className={styles.aboutUs}>Affiliate program</div>
                <div className={styles.aboutUs}>Pricing</div>
                <div className={styles.aboutUs}>Blog</div>
                <div className={styles.aboutUs}>Helpdesk</div>
                <div className={styles.aboutUs}>Book a demo</div>
                <div className={styles.aboutUs}>Compare to competitors</div>
              </div>
            </div>
            <div className={styles.div1}>
              <div className={styles.solutions}>Legal</div>
              <div className={styles.ul2}>
                <div className={styles.aboutUs}>Terms</div>
                <div className={styles.aboutUs}>Privacy</div>
                <div className={styles.aboutUs}>GDPR</div>
              </div>
              <div className={styles.div5}>
                <div className={styles.solutions}>Follow us</div>
                <div className={styles.div6}>
                  <button
                    className={styles.facebook379f937asvg}
                    onClick={onFacebook379f937asvgClick}
                  >
                    <img
                      className={styles.facebook379f937asvgIcon}
                      alt=""
                      src="../facebook379f937asvg.svg"
                    />
                  </button>
                  <button
                    className={styles.facebook379f937asvg}
                    onClick={onTwitter7806cd1esvgClick}
                  >
                    <img
                      className={styles.facebook379f937asvgIcon}
                      alt=""
                      src="../twitter7806cd1esvg.svg"
                    />
                  </button>
                  <button
                    className={styles.facebook379f937asvg}
                    onClick={onLinkedind5a3eb8asvgClick}
                  >
                    <img
                      className={styles.facebook379f937asvgIcon}
                      alt=""
                      src="../linkedind5a3eb8asvg.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div7}>
          <div className={styles.div8}>
            <img
              className={styles.logoWhite375703099aBadb5bf5Icon}
              alt=""
              src="../logo-white-375703099a-badb5bf557svg.svg"
            />
            <div className={styles.personizelyAllRights}>
              © 2022 Personizely. All rights reserved.
            </div>
          </div>
          <button className={styles.button} onClick={onButton1Click}>
            <div className={styles.goToTop}>Go to top</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFooter;
