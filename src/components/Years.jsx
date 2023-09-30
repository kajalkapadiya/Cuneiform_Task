import React from "react";
import styles from "./Years.module.css";

function Years() {
  return (
    <section>
      <div className={styles.timeline}>
        <div className={styles.timeline_item}>
          <div className={styles.year}>1974</div>
          <div className={styles.line_image}>
            <div className={styles.line}></div>
            <img src="img1.png" alt="1974" className={styles.beerimg}/>
            <div className={styles.line}></div>
          </div>
          <div className={styles.content}>
            <p  className={styles.pSize}>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.year}>1985</div>
          <div className={styles.line_image}>
            <div className={styles.line}></div>
            <img src="img1.png" alt="1985" className={styles.beerimg}/>
            <div className={styles.line}></div>
          </div>
          <div className={styles.content}>
            <p className={styles.pSize}>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.year}>2005</div>
          <div className={styles.line_image}>
            <div className={styles.line}></div>
            <img src="img1.png" alt="2005" className={styles.beerimg}/>
            <div className={styles.line}></div>
          </div>
          <div className={styles.content}>
            <p className={styles.pSize}>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
          </div>
        </div>
        <div className={styles.timeline_item}>
          <div className={styles.year}>2021</div>
          <div className={styles.line_image}>
            <div className={styles.line}></div>
            <img src="img1.png" alt="2021" className={styles.beerimg}/>
            <div className={styles.line}></div>
          </div>
          <div className={styles.content}>
            <p className={styles.pSize}>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Years;
