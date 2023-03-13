import { useState, useEffect, useRef } from "react";
import { items } from "../carousel/Items.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import styles from "../../../styles/Blog.module.css";

export default function Blog() {
  const [height, setHeight] = useState();
  const ref = useRef<any>();
  const { blog } = items;

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientWidth);
    }
  }, [ref.current]);

  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    600: {
      items: 3,
      itemsFit: "contain",
    },
  };

  return (
    <div className={styles.blog_main}>
      {blog.map((item: any) => (
        <div
          ref={ref}
          className={styles.item_container}
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            minHeight: height,
            height: "100%",
          }}
          key={item.id}
        >
          <div className={styles.txt_container}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.subTitle}>{item.body}</p>
            <p className={styles.plusTxt}>+</p>
          </div>
        </div>
      ))}
    </div>
  );
}
