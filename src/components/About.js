

import React from "react";
import { TabList, Tab, Avatar, Typography } from "@twizzle-library/twizzle-library";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_container">
        <div className="about_profile">
          <Avatar src="profile.png" size="large"
          style={{
            width: "200px",
            height: "200px",
          }}/>
          <h1 className="about__title" style={{color: "white"}} >Ahmed Abdelfattah</h1>
        </div>
        <div className="about_description">
          <Typography variant={4}style={{color: "grey"}}>
            Hello, I am
          </Typography>
          <Typography variant={1}style={{color: "lightgrey"}} italic>
            Ahmed Abdelfattah
          </Typography>
          <Typography variant={1}style={{color: "white"}} bold>
          Full Stack Software Developer
          </Typography>
          <Typography variant={'p'}style={{color: "lightgrey", fontSize: '1.3em'}} bold>
          Currently, I work as a full stack developer at Vehikl, where I have the opportunity to work with different clients and software projects of different scales. I currently enjoy developing front-end React components and writing efficiently integrated restFul APIs. I enjoy working on projects that are impactful and help people navigate their goals with the right software solutions.
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default About;
