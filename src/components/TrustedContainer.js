import ContainerLogo from "../components/ContainerLogo";
import styles from "./TrustedContainer.module.css";

const TrustedContainer = () => {
  return (
    <div className={styles.hBottom}>
      <div className={styles.trustedBy2500}>
        Trusted by 2500+ sites around the world
      </div>
      <div className={styles.hUl}>
        <ContainerLogo
          logoImageUrl="../wix-logo-b10bbde61dsvg.svg"
          reviewLogoImageUrl="../ul.svg"
          reviewText="Wix – 191 reviews"
          propPadding="8px"
        />
        <ContainerLogo
          logoImageUrl="../shopify-bc2d15f59bsvg.svg"
          reviewLogoImageUrl="../ul1.svg"
          reviewText="Shopify – 220 reviews"
        />
        <ContainerLogo
          logoImageUrl="../capterra-7cdc1ebdd5svg.svg"
          reviewLogoImageUrl="../ul2.svg"
          reviewText="Capterra – 18 reviews"
          propPadding="var(--padding-6xs) 7.515625px var(--padding-6xs) var(--padding-6xs)"
        />
      </div>
    </div>
  );
};

export default TrustedContainer;
