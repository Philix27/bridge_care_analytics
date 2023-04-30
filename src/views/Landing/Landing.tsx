import styles from "./Landing.module.scss";
import LandingNavBar from "./navbar/navbar.comp";

export const HomeLanding = () => {
  return (
    <div>
      <LandingNavBar />
      <div id="home" className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>Bridge Care Analytics</h1>

          <p className={styles.smallText}>
            Manage your thoughts and ideas from all platforms in one place.
          </p>

          {/* <a href="/docs/res.pdf" download="philix_cv">
          <div className="btn">Resume</div>
        </a> */}
        </div>
      </div>
    </div>
  );
};
