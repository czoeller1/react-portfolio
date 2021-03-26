import React from "react";
import resume from "../assets/Resume.pdf";

function Footer() {
  return (
    <footer className="footer mt-auto fixed-bottom py-3 bg-dark">
      <div className="container">
        <div className="text-white">
          Charles Zoeller{" "}
          <a href={resume} target="blank" className="text-muted">
            Resume
          </a>{" "}
          <span className="text-muted">*</span>{" "}
          <a
            href="https://github.com/czoeller1"
            target="blank"
            className="text-muted"
          >
            Git Hub
          </a>{" "}
          <span className="text-muted">*</span>{" "}
          <a
            href="https://www.linkedin.com/in/charles-zoeller/"
            target="blank"
            className="text-muted"
          >
            LinkedIn
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
