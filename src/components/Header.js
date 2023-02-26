import { useCallback } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const onA1Click = useCallback(() => {
    window.open("http://elpis.cc/");
  }, []);

  const onA2Click = useCallback(() => {
    window.open("http://elpis.cc/");
  }, []);

  return (
    <div className={styles.navBar} data-scroll-to="navBar">
      <img className={styles.svgIcon} alt="" src="../svg.svg" />
      <div className={styles.ul}>
        <a className={styles.product} href="http://elpis.cc/">
          Product
        </a>
        <a className={styles.product}>Solutions</a>
        <a className={styles.product} href="http://elpis.cc/">
          Pricing
        </a>
        <a className={styles.product} href="http://elpis.cc/">
          Blog
        </a>
      </div>
      <div className={styles.div}>
        <a className={styles.a} href="http://elpis.cc/">
          <div className={styles.logIn}>Log in</div>
        </a>
        <button className={styles.a1} onClick={onA1Click}>
          <div className={styles.freeTrial}>Free trial</div>
        </button>
      </div>
      <div className={styles.div1}>
        <button className={styles.a2} onClick={onA2Click}>
          <div className={styles.freeTrial}>Free trial</div>
        </button>
        <div className={styles.menu}>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
