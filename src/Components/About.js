import React, { Component } from "react";
import Fade from "react-reveal";
const imagesData = [
  {
    id: 1,
    title: 'Data & Digital Engineering',
    src: 'images/service_first.jpg', 
    info: 'This is the information for the First section.'
  },
  {
    id: 2,
    title: 'Enterprise AI ',
    src: 'images/service_second.jpg',
    info: 'This is the information for the Second section.'
  },
  {
    id: 3,
    title: 'Data Security',
    src: 'images/service_third.jpg',
    info: 'Cyber security consulting services to help business assess risks,develop security strategy and implement best practices.'    
   
  }
];

class About extends Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      activeSection: null
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
                <h5 style={{color:'#fff'}}>{image.title}</h5>
              </div>
            ))}
          </div>
  
          <div className="info-section">
            {imagesData.map((image) =>
              activeSection === image.id ? (
                <div key={image.id} className="info-content">
                  <h2>{image.title} :</h2>
                  <p>{image.info}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      );
    }
}

export default About;



