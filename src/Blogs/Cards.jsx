import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./Cards.module.css";

const cards = [
  {
    id: 1,
    img: "./Images/download.jpg",
    desc: "Turkey-Syria earthquake: A long road to recovery",
    title: "Turkey-Syria earthquake",
  },
  {
    id: 2,
    img: "./Images/download1.jpg",
    desc: "Social,Ecomomic and Political transformation in  developming world",
    title: "International Development",
  },
  {
    id: 3,
    img: "./Images/download2.jpg",
    desc: "The wrong kind of net zero: Boosting emissions at home while paying to reduce them abroad",
    title: "Climate and Environment",
  },
  {
    id: 4,
    img: "./Images/download3.jpg",
    desc: "Closing the wage gap between citizens and foreign labour: What can Saudi Arabia learn from Singapore?",
    title: "Inequality",
  },
  {
    id: 5,
    img: "./Images/download4.jpg",
    desc: "Does digitalised social protection worsen exclusion for women?",
    title: "Digitilization and ICT",
  },
  {
    id: 6,
    img: "./Images/download5.jpg",
    desc: "How inadequate sanitation in rural India impacts women’s safety and security",
    title: "Health and Development",
  },
];
function Blogs() {
  const nav = useNavigate();

  function handleClick(index) {
    const itemId = cards[index].id;
    if (itemId === 1) {
      nav("/Carddisplaydata");
    }
    if (itemId === 2) {
      nav("/Carddisplaydata2");
    }
    if (itemId === 3) {
      nav("/Carddisplaydata3");
    }
    if (itemId === 4) {
      nav("/Carddisplaydata4");
    }
    if (itemId === 5) {
      nav("/Carddisplaydata5");
    }
    if (itemId === 6) {
      nav("/Carddisplaydata6");
    }
  }
  return (
    <div className={styles.blogssec}>
      <h1>Blogs</h1>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <article onClick={() => handleClick(index)}>
            {/* {setData(key)} */}
            <div className={styles["article - wrapper"]}>
              <figure>
                <img src={card.img} alt="image" />
              </figure>
              <div className={styles["article - body"]}>
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
                <a href="#" className={styles["read - more"]}>
                  Read more{" "}
                  <span className={styles["sr-only"]}>
                    about this is some title
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
