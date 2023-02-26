import { useMemo } from "react";
import styles from "./ContainerLogo.module.css";

const ContainerLogo = ({
  logoImageUrl,
  reviewLogoImageUrl,
  reviewText,
  propPadding,
}) => {
  const divStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.div}>
      <img
        className={styles.wixLogoB10bbde61dsvgIcon}
        alt=""
        src={logoImageUrl}
      />
      <div className={styles.div1} style={divStyle}>
        <div className={styles.div2}>
          <div className={styles.div3}>5</div>
          <img className={styles.ulIcon} alt="" src={reviewLogoImageUrl} />
        </div>
        <div className={styles.wix191}>{reviewText}</div>
      </div>
    </div>
  );
};

export default ContainerLogo;
