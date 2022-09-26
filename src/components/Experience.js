//create a header component

import { Typography } from "@twizzle-library/twizzle-library";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {AiOutlineCode} from 'react-icons/ai';
import {GiCctvCamera} from 'react-icons/gi';

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <Typography variant={1} 
      style={{
        color: "#060e1a",
        fontSize: "5em",
        fontWeight: 600,
        padding: "20px",
      }}
      bold> Experience </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#060e1a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #060e1a" }}
          date="2021 - present"
          iconStyle={{ background: "#060e1a", color: "#fff" }}
          icon={<AiOutlineCode/>}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            Responsible for the development of the front-end and back-end of
            various projects. Worked with a team of developers to develop solutions for clients.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiCctvCamera/>}
        >
          <h3 className="vertical-timeline-element-title">CCTV Operator</h3>
          <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
          <p>
            Besides the regular duties of a CCTV operator, I was also responsible for creating
            a software solution to automate the process of creating reports for the
            security team.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
