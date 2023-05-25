import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";


import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience ">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2017'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>The Green Hills public school</h3>

          <h4 className="vertical-timeline-element-subtitle">
            Moolankave, Wayanad
          </h4>

          <p> High School  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St.Josephs's English Higher Secondary School       </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Sulthan Bathery, Wayanad          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Present "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - IEDC SNGCE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kadayirippu, Ernakulam
          </h4>
          <p>Developed the website for IEDC SNGCE team.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - ESA ECO SOLUTIONS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sulthan Bathery, Wayanad
          </h4>
          <p>
           Developed a website as per their requirements and hosted it for them.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience