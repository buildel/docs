import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

export const Hero = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="hero__container">
        <Heading as="h1" className="hero__title">
          Buildel
        </Heading>
        <p className='hero__subtitle'>Documentation</p>
        <p className="hero__claim">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Read docs 📖
          </Link>
        </div>
      </div>
    </header>
  );
};
