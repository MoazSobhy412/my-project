import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skillData = [
    { id: 1, name: "Brand Identity", percentage: 80, color: "#9333ea" },
    { id: 2, name: "Logo Design", percentage: 90, color: "#a855f7" },
    { id: 3, name: "Web Development", percentage: 95, color: "#8b5cf6" },
    { id: 4, name: "Mobile Apps", percentage: 85, color: "#7c3aed" }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fugit iste nobis tempora obcaecati possimus distinctio.</p>
        </div>

        <Carousel 
          responsive={responsive} 
          infinite={true} 
          className="skills-slider"
          itemClass="skill-item-padding"
        >
          {skillData.map((skill) => (
            <div className="skill-item" key={skill.id}>
              <div 
                className="progress-circle" 
                style={{ 
                  '--percentage': skill.percentage, 
                  '--color': skill.color 
                }}
              >
                <span className="circle-number">{skill.percentage}%</span>
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;