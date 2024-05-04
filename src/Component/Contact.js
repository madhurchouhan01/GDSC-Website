import React, { Component } from "react";
import "../Assets/css/contact.css";
import "../Assets/css/contactform.css";
import mapPin from "../Assets/img/map_pinBlack.png";
import mail from "../Assets/img/mailBlack.png";
import phone from "../Assets/img/phoneBlack.png";
import linkedin from "../Assets/img/linkedin.png";
import insta from "../Assets/img/instagram.png";
import github from "../Assets/img/github.png";
import discord from "../Assets/img/discord.png";
import twitter from "../Assets/img/twitter.png";
import youtube from "../Assets/img/youtube.png";
import telegram from "../Assets/img/telegram.png";
import whatsapp from "../Assets/img/whatsapp.png";

//Firebase and Firestore
import { auth, db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

export default class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      desc: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeDesc(event) {
    this.setState({ desc: event.target.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    // Add a new document in collection "cities"
    const docRef = doc(db, "contactQueries", this.state.email);
    await setDoc(docRef, {
      name: this.state.name,
      email: this.state.email,
      description: this.state.desc,
    })
      // .then(() => {
      //   alert("Contact Query Submitted Successfully!");
      // })
      .then(() => {
        console.log("Contact query created sucessfully");
        this.setState({ name: "", email: "", desc: "" });
      })
      .catch((error) => {
        console.log("Error adding document: ", error);
      });
  }

  render() {
    return (
      <>
        <div className="container" style={{ marginBottom: 50, paddingTop: 30 }}>
          <div className="screen" data-aos="fade-up">
            <div className="screen-header">
              {/* <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div> */}
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                {/* heanding */}
                <div className="app-title" style={{ fontWeight: 700 }}>
                  <span>Get in Touch</span>
                </div>

                <p className="smallTxt" style={{ fontWeight: 600 }}>
                  We are here for you! How can we help?
                </p>

                {/* form */}
                <form id="contact-form" onSubmit={this.handleSubmit}>
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        type={"text"}
                        className="app-form-control"
                        value={this.state.name}
                        placeholder="Enter your name"
                        onChange={this.handleChangeName}
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        type={"email"}
                        className="app-form-control"
                        value={this.state.email}
                        placeholder="Enter your email address"
                        onChange={this.handleChangeEmail}
                      />
                    </div>
                    <div className="app-form-group message">
                      <textarea
                        type={"text"}
                        rows={5}
                        className="app-form-control"
                        value={this.state.desc}
                        placeholder="Go ahead we are listening..."
                        onChange={this.handleChangeDesc}
                      />
                    </div>
                    <div className="app-form-group buttons">
                      {/* <button className="app-form-button">CANCEL</button> */}
                      <button
                        type="submit"
                        value={"submit"}
                        className="app-form-button"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
                {/* <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div> */}
              </div>
              <div className="screen-body-item right">
                {/* logo */}
                <div className="logo">
                  <div className="d-flex align-items-center justify-content-center">
                    <lottie-player
                      src="https://assets3.lottiefiles.com/packages/lf20_u25cckyh.json"
                      background="transparent"
                      speed="1"
                      style={{ width: "400px", height: "400px" }}
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                </div>

                {/* contact details */}
                <div className="contact-detail contact ">
                  <div className=" flex" style={{ marginBottom: "2%" }}>
                    <img
                      src={mapPin}
                      className="contactIcon"
                      style={{ color: "black" }}
                      alt="Reach us at"
                    />

                    <p className="midTxt">
                    Khandwa Road, Village Umrikheda, Near Toll booth, Indore, Madhya Pradesh 452020
                    </p>
                  </div>
                  <div className=" flex" style={{ marginBottom: "2%" }}>
                    <img
                      src={mail}
                      className="contactIcon"
                      style={{ color: "black" }}
                      alt="Email"
                    />

                    <p className="midTxt">info@cdgi.edu.in</p>
                  </div>
                  <div className=" flex" style={{ marginBottom: "2%" }}>
                    <img
                      src={phone}
                      className="contactIcon"
                      style={{ color: "black" }}
                      alt="Phone"
                    />

                    <p className="midTxt">+91-7314243600</p>
                  </div>
                </div>

                {/* connect with us */}
                <div>
                  <div className="app-form-group buttons">
                    <button className="connect-button">
                      <a
                        href="https://www.linkedin.com/company/gdsc-cdgi/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={linkedin} className="connectIcon" />
                      </a>
                    </button>

                    <button className="connect-button">
                      <a
                        href="https://www.instagram.com/gdsc_cdgi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={insta} className="connectIcon" />
                      </a>
                    </button>

                    <button className="connect-button">
                      <a
                        href="https://tr.ee/argGmzXpnu"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={discord} className="connectIcon" />
                      </a>
                    </button>

                    <button className="connect-button">
                      <a
                        href="https://tr.ee/w8qEm0VnGL"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={telegram} className="connectIcon" />
                      </a>
                    </button>
                    <button className="connect-button">
                      <a
                        href="https://chat.whatsapp.com/DfZKwjcAAoAD5z1151TK3A"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={whatsapp} className="connectIcon" />
                      </a>
                    </button>

                    <button className="connect-button">
                      <a
                        href="https://www.twitter.com/gdsc_cdgi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={twitter} className="connectIcon" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
