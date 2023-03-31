import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import pic1 from "../assets/moazam.jpeg";
import pic2 from "../assets/kashan.png";
import pic3 from "../assets/shahabbhai.jpeg";
import pic4 from "../assets/arslan.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Donation from "./../sections/Donation";
import Footer from "./../sections/Footer";

const data = [
  {
    img: pic1,
    name: "Syed Moazam Ali",
    skill: "Frontend Web Developer",
    desc: "Bringing beautiful designs to life with elegant code.",
    linkedin: "https://www.linkedin.com/in/syedmoazamali/",
    insta: "https://www.instagram.com/syed.moazam_ali/",
    twitter: "https://twitter.com/SyedMoazamALi19",
  },
  {
    img: pic2,
    name: "Kashan Latif",
    skill: "MERN Stack Developer",
    desc: "Converting your problems into real world projects",
    linkedin: "https://www.linkedin.com/in/kashan-latif-5a8571222",
    insta: "#",
    twitter: "#",
  },
  {
    img: pic3,
    name: "Shahab Malik",
    skill: "MERN Stack Developer",
    desc: "Helping newbies to learn code.",
    linkedin: "https://www.linkedin.com/in/muhammad-shahab-malik-4264831b9/",
    insta: "https://instagram.com/m_shahab_malik?igshid=ZDdkNTZiNTM=",
    twitter: "https://twitter.com/malik_227710",
  },
  {
    img: pic4,
    name: "Arslan Niazi",
    skill: "UI/UX Designer",
    desc: "Sharing tips and insights on crafting exceptional digital experiences.",
    linkedin: "https://www.linkedin.com/in/arsalanniazi/",
    insta: "http://instagram.com/arsalanniazi__",
    twitter: "https://twitter.com/ArsalanNiazi_",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <h2 className="about-head">Meet Our Team</h2>
        <div className="about-container">
          {data.map((item) => (
            <div className="card" key={item.img}>
              <div className="about-img">
                <img src={item.img} alt="Moazam" />
              </div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <h4>{item.skill}</h4>
              <div className="about-links">
                <a href={item.linkedin} className="linkedin">
                  <LinkedInIcon />
                </a>
                <a href={item.insta} className="insta">
                  <InstagramIcon />
                </a>
                <a href={item.twitter} className="twitter">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Donation />
      <Footer />
    </>
  );
};

export default About;
