import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
              Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
              Data Security
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
              Student & Graduate Programmes
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                About Us
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
              Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 style={{color: "white",}}>Welcome To Esther DataLabs</h1>
            </Fade>
            <Fade bottom duration={1200}>
              {/* <h3>{description}.</h3> */}
            </Fade>
            <hr />           
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
