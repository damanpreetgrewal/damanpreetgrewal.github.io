import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <h3>Designed by {greeting.title2}</h3> Copyright{" "}
          <span style={{ fontSize: "22px" }}>©</span> 2022
        </p>
      </Fade>
    </div>
  );
}
