import React from "react";
import styles from "./Discover.module.css";

function ContentReUse({ imageOnLeft }) {
  const cardMargin = imageOnLeft ? "margin-right" : "margin-left"; // Determine which margin to use based on image position
  return (
    <div className={styles.container}>
      {imageOnLeft ? (
        <>
          <div className={styles.image1}>
            <img src="bottle.png" alt="bottle" className={styles.imgSize}/>
          </div>
          <div className={styles.card1} style={{ [cardMargin]: "7rem" }}>
            <h3>BIERGUT</h3>
            <h1>PREMIUM LIGHT</h1>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Donec sollicitudin molestie malesuada. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Donec sollicitudin
              molestie malesuada.
            </p>
            <div className={styles.block}>
              <div>
                <h4>EXTRACT</h4>
                <span>11%</span>
              </div>
              <div>
                <h4>ALCOHOL</h4>
                <span>4%</span>
              </div>
            </div>
            <div className={styles.block}>
              <div>
                <h4>GENTAIN</h4>
                <span>20IBU</span>
              </div>
              <div>
                <h4>SERVING TEMP</h4>
                <span>6-9 Degree Celsius</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.card1} style={{ [cardMargin]: "7rem" }}>
            <h3>BIERGUT</h3>
            <h1>PREMIUM LIGHT</h1>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Donec sollicitudin molestie malesuada. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Donec sollicitudin
              molestie malesuada.
            </p>
            <div className={styles.block}>
              <div>
                <h4>EXTRACT</h4>
                <span>11%</span>
              </div>
              <div>
                <h4>ALCOHOL</h4>
                <span>4%</span>
              </div>
            </div>
            <div className={styles.block}>
              <div>
                <h4>GENTAIN</h4>
                <span>20IBU</span>
              </div>
              <div>
                <h4>SERVING TEMP</h4>
                <span>6-9 Degree Celsius</span>
              </div>
            </div>
          </div>
          <div className={styles.image1}>
            <img src="bottle2.png" alt="bottle" className={styles.imgSize} />
          </div>
        </>
      )}
    </div>
  );
}

function Discover() {
  return (
    <section>
      <div className={styles.center}>
        <h1 className={styles.title}>DISCOVER OUR NEW FLAVORS</h1>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, port titor at sem.
          Donec sollici tudin molestie malesuada.
        </p>
      </div>
      <ContentReUse imageOnLeft={true} />
      <ContentReUse imageOnLeft={false} />
    </section>
  );
}

export default Discover;
