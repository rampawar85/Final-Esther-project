import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const mystyle = {
      paddingTop: "80px",    
    };

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div>
          <div>
            <h3>Welcome to our Student and Graduate programmes</h3>
            <p>
              An internship is a professional learning experience that offers
              meaningful, practical work related to a student’s field of study
              or career interest. An internship gives a student the opportunity
              for career exploration and development, and to learn new skills.
              It offers the employer the opportunity to bring new ideas and
              energy into the workplace, develop talent and potentially build a
              pipeline for future full-time employees.
            </p>
            <br />
          </div>         
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div style={{marginTop: "-35px"}}  key={work.company}>
          <p>
            We continuously run internship programs and other initiatives all
            over the globe. Intention of the internship program is to enhance
            the skillsets of individuals including students, government
            officials, law enforcement, working professionals, trainers and all
            who want to make their career in software development & Data
            Engineering.
            <br />
            Key points about our proposed internship program:
            <br />
            <br />
            1. Structured Learning Environment: Our internship program is
            designed to provide a structured learning environment where interns
            can gain hands-on experience in Software development & Data
            Engineering .<br />
            <br />
            2. Mentorship and Guidance: We are dedicated to providing mentorship
            and guidance to interns throughout their internship period, ensuring
            they have the support needed for personal and professional growth.
            <br />
            <br />
            3. Customizable Programs: We understand the unique needs of Esther
            Data Labs , and we are open to customizing internship programs to
            align with your company's goals and values.
            <br />
            <br />
            4. Talent Pipeline: By partnering with Esther Data Labs , you will
            have access to a pool of talented and motivated individuals who may
            become potential future hires for your organization.
          </p>
        </div>
      );
    }); 

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div style={mystyle}  className="three columns header-col">
              <h1>
                <span>INTERNSHIP</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div style={{}} className="columns ">
              <h1>
                <span>INTERNSHIP PROGRAM</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>     
      </section>
    );
  }
}

export default Resume;
