import { useState } from "react";
import { items } from "./Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../../styles/Bootstrap.module.css";

export default function CarouselComponent() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.main}>
      <div className={styles.buttonGroup}>
        <button className={styles.juiceBtn}>Juice</button>
        <button className={styles.btn}>Shots</button>
        <button className={styles.btn}>Packs</button>
        <button className={styles.btn}>
          <img src="./grid.png" width={30} alt="icon" />
        </button>
      </div>
      <Carousel
        className={styles.carousel_container}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {bootstrap.map((item: any) => (
          <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
            <img src={item.imageUrl} alt="slides" />
            <Carousel.Caption className={styles.caption}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {/* <button className="btn btn-danger">Order now</button> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
