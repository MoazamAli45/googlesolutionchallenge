import React from "react";
import img1 from "../assets/img1.png";
import medicine from "../assets/medicine.png";
import save from "../assets/save.png";
import water from "../assets/water.jfif";
import clothes from "../assets/clothes.png";
import "./Help.css";
const data = [
  {
    img: img1,
    title: "Healthy Foods",
    desc: "Provide essential nutrition to families and individuals in need through our food programs, including meal distribution, food pantries, and community gardens",
    link: "Donate Now",
  },
  {
    img: medicine,
    title: "Medicine",
    desc: "Improve access to quality healthcare and medical services, from routine checkups to emergency care, for those who are most marginalized",
    link: "Donate Now",
  },
  {
    img: save,
    title: "Save nature",
    desc: "Respond quickly and effectively to natural disasters, conflicts, and other crises to provide lifesaving assistance, including emergency shelter, medical care, and food and water.",
    link: "Donate Now",
  },
  {
    img: water,
    title: "Drinking Water",
    desc: "Ensuring the safety of drinking water involves proper treatment, testing, and monitoring to detect and eliminate harmful contaminants.",
    link: "Donate Now",
  },
  {
    img: clothes,
    title: "New Clothes",
    desc: "Looking for a way to make a meaningful contribution to your community? Consider donating clothes through our charity app. Your gently used clothing can make a big difference to someone in need.",
    link: "Donate Now",
  },
];

const Help = () => {
  return (
    <section className="help">
      <div className="help__container">
        <div className="help__content">
          <h2>Be The Change you want to see</h2>
          <p>
            At our charity, we provide a range of essential services that
            support individuals and communities in need. From providing
            nutritious meals to those experiencing food insecurity, to offering
            safe and secure shelter for the homeless.
          </p>
        </div>
        {data.map((item) => {
          return (
            <div className="help__card" key={item.title}>
              <div className="help__card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <button>
                <a href="#">{item.link}</a>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Help;
