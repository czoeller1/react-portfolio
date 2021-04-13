import React from "react";

function Project(props) {
  return (
    <div className="col-6">
      <div className="card">
        <h4 className="card-title text-center my-3">{props.title}</h4>
        <img
          src={props.image}
          className="card-img-top border border-2"
          alt={`${props.title} screenshot`}
        />
        <div className="card-body">
          <p className="card-text">{props.description}</p>
          <div className="row d-flex justify-content-around">
            <a href={props.site} target="blank" className="btn btn-info col-3">
              View Site
            </a>

            <a
              href={props.repository}
              target="blank"
              className="btn btn-info col-3"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
