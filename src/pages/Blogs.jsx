import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";
import greenline from "./resources/gr.svg";
import redline from "./resources/gren.svg";
import fb from "./resources/blogfb.svg";
import insta from "./resources/bloginsta.svg";
import twitter from "./resources/blogtwitter.svg";
import image from "./resources/imgturk.jfif";
import tick from "./resources/blogtick.svg";
import image2 from "./resources/imgsyr.webp";
import Footer from "./../sections/Footer";
const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <main>
        <img src={greenline} alt="greenline" className={styles.greenline} />
        <div className={styles.container}>
          <h2 className={styles.head}>
            Turkey-Syria earthquake: A long road to recovery
          </h2>
          <p className={styles["blog-para"]}>
            The earthquake has had a widespread impact, including on
            neighbouring countries Syria and Lebanon, and has left over 13.5
            million people homeless, including 2 million refugees. The disaster
            highlights the need for long-term financial, technical, and
            humanitarian support from the international community to recover
            from this tragedy.
          </p>
          <div className={styles.icons}>
            <img src={fb} alt="fb" className={styles.fb} />
            <img src={insta} alt="insta" className={styles.insta} />
            <img src={twitter} alt="twitter" className={styles.twit} />
          </div>

          <img src={image} alt="blog" className={styles.image1} />
          <h3>The scale of the disaster</h3>
          <div className={styles["blog-green"]}>
            <h4>The scale of the disaster</h4>
            <p>
              On February 6, at 04.18, a major earthquake occurred along the
              southeastern border of Turkey. The initial tremor of 7.8 magnitude
              resulted in the collapse of thousands of homes across ten
              provinces in Turkey and Syria. Approximately 12 hours later, a
              second earthquake, measuring 7.6 volumes, hit the Kahramanmaraş
              province.
            </p>
          </div>
          <div className={styles["blog-para1"]}>
            <p style={{ textAlign: "justify", padding: ".5rem 0" }}>
              Although earthquakes of this scale are not entirely unprecedented
              in this region of Turkey, given its location near two fault lines,
              the recent 7.6 and 7.8 magnitude earthquakes in have highlighted
              the country’s lack of preparedness for such disasters, as reported
              by the U.S. Geological Survey. The quakes resulted in catastrophic
              collapses due to the vulnerability of the structures in the
              region, with buildings made of unreinforced brick masonry and
              low-rise concrete frames being at the highest risk. The USGS warns
              that these materials are too stiff to withstand intense shaking
              and are more likely to buckle, leading to collapses. Despite the
              existence of better building codes, the region has yet to
              routinely experience earthquakes of this magnitude, making the
              structures particularly susceptible to damage.
            </p>
          </div>

          <img src={image2} alt="blog" className={styles.image2} />
        </div>
        <img src={redline} alt="greenline" className={styles.redline} />
      </main>

      <Footer />
    </section>
  );
};

export default Blog;
