import React from "react";
import styles from "./Ingredients.module.css";

function Ingredients() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <h1 className={styles.title}>FEATURES & INGREDIENTS</h1>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, port titor at sem.
          Donec sollicitudin molestie malesuada.
        </p>
      </div>
      <div className={styles.card2}>
        <div className={styles.image1}>
          <img src="bottles.png" alt="bottles" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <span>
              <img src="img1.png" alt="img1" className={styles.upperImg}/>
            </span>
            <p className={styles.par0}>
              Vestibulum ac diam sit amet uam vehicula elementum sed sit amet
              dui. Proin eget tortor risus. Nulla uis lorem ut libero malesuada
              feugiat. Mauris blandit aliquet elit.
            </p>
          </div>
          <div className={styles.content}>
            <span>
              <img src="img2.png" alt="img2" className={styles.upperImg}/>
            </span>
            <p className={styles.par0}>
              Curabitur aliquet quam id dui posuere blandit. Pellentesque in
              ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui.
            </p>
          </div>
          <div className={styles.content}>
            <span>
              <img src="img3.png" alt="img3" className={styles.upperImg}/>
            </span>
            <p className={styles.par0}>
              Donec sollicitudin molestie malesuada. Donec sollicitudin molestie
              malesuada. Nulla quis lorem ut libero malesuada feugiat. Vivamus
              suscipit tortor eget felis porttitor volutpat.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.card3}>
        <div className={styles.content}>
          <span>
            <img src="img4.png" alt="img4" className={styles.upperImg}/>
          </span>
          <p className={styles.par0}>Vestibulum ac diam sit amet quam vehicula elementum</p>
        </div>
        <div className={styles.content}>
          <span>
            <img src="img5.png" alt="img5" className={styles.upperImg}/>
          </span>
          <p className={styles.par0}>Vestibulum ac diam sit amet quam vehicula elementum</p>
        </div>
        <div className={styles.content}>
          <span>
            <img src="img6.png" alt="img6" className={styles.upperImg}/>
          </span>
          <p className={styles.par0}>Vestibulum ac diam sit amet quam vehicula elementum</p>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
