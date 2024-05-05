import React, { Component } from "react";
import "./../Assets/css/team.css";
import { Row } from "reactstrap";
import FAQ from "../Component/Footer.js";
import Ankur from "../Assets/img/Ankur Gupta _ Lead.jpg";
import NavBarcomp from "../Component/NavBar";
import Sir from "../Assets/img/sanjaysir.JPG";
import linkedIn from "../Assets/img/linkedin.png";
import Footer from "../Component/Footer.js";
import "aos/dist/aos.css";
export default class Teams extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const GDSCLead = [
      {
        name: "Aryan Chachra",
        role: "GDSC Lead",
        img: Ankur,
        linkedIn: "https://www.linkedin.com/in/aryan-chachra-519927232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ];
    const Leads = [
      {
        name: "Gaurav Kadaskar",
        role: "AI/Ml Team Head",
        img: require("../dot/vikas.jpg"),
        linkedIn: "https://www.linkedin.com/in/rajat-bhaskare-b40443202",
      },
      {
        name: "Mihir Jaiswal",
        role: "Management Team Head",
        img: require("../Assets/img/srajal.jpg"),
        linkedIn: "https://www.linkedin.com/in/mihir-jaiswal-322898287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Zoya Qureshi ",
        role: "Data Science Team Head",
        img: require("../Assets/img/Abhinav Bagde - Content Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/zoya28?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Aniruddh Dubge ",
        role: "Blockchain Head",
        img: require("../Assets/img/Atharva J V Mathur _ Event and Outreach Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/aniruddhdubge?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      }
    ];
    const team = [
      {
        name: "Madhur Chouhan",
        role: "Web Development",
        img: require("../Assets/img/Pulkit Dubey - App Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/madhurchouhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Adesh Katiya",
        role: "Data Science",
        img: require("../Assets/img/ss.png"),
        linkedIn: "https://www.linkedin.com/in/adeysh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Aakash Benarjee",
        role: "Social Media",
        img: require("../Assets/img/Prakrti Mankar _ Women in Tech.jpg"),
        linkedIn: "https://www.linkedin.com/in/aakash-benarjee-587049252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Anjali Bansal",
        role: "Web Development",
        img: require("../Assets/img/Abhishek Malviya _ Ml _ Cloud lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/anjali-bansal-06b047252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Bhavya Jadam",
        role: "AI/ML",
        img: require("../Assets/img/Aryan Singh _ Open Source Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/bhavya-j-755825251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Arpita Verma",
        role: "Management",
        img: require("../Assets/img/Abhishek Singh Lodhi _ UI_UX Lead.png"),
        linkedIn: "https://www.linkedin.com/in/arpita-verma-161048252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Gunjan Rathore",
        role: "Management",
        img: require("../Assets/img/Pulkit Dubey - App Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/gunjan-rathore-a00261252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Taiba khan",
        role: "Content Writer",
        img: require("../Assets/img/ss.png"),
        linkedIn: "https://www.linkedin.com/in/taiba-khan-faridi-576860172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Jayesh Panwar",
        role: "Social Media",
        img: require("../Assets/img/Prakrti Mankar _ Women in Tech.jpg"),
        linkedIn: "https://www.linkedin.com/in/jayesh-panwar-a67193277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Vikas Pal",
        role: "Social Media",
        img: require("../Assets/img/Abhishek Malviya _ Ml _ Cloud lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/vikas-pal-51b477249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Ambika Mishra",
        role: "PR & Outreach",
        img: require("../Assets/img/Aryan Singh _ Open Source Lead.jpg"),
        linkedIn: "https://www.linkedin.com/in/ambika-mishra-034169286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Sourabh Pawar",
        role: "PR & Outreach",
        img: require("../Assets/img/Abhishek Singh Lodhi _ UI_UX Lead.png"),
        linkedIn: "https://www.linkedin.com/in/sourabh-pawar-02a18724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ];

    const mentors = [
      {
        name: "Hardik Panwar",
        role: "Mentor",
        img: require("../Assets/img/rg.jpg"),
        linkedIn: "https://www.linkedin.com/in/hardikpanwar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Simran Bhalode",
        role: "Mentor",
        img: require("../Assets/img/ap.jpg"),
        linkedIn: "https://www.linkedin.com/in/simran-bhalode?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Raunek Pawar",
        role: "Mentor",
        img: require("../Assets/img/ga.jpg"),
        linkedIn: "https://www.linkedin.com/in/raunekpawar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ];

    return (
      <div className="team">
        <NavBarcomp />

        {/*left right section */}
        <div className="teamlanding" data-aos="zoom-in" data-aos-delay="300">
          <div>
            <h1 className="first-title">
              The
              <br />
              <span className="G">T</span>
              <span className="D">e</span>
              <span className="S">a</span>
              <span className="C">m</span>
            </h1>
            <h2>
              <b>Presenting Board of 2023-2024</b>
            </h2>
            {/* <div></div> */}
          </div>
        </div>
        {/*team section */}

        {/*team section */}
        {/* <div className="container"></div> */}
        <div
          className="Heading text-center mt-5"
          style={{ fontFamily: "GoogleSans-Bold" }}
          data-aos="fade-up"
        >
          <h1>Faculty Coordinator</h1>
        </div>
        <div className="speakersCardContainer mt-5" data-aos="fade-up">
          <div class="speakerCard">
            <div style={{ height: "40px" }}>
              <img class="speakerImage" alt="" src={Sir} />
            </div>
            <h5
              class="MuiTypography-root sanjay-sir jss7 MuiTypography-h5 MuiTypography-alignCenter"
              style={{ fontFamily: "GoogleSans-Bold" }}
            >
              Sanjay Kumar Sharma
            </h5>
            <span
              class="MuiTypography-root mt-4 jss7 MuiTypography-caption MuiTypography-alignCenter"
              sx="[object Object]"
              style={{ fontFamily: "GoogleSans-Light" }}
            >
              Faculty Coordinator
            </span>
            <span
              class="MuiTypography-root mt-4 jss7 MuiTypography-caption MuiTypography-alignCenter"
              sx="[object Object]"
              style={{ fontFamily: "GoogleSans-Light" }}
            >
              sksharma@rgtu.net
            </span>
          </div>
        </div>
        {/* GDSC Lead */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>GDSC Lead</h1>
        </div>
        <div className="speakersCardContainer mt-5" data-aos="fade-up">
          <div class="speakerCard">
            <div style={{ height: "40px" }}>
              <img class="speakerImage" alt="" src={Ankur} />
            </div>
            <h5
              class="MuiTypography-root mt-5 jss7 MuiTypography-h4 team-heading MuiTypography-alignCenter"
              style={{ fontFamily: "GoogleSans-Bold" }}
            >
              Aryan Chachra
            </h5>
            <span
              class="MuiTypography-root mt-2 jss7 MuiTypography-caption team-dept MuiTypography-alignCenter"
              sx="[object Object]"
              style={{ fontFamily: "GoogleSans-Light" }}
            >
              GDSC Lead
            </span>

            <div class="MuiCardActions-root MuiCardActions-spacing margin-2">
              <button class="connect-btn">
                <a href="https://www.linkedin.com/in/aryan-chachra-519927232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                  <img src={linkedIn} className="connect-icon" />
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* ---------------------MentorTeam----------------------------- */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>GDSC Mentors</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
          {mentors.map((speaker, index) => (
            <div class="speakerCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="speakerImage" alt="" src={speaker.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {speaker.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {speaker.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={speaker.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Leads */}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Fosters</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
          {Leads.map((speaker, index) => (
            <div class="speakerCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="speakerImage" alt="" src={speaker.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {speaker.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {speaker.role}
              </span>
              <br />

              <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                <button class="connect-btn">
                  <a href={speaker.linkedIn} target="_blank">
                    <img src={linkedIn} className="connect-icon" />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/*---------------------TechTeam---------------------*/}
        <div className="Heading text-center" data-aos="fade-up">
          <h1>Insiders</h1>
        </div>
        <div className="speakersCardContainer mt-5 col-md-9">
          {team.map((speaker, index) => (
            <div class="speakerCard" data-aos="fade-up">
              <div style={{ height: "40px" }}>
                <img class="speakerImage" alt="" src={speaker.img} />
              </div>

              <h5
                class="MuiTypography-root jss7 margin-2 team-heading MuiTypography-h5 MuiTypography-alignCenter"
                style={{ fontFamily: "GoogleSans-Bold" }}
              >
                {speaker.name}
              </h5>
              <span
                class="MuiTypography-root jss7 margin-1 MuiTypography-caption MuiTypography-alignCenter"
                sx="[object Object]"
                style={{ fontFamily: "GoogleSans-Light" }}
              >
                {speaker.role}
              </span>
              <br />

              <div class="MuiCardActions-root MuiCardActions-spacing">
                <div class="MuiCardActions-root margin-1 MuiCardActions-spacing">
                  <button class="connect-btn">
                    <a href={speaker.linkedIn} target="_blank">
                      <img src={linkedIn} className="connect-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
