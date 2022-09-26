import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Experience = () => {
  return (
    <div className="socials" id="socials">
      <AiFillLinkedin size={30} href="https://linkedin.com/in/ahmedwab" cursor={'pointer'}/>
      <AiFillGithub size={30} href="https://github.com/ahmedwab" cursor={'pointer'}/>
    </div>
  );
}
export default Experience;
