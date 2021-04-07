import React from "react";

function Portfolio(props) {
  console.log(props.image);
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
