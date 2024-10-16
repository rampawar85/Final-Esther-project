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
   // const internpic = "images/" + this.props.data.image;
    const mystyle = {
      marginBottom: "60px",    
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
          We continuously run internship programs and other initiatives all over the globe. 
          Intention of the internship program is to enhance the skillsets of individuals including students,
          government officials, law enforcement, working professionals, trainers and all who want to make their career in Software development ,
          Data Science,  Data Engineering, Data Visualizations , Data Security. 
          Key points about our proposed internship program:            
            <br />
            <br />
           <b>1. Structured Learning Environment:</b> Our internship program is designed to provide a structured 
            learning environment where interns can gain hands-on experience in Software development,  
            Data Science,  Data Engineering, Data Visualizations , Data Security.<br />
            <br />
            <b>2. Mentorship and Guidance:</b> We are dedicated to providing mentorship and guidance to interns throughout their
            internship period, ensuring they have the support needed for personal and professional growth.
            <br />
            <br />
            <b>3. Customizable Programs:</b> We understand the unique needs of IT Industries ,
            and we are open to customizing internship programs to align with Top IT company's goals and values.
            <br />
            <br />
            <b>4. Talent Pipeline:</b> By partnering with Esther Data Labs ,
            you will have access to a pool of talented and motivated individuals who may become
            potential future hires for the  IT Industries  over the globe.
          <br/>
          <br/>
          <b>5. Benefits for Interns : </b>
            <ul style={{paddingLeft:'30px'}}>              
              <li style={{listStyleType:'disc'}}>Live Industry Project experience</li>
              <li style={{listStyleType:'disc'}}>Internship Letter and Certificate</li>
              <li style={{listStyleType:'disc'}} >On regular basis progress feedback</li>
              <li style={{listStyleType:'disc'}}>Round the clock availability of Mentor</li>
              <li style={{listStyleType:'disc'}}>Virtual Internship</li>
            </ul>   
            <b>6. Eligibility :</b> Internship for  ME/M.Tech(All Branches),
            BE/B.Tech (All Branches),BCA/MCA, BCS/MCS, BSc, Diploma Students(All  Branches)        
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
              <img
              style={{paddingTop: '14px'}}
                className="profile-pic"
                src="images/internship.png"
                alt="Internship"
              />
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
            <div className="columns intern">
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
