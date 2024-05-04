import React from "react";
import "../Assets/css/eventcard.css";
import flutterforward from "../Assets/img/imgs/flutterforward.png";
import flutterfun from "../Assets/img/imgs/flutterfun.png";
import gcsj_swags from "../Assets/img/imgs/gcsj_swags.png";
import gcsj_info from "../Assets/img/imgs/gcsj_info.png";
import gdsc_info_session23 from "../Assets/img/imgs/gdsc_info_session23.png";
import android from "../Assets/img/imgs/android.png";
import backpacking from "../Assets/img/imgs/backpacking.png";
import blockchain from "../Assets/img/imgs/blockchain.png";
import codeology from "../Assets/img/imgs/codeology.png";
import indore_blockchain from "../Assets/img/imgs/indore_blockchain.png";
import flutterforward_extended1 from "../Assets/img/imgs/flutterforward_extended1.png";
import flutterforward_extended2 from "../Assets/img/imgs/flutterforward_extended2.png";
import getting_started_gccp from "../Assets/img/imgs/getting_started_gccp.png";
import gsoc_connect from "../Assets/img/imgs/gsoc_connect.png";
import hacktoberfest from "../Assets/img/imgs/hacktoberfest.png";
import link2git from "../Assets/img/imgs/link2git.png";
import sol_challenge from "../Assets/img/imgs/sol_challenge.png";
import sol_challenge_info from "../Assets/img/imgs/sol_challenge_info.png";
import webdev1 from "../Assets/img/imgs/webdev1.png";
import webdev2 from "../Assets/img/imgs/webdev2.png";

