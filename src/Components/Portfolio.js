import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    // const projects = this.props.data.projects.map(function (projects) {
    //   let projectImage = "images/portfolio/" + projects.image;

    //   return (
    //     <div key={id++} className="columns portfolio-item">
    //       <div className="item-wrap">
    //         <Zmage alt={projects.title} src={projectImage} />
    //         <div style={{ textAlign: "center" }}>{projects.title}</div>
    //       </div>
    //     </div>
    //   );
    // });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">       
                <div className="row">
                    <h2  >Let's talk about Esther Data Labs Vision</h2>
                    <div >
                        <p>
                            Our vision is to revolutionize the way organizations leverage and manage their data. We strive
                            to empower businesses with the tools and expertise needed to unlock the true potential of their
                            data assets.Our vision is centered around three key pillars:
                        </p>                        
                        <p>
                            <b>Data Transformation:</b> <br/>We believe in transforming raw, unstructured data into meaningful insights
                            that drive informed decision-making. By employing cutting-edge technologies and advanced
                            analytics techniques, we help businesses extract valuable insights from their data, enabling
                            them to gain a competitive edge in their respective industries.
                        </p>
                        <p>
                            <b>Scalable Infrastructure:</b> <br/>We understand the importance of a robust and scalable data
                            infrastructure. Our vision is to provide organizations with scalable and efficient data
                            platforms that can handle the growing volume, variety, and velocity of data. We leverage cloud
                            technologies and modern data processing frameworks to build flexible and scalable data
                            architectures that meet the evolving needs of our clients.
                        </p>
                        <p> 
                            <b>Data Governance and Security:</b> <br/>We recognize the critical importance of data governance and
                            security in today's data-driven world. Our vision is to ensure that organizations have a strong
                            foundation for data governance and security, enabling them to comply with regulations, protect
                            sensitive data, and maintain the privacy and trust of their customers.
                        </p>
                    </div>
                </div>            
            <br />            
                <div className="row">
                    <h2>Let's talk about the program</h2>
                    <div>
                        <p>
                            This internship program is divided into three major verticals and these are mentioned below
                            Training In this phase all of the interns will be provided opportunity to learn directly from
                            mentors on the topic which they are going to select in line with their internship domain It is
                            to note that mode of training will be self paced in online medium Assessment and Project
                            Participant will be given assessments and assignment which they will be required to complete as
                            a part of internship program Report and Certification After completion of first two phases all
                            of the interns will be required to submit their project report to get certification
                        </p>
                        <p><b>Perks:</b><br/> Intern will get Certificate of Internship after successful completion of internship and an offer
                        letter after successful enrolment</p>                       
                        <p>
                           <b> Who can apply?
                            Only those candidates can apply who:</b>
                        </p>
                        <ol>
                            <li>are from Any</li>
                            <li>and specialisation from Any</li>
                            <li>are available for duration of 2 Months</li>
                            <li>have relevant skills and interests</li>
                            <li>Terms of Engagement</li>
                            <li>It is to note that no stipend will be given under this internship In case if student want to do
                                any training then he or she may opt for it Certificate will be given only after successful
                                completion of internship
                            </li>
                        </ol>                       
                    </div>
                </div>
            
          {/* <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div> */}
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
