import React from "react";
import Project from "../components/Project";
import urban from "../assets/urban.png";
import weather from "../assets/weather.png";
import planner from "../assets/planner.png";
import adventureops from "../assets/adventureops.png";
import notes from "../assets/notes.png";
import herald from "../assets/herald.png";

function Portfolio() {
  return (
    <main className="container bg-light ms-3 my-5 pb-4 w-75">
      <div className="row text-center">
        <h1>Portfolio</h1>
        <p>
          Some projects are hosted on heroku, which can be unstable and slow to
          start
        </p>
      </div>
      <div class="row mx-auto my-3">
        <Project
          title="Urban El Dorado"
          image={urban}
          description="A project that lets users search for a city and receive a map
                accompanied by selected US Census data."
          site="https://pwg26.github.io/RepositoryForAwesomeProject/"
          repository="https://github.com/pwg26/RepositoryForAwesomeProject"
        />
        <Project
          title="Weather Forecast"
          image={weather}
          description=" A project that uses the OpenWeather API to display current and
          future weather conditions for the searched city."
          site="https://czoeller1.github.io/weather-forecast/"
          repository="https://github.com/czoeller1/weather-forecast"
        />
      </div>
      <div class="row mx-auto my-3">
        <Project
          title="Day Planner"
          image={planner}
          description="A project that creates an hourly planner for the current day.
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
          title="Hospitality Herald"
          image={herald}
          description={` A hospitality management system that allows users to create rooms, store items, and activities, all of which can be assigned to guests entered into the system. The site uses authentication to protect guest and user information. Demo username: 'charles' password: 'testpwd'`}
          site="https://hostelhedonism.herokuapp.com/"
          repository="https://github.com/pwg26/hostel_hedonism"
        />
      </div>
    </main>
  );
}

export default Portfolio;
