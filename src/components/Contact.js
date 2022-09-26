

import {
  Box,
  Typography,
  Avatar,
  Button,
  TextInput,
  TextArea,
} from "@twizzle-library/twizzle-library";
import React from "react";


const Contact = () => {


  return (
    <div className="contact" id="contact">
      <Typography
        variant={1}
        style={{
          color: "#060e1a",
          fontSize: "5em",
          fontWeight: 600,
          padding: "20px",
          textAlign: "center",
          width: "100%",
        }}
        bold
      >
        Feel free to reach out
      </Typography>
      <form action="mailto:ro.ahmed@hotmail.com" method="get" enctype="text/plain">
        <div className="contact-form" style={{margin: "20px" }}>
          <TextInput
            inputName="name"
            inputLabel="Name"
            placeholder="John Doe"
            width= "100%"
            style={{
              marginBottom: "20px",
            }}
            required
          />
          <TextInput
            inputName="email"
            inputLabel="Email"
            placeholder="johndoegmail.com"
            type="email"
            width= "100%"
            style={{
              marginBottom: "20px",
            }}
            required
          />
          <TextArea
            inputName="comments"
            inputLabel="Body"
            placeholder="Hey Ahmed, I would like to talk to you about a project..."
            type="email"
            width= "100%"
            style={{
              marginBottom: "20px",
            }}
            required
          />
          <Button
            label="Send"
            type="submit"
            style={{
              width: "30%",
            }}
          />
        </div>
      </form>
    </div>
  );
}
export default Contact;
