import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "@/styles/Home.module.css";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerSubContainer}>
        <div className={styles.headerBtnGroup}>
          <button className={styles.headerBtn}>Products</button>
          <button className={styles.headerBtn}>Juice Clinic</button>
          <img src="/companyLogo.png" alt="logo" />
          <button className={styles.headerBtn}>About CPJ</button>
          <button className={styles.headerBtn}>Gallery</button>
          <div className={styles.headerRightDiv}>
            <button className={styles.signupBtn}>SIGN UP</button>
            <img src="./bucket.png" height={25} width={25} alt="bucket" />
          </div>
        </div>

        <div className={styles.smHeaderBtnGroup}>
          <img src="/companyLogo.png" alt="logo" width={100} />

          <button className={styles.drawerBtn} onClick={handleShow}>
            <img src="./bar.png" alt="more" width={20} height={20} />
          </button>
        </div>
      </div>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>C P J</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.drawContainer}>
            <button className={styles.headerBtn}>Sing Up</button>
            <button className={styles.headerBtn}>Products</button>
            <button className={styles.headerBtn}>Juice Clinic</button>
            <button className={styles.headerBtn}>About CPJ</button>
            <button className={styles.headerBtn}>Gallery</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
