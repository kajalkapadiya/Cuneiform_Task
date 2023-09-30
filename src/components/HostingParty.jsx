import React from "react";
import styles from "./HostingParty.module.css";

function HostingParty() {
  return (
    <div>
      <div className={styles.img0}>
        <div className={styles.imageContainer}>
          <img
            src="brewing.webp"
            alt="brewing"
            style={{ width: "100%" }}
            className={styles.blur}
          />
          <div className={styles.content}>
            <h1 className={styles.h1Font}>DISCOVER THE BREWING PROCESS</h1>
            <p className={styles.pFont}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.partypic}>
        <div className={styles.imageContainer2}>
          <img src="club1.webp" alt="party" className={`${styles.blur} ${styles.imgs}`}/>
          <div className={styles.content}>
            <h1 className={styles.h1Font}>HOSTING A PARTY?</h1>
            <p className={styles.pFont}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className={styles.btn}>
              GET BIERGUT
            </button>
          </div>
        </div>
        <div className={styles.imageContainer2}>
          <img src="club1.webp" alt="club" className={styles.blur}/>
          <div className={styles.content}> 
            <h1 className={styles.h1Font}>OWN A PUB OR BAR?</h1>
            <p className={styles.pFont}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className={styles.btn}>
              CONTACT FOR STOCKING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostingParty;
