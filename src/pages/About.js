import React from "react";
import portrait from "../assets/portrait.jpg";

function About() {
  return (
    <main className="flex-shrink-0 w-75">
      <div className="container bg-light ms-3 my-5 p-3">
        <div className="row">
          <h1>About Me</h1>
        </div>

        <div className="card">
          <div className="card-body" style={{ lineHeight: "150%" }}>
            <p>
              <img
                src={portrait}
                alt="a portrait of myself"
                className="card-img-top float-left px-3"
                style={{ width: "200px" }}
              />
              My name is Charles Zoeller. I was born in Denver, Colorado, where
              I have lived for most of my life. I love to ski with friends and
              family whenever I can. My parents first started teaching me how to
              ski when I was 5 years old. I really enjoy reading science fiction
              and fantasy novels. My favorite authors are Erin Morgenstern,
              Maddeline Miller, and Brandon Sanderson. I recently became pretty
              enterested in cooking and baking. I've made Beef Wellington,
              Cheesecake, and Soft Pretzels.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
