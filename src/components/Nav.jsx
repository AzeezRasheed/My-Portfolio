import React, { useState } from "react";

import "../nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import Scrollspy from "react-scrollspy";
import sections from "./sections";
function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <Scrollspy
        items={sections.map((item) => item.id)}
        currentClassName="active"
        offset={0}
        smooth={true}
        spy={true}
        style={{ display: "flex" }}
      >
        <a href="#">
          <AiOutlineHome />
        </a>
        <a href="#about">
          <AiOutlineUser />
        </a>
        <a href="#experience">
          <BiBook />
        </a>
        <a href="#services">
          <RiServiceLine />
        </a>
        <a href="#contact">
          <BiMessageSquareDetail />
        </a>
      </Scrollspy>
    </nav>
  );
}

export default Nav;
