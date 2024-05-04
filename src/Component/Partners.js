import React, { Component } from "react";
import "../Assets/css/partners.css";
import "aos/dist/aos.css";
export default class Partners extends Component {
  render() {
    const data = [
      {
        title: "Aptos",
        img: require("../Assets/img/partners/aptos.png"),
        link: "https://www.aptos.com/",
      },
      {
        title: "Shardeum",
        img: require("../Assets/img/partners/shardeum.png"),
        link: "https://shardeum.org/",
      },
      {
        title: "Kudo Money",
        img: require("../Assets/img/partners/kudo.jpeg"),
        link: "https://kudo.money/",
      },
      {
        title: "Move Developer",
        img: require("../Assets/img/partners/move_developer.jpeg"),
        link: "https://movedevelopers.com/",
      },
      {
        title: "GDG Indore",
        img: require("../Assets/img/partners/gdg_indore.png"),
        link: "https://gdg.community.dev/gdg-indore/",
      },
    ];
    return (
      <>
        <div className="partners">
          <div
            className="partners-title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Partners & Sponsors
          </div>
          <div className="cards-list">
            {data.map((item, index) => {
              return (
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <div className="card_image">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.img} alt={item.title} />
                    </a>
                  </div>
                </div>
              );
            })}
            {/* <div className="card">
            <div className="card_image">
              <a href="https://freakydiodes.com" target="_blank" rel="noopener noreferrer">
              <img className="diode_logo" src={logo_diode} alt="Freakydiodes" rel="noopener noreferrer"  />
              </a>
            </div>
          </div> */}
            {/* <div className="card">
            <div className="card_image">
              <img src={semikolan} />
            </div>
          </div> */}
            {/* <div className="card">
            <div className="card_image">
              <img src={semikolan} />
            </div>
          </div> */}
          </div>
        </div>
      </>
    );
  }
}