import Footer from "./Footer";
import NavBarcomp from "./NavBar";
const EventCard = () => {
  return (
    <>
      <div className="event-page">
        <NavBarcomp />
        <div className="container major-event">
          <div class="row major-event-item">
            <div class="col">
              <div className="event-image-page">
                <lottie-player
                  src="https://assets3.lottiefiles.com/packages/lf20_L72m3bQKrm.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
            <div className="col event-page-landing">
              <div className="event-page-info">
                <div className="event-page-title">Unleash your Potential</div>
                <div className="event-page-description">
                Our year-round events and workshops are designed to help 
                you develop new skills by putting your knowledge and 
                talent to the test. 
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="event-section-title">Major Events</div>


        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={gcsj_swags} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>GCSJ Swags Distribution</h3>
              </div>
              <div className="description text-start">
                <p>
                GCSJ Swags Distribution event on GDSC-CDGI marks the successful completion 
                of distributing exclusive swags to GCSJ members. Celebrating community engagement,
                 it showcases GDSC's commitment to fostering learning and camaraderie among tech enthusiasts.
                </p>
              </div>
              <div className="know-more text-start">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-gcsj-swags-distribution/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>GSoc Connect</h3>
              </div>
              <div className="description text-end">
                <p>
                  Google Summer of Code (GSoC) is a global, online program
                  focused on bringing new contributors into open source software
                  development. You get the chance to interact with the greatest
                  developers in the world.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-gsoc-connect/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={gsoc_connect} className="event-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={flutterfun} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Flutter Fun</h3>  
              </div>
              <div className="description text-start">
                <p>
                Dive deep into Flutter app development guided by a passionate female expert. 
                This empowering session explored creating beautiful and functional mobile apps
                 using Flutter's robust framework.
                </p>
              </div>
              <div className="know-more text-start">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-school-of-data-science-and-forecasting-indore-presents-flutter-fun/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Decode the Solution</h3>
              </div>
              <div className="description text-end">
                <p>
                Unleash your problem-solving skills! The Google Solution Challenge encouraged innovative 
                solutions to real-world issues using Google Cloud technologies. 
                Refine your skills and make a positive impact.
                </p>
              </div>
              <div className="know-more">
              <a href="https://gdsc.community.dev/events/details/developer-student-clubs-shri-vaishnav-vidyapeeth-vishwavidyalaya-indore-presents-decode-the-solution/">
                <button class="know-more-btn-small">Know More</button>
              </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={sol_challenge} className="event-image" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={link2git} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Link2Git</h3>
              </div>
              <div className="description text-start">
                <p>
                Conquer version control with confidence! This workshop equipped participants 
                with essential GitHub skills, from creating repositories to 
                collaborating effectively on projects.
                </p>
              </div>
              <div className="know-more">
              <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-link2git-hands-on-workshop/">
                <button class="know-more-btn-small">Know More</button>
              </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Hacktober Fest 2023</h3>
              </div>
              <div className="description text-end">
                <p>
                  Hacktoberfest, the biggest event in Hacktoberfest is open to
                  register now! We have a lot more planned for the fest and it's
                  time you all tie up your seatbelts and join us on the ride.
                </p>
              </div>
              <div className="know-more">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-hacktoberfest/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={hacktoberfest} className="event-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={backpacking} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Backpacking India</h3>
              </div>
              <div className="description text-start">
                <p>
                Build your own blockchain project! This hands-on workshop, powered by Shardeum, 
                guided attendees through 
                deploying their very first smart contract, laying the
                 foundation for blockchain exploration.
                </p>
              </div>
              <div className="know-more">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-backpacking-india/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Indore Blockchain Days</h3>
              </div>
              <div className="description text-end">
                <p>
                Dive into the future of web3! This immersive event, featuring Aptos, 
                explored web3 DApp building and unlocked the vast 
                opportunities within the decentralized web. 
                </p>
              </div>
              <div className="know-more">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-indore-blockchain-days/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={indore_blockchain} className="event-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={gcsj_info} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Cloud Study James info Session</h3>
              </div>
              <div className="description text-start">
                <p>
                "Join Cloud Study James for an info session on cloud computing, 
                where he shares insights and strategies for leveraging cloud platforms. Reflecting GDSC's commitment 
                to cloud education, this event equips participants with essential skills for the digital age.
                </p>
              </div>
              <div className="know-more">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-cloud-study-jams-info-session/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>GDSC Info Session 23-24</h3>
              </div>
              <div className="description text-end">
                <p>
                GDSC Info Session 23-24 to learn about upcoming events, initiatives,
                 and opportunities for tech enthusiasts. 
                Reflecting GDSC's vibrant community, this session provides 
                valuable insights and fosters connections among members
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-gdsc-info-session-2023-24/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={gdsc_info_session23} className="event-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={flutterforward} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Flutter Forward</h3>
              </div>
              <div className="description text-start">
                <p>
                Embark on a journey into the world of Flutter with 
                Raman Jaquez, an expert in mobile app development. 
                GDSC's dedication to skill-building and innovation                 
                shines through as participants explore the versatility of 
                Flutter in building dynamic applications.
                </p>
              </div>
              <div className="know-more">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-flutter-forward/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Flutter Forward Extended - 1</h3>
              </div>
              <div className="description text-end">
                <p>
                Join Flutter Forward Extended - 1 for an in-depth exploration of
                 Flutter's capabilities and best practices. Reflecting GDSC's commitment to continuous learning, 
                this event empowers developers to harness the full potential of Flutter for app development.
                </p>
              </div>
              <div className="know-more">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-flutter-forward-extented-gdsc-cdgi/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={flutterforward_extended1} className="event-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={flutterforward_extended2} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Flutter Forward Extended - 2</h3>
              </div>
              <div className="description text-start">
                <p>
                Continue your Flutter journey with Flutter Forward
                 Extended - 2, where experts delve deeper into advanced topics and techniques. Reflecting GDSC's dedication 
                to excellence, this event provides a platform for honing skills and staying updated on Flutter trends.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-flutter-forward-extended/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>WebDev Simplified (Day 2)</h3>
              </div>
              <div className="description text-end">
                <p>
                Immerse yourself in web development with React and Angular on Day 1 of this engaging workshop series. Reflecting GDSC's commitment to frontend technologies,
                 this event equips participants with the foundational knowledge needed for modern web development.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-webdev-simplified-day-02/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={webdev2} className="event-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={webdev1} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>WebDev Simplified (Day 1)</h3>
              </div>
              <div className="description text-start">
                <p>
                Continue your web development journey with React and Angular
                 on Day 2, where participants delve deeper into advanced concepts and techniques. Reflecting GDSC's dedication
                 to skill-building, this event empowers developers to create dynamic and interactive web applications.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-webdev-simplified-day-1/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Building BlockChain</h3>
              </div>
              <div className="description text-end">
                <p>
                Build your understanding of blockchain technology with 
                a workshop on building blockchain applications, powered by Shardeum. Reflecting GDSC's commitment to emerging 
                technologies, this hands-on session explores the principles and applications of decentralized systems.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-building-blockchain/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={blockchain} className="event-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={sol_challenge_info} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Solution Challenge Info-Session</h3>
              </div>
              <div className="description text-start">
                <p>
                Get insights into the Google Solution Challenge at the Info-Session 22-23, 
                where participants learn about the competition format, themes, and submission guidelines. 
                Reflecting GDSC's support for innovation, this event inspires participants to tackle real-world challenges with creative solutions
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-solution-challenge-info-session/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Getting Started with Google Cloud</h3>
              </div>
              <div className="description text-end">
                <p>
                Get started with Google Cloud at this introductory session, 
                where participants learn about key features and services. Reflecting GDSC's commitment 
                to cloud education, this event empowers developers to leverage 
                the power of Google Cloud for their projects.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-getting-started-with-google-cloud/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={getting_started_gccp} className="event-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="container major-event">
          <div class="row major-event-item-second">
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={codeology} className="event-image" />
              </div>
            </div>
            <div class="col major-event-info">
              <div className="title text-start">
                <h3>Codeology</h3>
              </div>
              <div className="description text-start">
                <p>
                Participate in Codeology, GDSC's coding competition
                 at CDGI, where participants showcase their coding skills and problem-solving abilities. Reflecting GDSC's passion 
                for coding and competition, this event fosters a spirit of collaboration and camaraderie among participants.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-codeology/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container major-event">
          <div class="row major-event-item-first">
            <div class="col major-event-info">
              <div className="title text-end">
                <h3>Android Development using Kotlin</h3>
              </div>
              <div className="description text-end">
                <p>
                Embark on a 4-day journey into Android development using Kotlin,
                 where participants learn to build robust and modern Android applications. Reflecting GDSC's
                 commitment to mobile development, this workshop equips participants with essential skills for app creation.
                </p>
              </div>
              <div className="know-more text-end">
                <a href="https://gdsc.community.dev/events/details/developer-student-clubs-chameli-devi-group-of-institutions-indore-presents-android-development-using-kotlin-2022-09-18/">
                  <button class="know-more-btn-small">Know More</button>
                </a>
              </div>
            </div>
            <div class="col major-event-image">
              <div className="event-image-section">
                <img src={android} className="event-image" />
              </div>
            </div>
          </div>
        </div>




        <Footer />
      </div>
    </>
  );
};
export default EventCard;
