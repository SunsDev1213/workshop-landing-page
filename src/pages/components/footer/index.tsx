import styles from "@/styles/Home.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.btnGroup}>
        <button className={styles.footerBtn}>Term & Conditions</button>
        <button className={styles.footerBtn}>Privacy Policy</button>
        <button className={styles.footerBtn}>Contact</button>
      </div>
      <div>
        <p>@ Cold Pressed Juices Ltd.</p>
      </div>
    </div>
  );
}
