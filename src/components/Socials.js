import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Experience = () => {
  return (
    <div className="socials" id="socials">
      <AiFillLinkedin size={30} onClick={() => {
          window.location.href = "https://www.linkedin.com/in/ahmedwab"
      }} cursor={'pointer'}/>
       <AiFillGithub size={30} onClick={() => {
          window.location.href = "https://www.github.com/ahmedwab"
      }} cursor={'pointer'}/>
    </div>
  );
}
export default Experience;
