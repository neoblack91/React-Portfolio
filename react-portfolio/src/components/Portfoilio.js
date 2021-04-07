import React from "react";
// import image from "../images";

function Portfolio(props) {
  return (
    <div className="card">
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
            onClick={props.link}
          >
            Github
          </button>
          {/* <a className="nav-link active" href={props.link}>
            Link
          </a> */}
          {/* <li>
            <strong>Link:</strong> {props.link}
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
