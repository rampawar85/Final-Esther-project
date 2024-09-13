import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <h3 style={{color:'#fff'}}>Data Security</h3>
          </div>
          <div className="row">
            <p>
              Cyber security consulting services to help business assess risks,
              develop security strategy and implement best practices.
            </p>

            <p>
              <b>Threat Intelligence - </b> <br />
              Services that gather and analyze information about current and
              potential cyber threats. This helps organization's stay ahead of
              attackers by understanding their tactics and techniques.
            </p>

            <p>
              <b>Penetrating Testing -</b> <br /> Simulating cyber attacks to
              identify vulnerabilities in systems and networks before malicious
              hackers can exploit them.
            </p>

            <p>
              <b>Security Awareness Training -</b> <br /> Educating
              employees/students about cybersecurity best practices to prevent
              human errors that could lead to security breaches.
            </p>

            <p>
              <b>Workstation Security - </b> <br />
              protecting sensitive data and ensuring the integrity of your
              organization's IT infrastructure.
            </p>

            <p>
              <b>Application Security - </b> <br /> involves implementing
              measures to protect software applications from threats throughout
              their lifecycle, from development to deployment and beyond.
            </p>

            <p>
              <b>Network Security -</b> <br /> protecting the integrity,
              confidentiality, and availability of data and resources as they
              are transmitted across or accessed through networks.
            </p>

            <p>
              <b>DevSecOps -</b> <br /> is a practice that implements security
              into every phase of the software development lifecycle.
            </p>
            <br />
            {/* <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
