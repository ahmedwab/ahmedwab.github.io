

import {
  Box,
  Typography,
  Avatar,
  Button,
} from "@twizzle-library/twizzle-library";
import React from "react";

const Experience = () => {
  return (
    <div className="projects" id="projects">
      <Typography
        variant={1}
        style={{
          color: "#060e1a",
          fontSize: "5em",
          fontWeight: 600,
          padding: "20px",
          textAlign: "center",
        }}
        bold
      >
        Past Projects
      </Typography>
      <div className="project_container">
        <div className="project_profile">
          <img src="twizzle.png" alt="twizzle" width={300} />
        </div>
        <div className="project_description">
          <Button
            outlined
            label={"Twizzle Library"}
            onClick={() =>
              window.open(
                "https://www.npmjs.com/package/@twizzle-library/twizzle-library",
                "_blank"
              )
            }
            style={{
              width: "200px",
            }}
          />
          <Typography
            variant={"p"}
            style={{ color: "grey", fontSize: "1.3em" }}
            bold
          >
            Twizzle Library is an open-source React component library that can
            be used to create components that are reusable and easy to use. It
            is a collection of components that can be used to create a variety
            of different UI elements. Twizzle Library components come with a
            variety of different styles and themes that can be customized to fit
            your needs.{" "}
          </Typography>
        </div>
      </div>
      <div className="project_container">
        <div className="project_description">
          <Button
            label={"CANVAXSEARCH"}
            onClick={() =>
              window.open("https://github.com/ahmedwab/CANVAXHUNTING", "_blank")
            }
            style={{
              width: "200px",
              backgroundColor: "red",
            }}
          />
          <Typography
            variant={"p"}
            style={{ color: "grey", fontSize: "1.3em" }}
            bold
          >
            Notification System for Canadian vaccines using postal code as
            input. Moreover, allowing users to find relevant vaccine posts that
            pertain to their own postal code and age group Python3, PHP, mySQL,
            Twitter API
          </Typography>
        </div>
        <div className="project_profile">
          <img src="CV.png" alt="CANVAXSEARXH" width={300} />
        </div>
      </div>
      <div className="project_container">
        <div className="project_profile">
          <img src="tello.jpg" alt="Tello Drone" width={300} />
        </div>
        <div className="project_description">
          <Button
            outlined
            label={"Tello Drone Face Tracking"}
            onClick={() =>
              window.open(
                "https://github.com/ahmedwab/TelloDrone_FaceTracking",
                "_blank"
              )
            }
            style={{
              width: "250px",
              borderColor: "orange",
              color: "orange",
            }}
          />
          <Typography
            variant={"p"}
            style={{ color: "grey", fontSize: "1.3em" }}
            bold
          >
            OpenCV application for the DJI Ryze Tello drone that uses face
            detection for movement tracking using Python3, OpenCV, djitellopy,
            DJI Ryze Drone
          </Typography>
        </div>
      </div>
      <div className="project_container">
        <div className="project_description">
          <Button
            label={"CCTV Security System"}
            style={{
              width: "200px",
              backgroundColor: "#52a39e",
            }}
          />
          <Typography
            variant={"p"}
            style={{ color: "grey", fontSize: "1.3em" }}
            bold
          >
            CCTV Security App project Web native App that maintains records of
            more than 500 cameras on campus and is utilized by all of the CCTV
            Safety department. Express.js, Electron.js, Handlebars.js, Google
            Charts,RESTful API
          </Typography>
        </div>
        <div className="project_profile">
          <img src="cctv.png" alt="CANVAXSEARXH" width={300} />
        </div>
      </div>
      <div className="project_container">
        <div className="project_profile">
          <img src="magic_mirror.png" alt="Magic Mirror" width={300} />
        </div>
        <div className="project_description">
          <Button
            outlined
            label={"MMM Module Handler"}
            onClick={() =>
              window.open(
                "https://github.com/ahmedwab/MMM-ModuleHandler",
                "_blank"
              )
            }
            style={{
              width: "250px",
              borderColor: "#212529",
              color: "#212529",
            }}
          />
          <Typography
            variant={"p"}
            style={{ color: "grey", fontSize: "1.3em" }}
            bold
          >
            The MMM-ModuleHandler application retrieves and deletes any desired
            module found on the
            https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules
            website. Built using Python3, Node.Js, Shell, JSON
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Experience;
