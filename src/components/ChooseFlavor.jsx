import React from "react";
import styles from "./ChooseFlavor.module.css";

function ChooseFlavor() {
  return (
    <section className={styles.container}>
      <div className={styles.image7}>
        <img src="img7.png" alt="img7" />
      </div>
      <div className={styles.contents}>
        <h1 className={styles.h1Font}>CHOOSE YOUR FLAVOUR</h1>
        <strong>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec
          rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id
          imperdiet et, porttitor at sem.
        </strong>
        <p>
          Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
          tincidunt. Cras ultricies ligula sed magna dictum porta. Cras
          ultricies ligula sed magna dictum porta. Donec sollicitudin molestie
          malesuada. Donec sollicitudin molestie malesuada. NUlla quis lorem ut
          libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
          volutpat.
        </p>
        <button className={styles.btn}>CHOOSE FOR YOURSELF</button>
      </div>
    </section>
  );
}

export default ChooseFlavor;
