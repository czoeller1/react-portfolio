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
                className="card-img-top float-start px-3"
                style={{ width: "200px" }}
              />
              My name is Charles Zoeller and I'm a born native of Colorado. I
              have skiied for as long as I can remember, and enjoy hitting the
              slopes with family and friends. I really enjoy reading science
              fiction and fantasy novels. My favorite authors are Erin
              Morgenstern, Maddeline Miller, and Brandon Sanderson. I have also
              became interested in cooking and baking. I've made Beef
              Wellington, Cheesecake, and Soft Pretzels.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
