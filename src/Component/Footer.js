import React, { Component } from "react";
import "../Assets/css/footer.css";
import gdsc_logo from "../Assets/img/imgs/gdsc_logo.png";
import { Link } from "react-router-dom";

//Firebase
import { db } from "../config/firebase";
import { rtdb } from "../config/firebase";
import { doc, setDoc, onSnapshot, snapshotEqual, connectFirestoreEmulator } from "firebase/firestore";
import { ref, child, push, update, get, onValue } from "firebase/database";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  handleEmailChange = (event) => {
    event.preventDefault();
    this.setState({ email: event.target.value });
  };


  async subscribe(event) {
    event.preventDefault();

    console.log("subscribe working");

    await get(child(ref(rtdb), 'subscribers')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);

        for (const i in data) {
          if (data[i].email === this.state.email) {
            console.log("Already Subscribed");
            // await this.setState({ exist: true });
          }
          else {
            console.log("Not Subscribed");

            const newPostKey = push(child(ref(rtdb), 'subscribers')).key;

            update(ref(rtdb, 'subscribers'), {
              [newPostKey]: {
                key: newPostKey,
                email: this.state.email,
              }
            });
            console.log("Subscribed");
          }
        }
      }
      else {
        console.log("No data available");
        console.log("Creating data...");

        const newPostKey = push(child(ref(rtdb), 'subscribers')).key;

        update(ref(rtdb, 'subscribers'), {
          [newPostKey]: {
            key: newPostKey,
            email: this.state.email,
          }
        });
        console.log("Subscribed");
      }
    });

    // await console.log(this.state.exist);

    // if (this.state.exist === false) {
    //   const newPostKey = await push(child(ref(rtdb), 'subscribers')).key;

    //   update(ref(rtdb, 'subscribers'), {
    //     [newPostKey]: {
    //       key: newPostKey,
    //       email: this.state.email,
    //     }
    //   });
    //   console.log("Subscribed");
    // }


    //  let docdata = null;

    // const emailexist = onSnapshot(doc(db, "subscribers", this.state.email), (doc) => {
    //   console.log("Current data: ", doc.data());
    //   docdata = doc.data();
    // });

    // if (docdata === undefined) {
    //   console.log("Email does not exist");

    //   const newPostKey = push(child(ref(rtdb), 'subscribers')).key;

    //   await update(ref(rtdb, 'subscribers'), {
    //     [newPostKey]: {
    //       key: newPostKey,
    //       email: this.state.email,
    //     },
    //   })
    //     .then(() => {
    //       console.log("Subribed successfully. rtdb");
    //     })
    //     .catch((error) => {
    //       console.log("Error while subscribing: " + error);
    //     });

    //   const docRef = doc(db, "subscribers", this.state.email);
    //   await setDoc(docRef, {
    //     email: this.state.email,
    //     key: newPostKey,
    //   })
    //     .then(() => {
    //       console.log("Subribed successfully. rtdb");
    //     })
    //     .catch((error) => {
    //       console.log("Error: ", error);
    //     });
    // }
    // else {
    //   console.log("Email already exists");

    //   await onValue(ref(rtdb, 'subscribers/' + docdata.key), (snapshot) => {
    //     const data = snapshot.val();

    //     if (data && data.email === this.state.email) {
    //       console.log("Email already exists in rtdb");
    //     }
    //     else {
    //       update(ref(rtdb, 'subscribers/'), {
    //         [docdata.key]: {
    //           key: docdata.key,
    //           email: this.state.email,
    //         }
    //       })
    //     }
    //   });
    // }
  }


  render() {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="/">
                      <img src={gdsc_logo} className="img-fluid" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text text-left">
                    <p className="text-left">
                    Google Developer Student Clubs (GDSC) is a global program by Google,
                     empowering students to solve real-world problems through technology,
                      community building, and skill development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 useful-links">
                <div className="footer-widget">
                  <div className="footer-widget-heading useful">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="footer-link">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/teams">Team</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <a href="https://gdsc.community.dev/chameli-devi-group-of-institutions-indore-india/">
                        Join Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading useful">
                    <h3>GDSC Departments</h3>
                  </div>
                  <ul className="footer-link">
                    <li>
                      <a>Technical</a>
                    </li>
                    <li>
                      <a>Design</a>
                    </li>
                    <li>
                      <a>Content</a>
                    </li>
                    <li>
                      <a>Event & Outreach</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50 subscribe">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Enter email address here..."
                        onChange={this.handleEmailChange}
                      />
                      <button onClick={this.subscribe}>Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
