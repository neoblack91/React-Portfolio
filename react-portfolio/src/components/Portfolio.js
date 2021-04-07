import React from "react";
import "../stylep.css";

function Portfolio(props) {
  return (
    <div className="card">
      <div className="col-md-4">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Decription:</strong> {props.decription}
            </li>
            <li>
              <strong>Languages:</strong> {props.languages}
            </li>

            <button
              type="button"
              class="btn btn-primary active"
              onClick={() => {
                window.location.href = props.linkapp;
              }}
            >
              TRY IT NOW!!!
            </button>
            <button
              type="button"
              class="btn btn-primary active"
              onClick={() => {
                window.location.href = props.linkgit;
              }}
            >
              Look at code!!!
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
