import React from "react";
import Project from "../components/Project";
import urban from "../assets/urban.png";
import weather from "../assets/weather.png";
import planner from "../assets/planner.png";
import adventureops from "../assets/adventureops.png";
import notes from "../assets/notes.png";
import directory from "../assets/directory.png";

function Portfolio() {
  return (
    <main class="container bg-light ms-3 my-5 pb-4 w-75">
      <div class="row">
        <h1>Portfolio</h1>
      </div>
      <div class="row mx-auto my-3">
        <Project
          title="Urban El Dorado"
          image={urban}
          description="A project that lets users search for a city and recieve a map
                acompanied by selected US Census data."
          site="https://pwg26.github.io/RepositoryForAwesomeProject/"
          repository="https://github.com/pwg26/RepositoryForAwesomeProject"
        />
        <Project
          title="Weather Forecast"
          image={weather}
          description=" A project that uses the openweather API to display current and
          future weather conditions for the searched city."
          site="https://czoeller1.github.io/weather-forecast/"
          repository="https://github.com/czoeller1/weather-forecast"
        />
      </div>
      <div class="row mx-auto my-3">
        <Project
          title="Day Planner"
          image={planner}
          description="A project that creates an hourly planner for the currrent day.
          The entries are color coded according to the current time."
          site="https://czoeller1.github.io/day-planner/"
          repository="https://github.com/czoeller1/day-planner"
        />
        <Project
          title="Adventureops"
          image={adventureops}
          description="A full stack application for outdoor enthusiasts to post about
          various locations and activities. It allows users to create an
          account and make posts for the currently limited places and
          activities. Future development goals include a chat feature,
          user photo integration, and the ability for users to add
          locations or activities. Users can also see a page with all of
          their posts that allows them to delete their posts."
          site="https://adventureops.herokuapp.com/login"
          repository="https://github.com/Perkyderm/Adventureops"
        />
      </div>
      <div class="row mx-auto my-3">
        <Project
          title="Note Taker"
          image={notes}
          description=" page that allows the user to create, save, and view custom notes with a title and text. The notes are stored in the server's backend and persist between sessions. Notes can be deleted through the interface."
          site="https://frozen-hollows-50239.herokuapp.com/"
          repository="https://github.com/czoeller1/note-taker"
        />
        <Project
          title="Employee Directory"
          image={directory}
          description=" An employee directory application that allows the user to view a list of employees, and filter them by gender or sort them by age. Currently uses randomly generated data"
          site="https://czoeller1.github.io/employee-directory/"
          repository="https://github.com/czoeller1/employee-directory"
        />
      </div>
    </main>
  );
}

export default Portfolio;
