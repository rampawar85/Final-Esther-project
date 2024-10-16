import React, { Component } from "react";
import Fade from "react-reveal";
const imagesData = [
  {
    id: 1,
    title: "Data & Digital Engineering",
    src: "images/service_first.jpg",
    info: [
      {
        subtitle: "Data & Digital Engineering",
        content:`Harness the power of data beyond what you can imagine. Millions of data points are created and stored every second.
Making sense of that data and using it when needed and for the right purpose is what matters.
Whether you're in an analysis-paralysis situation or thinking about how, where, and what kind of data to collect, we can help.
We focus on business outcomes, based on data.
        `,
      },
      {
        subtitle: "Data lakes & Data Warehouse Design",
        content:`Separate, move, process, analyze, and store all of your big data for improved access, faster analysis and state-of-the art security.
Our expert data scientists and leading architects design, develop, architect and execute with the best and latest technologies in the market.
Meet and exceed expectations on all of your data needs and projects with world-class guidance.

        `,
      },
      {
        subtitle: "ETL/ELT & Migrations",
        content:` Data integration is growing and evolving. Implement the best extraction for your needs and make it your most valuable asset.
Whether you need to extract, transform, and load (ETL) data or you need top-notch extract, load, and transform (ELT) procedures,
we offer optimal data handling strategies to meet and exceed compliance requirements and other specific needs.

         `,
      },
    ],
  },
  {
    id: 2,
    title: "Enterprise AI ",
    src: "images/service_second.jpg",
    info: [
      {
        subtitle: "Enterprise AI",
        content: `From in-depth predictions to automized services, machine learning unlocks new business possibilities.
                  Build AI-based products for higher levels of efficiency and create a competitive advantage.
                  Unleash the power of data to step-up your everyday solutions.  `,
      },
      {
        subtitle: "Applied machine learning solutions",
        content: `Harness the power of artificial intelligence to transfer your ideas into tangible solutions. Our machine learning services bring years of combined experience in empowering companies to design, build, and implement AI-powered software.
We create solutions that transform businesses, from day-to-day decision making to finding new opportunities where there appeared to be none.
Leverage the value of your data and get ready to transform your business. By deploying advanced algorithms to exceed your business goals, we’ll help your company provide a more substantial, long-lasting competitive edge. `,
      },
      {
        subtitle: "Financial services",
        content: `Fraud detection and prevention
In financial services, fraud detection and prevention is critical.
Stay ahead of liability and threats with the most advanced machine learning algorithms.
Our team’s AI-powered solutions analyze vast amounts of transaction data in real-time,
identifying anomalies for the most up-to-date risk reporting available. `,
      },
      {
        subtitle: "Intelligent credit risk assessment",
        content: `Get the most accurate, data-driven credit decisioning for card and loan applications.
Our machine learning-powered solutions analyze a host of data points, from default probability to income factors,  
analyzing applicants’ credit picture and optimizing revenue potential. `,
      },
      {
        subtitle: "Life sciences",
        content: ''
      },
      {
        subtitle: "Drug discovery",
        content: `Enterprise AI tools can reduce the time and cost of drug discovery by identifying new drug candidates more efficiently,
monitoring patient progress in clinical trials, and improving the overall quality of care. `,
      },
      {
        subtitle: "Genomics and precision medicine",
        content: `Develop targeted, personalized treatments and improve patient outcomes based on individual genetic profiles.
Our AI-powered genomics tools analyze large volumes of genetic data,
identifying patterns to power the development of tailored therapies and diagnostics. `,
      },
      {
        subtitle: "Clinical trials",
        content: `Streamline clinical trial processes, reduce costs, and improve research outcomes with enterprise AI tools.
From optimized trial design to enhanced patient monitoring, AI-powered solutions can improve clinical efficiency by analyzing vast data sets and
identifying hard-to-pinpoint patterns. `,
      },
    ],
  },
  {
    id: 3,
    title: "Data Security",
    src: "images/service_third.jpg",
    info: [
      {
        subtitle: "Threat Intelligence - ",
        content: ` Services that gather and analyze information about current and potential cyber threats. This helps organization's stay ahead of
              attackers by understanding their tactics and techniques. `,
      },
      {
        subtitle: "Penetrating Testing - ",
        content: `Simulating cyber attacks to
              identify vulnerabilities in systems and networks before malicious
              hackers can exploit them. `,
      },
      {
        subtitle: "Security Awareness Training - ",
        content: `Educating
              employees/students about cybersecurity best practices to prevent
              human errors that could lead to security breaches. `,
      },
      {
        subtitle: "Workstation Security - ",
        content: ` protecting sensitive data and ensuring the integrity of your
              organization's IT infrastructure. `,
      },
      {
        subtitle: "Application Security - ",
        content: ` involves implementing
              measures to protect software applications from threats throughout
              their lifecycle, from development to deployment and beyond. `,
      },
      {
        subtitle: "Network Security -",
        content: ` protecting the integrity,
              confidentiality, and availability of data and resources as they
              are transmitted across or accessed through networks.`,
      },
      {
        subtitle: "DevSecOps -",
        content: `is a practice that implements security
              into every phase of the software development lifecycle. `,
      },
    ],
  },
];

class About extends Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      activeSection: null,
    };
  }
  // Handle click event to update state with the selected section
  handleClick = (id) => {
    this.setState({ activeSection: id });
  };

  render() {
    const { activeSection } = this.state;

    return (
      <div className="App" id="about">
        <div className="image-grid">
          {imagesData.map((image) => (
            <div
              key={image.id}
              className="image-container"
              onClick={() => this.handleClick(image.id)}
            >
              <img src={image.src} alt={image.title} className="image" />
              <h6 className="image-font" style={{ color: "#fff" }}>{image.title}</h6>
            </div>
          ))}
        </div>

        <div className="info-section">
          {imagesData.map((image) =>
            activeSection === image.id ? (
              <div key={image.id} className="info-content">
                {image.id === 3 && (
                  <p>
                    Cyber security consulting services to help businesses assess
                    risks, develop security strategy and implement best
                    practices.
                  </p>
                )}
                {image.info.map((section, index) => (
                  <div key={index} className="info-paragraph">
                    <h6 style={{ color: "#fff" }}>{section.subtitle}</h6>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default About;
