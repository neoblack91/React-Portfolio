import React from "react";
import "../stylep.css";

function Portfolio(props) {
  return (
    <section className="container">
      <div className="card mb-3 wholeCard">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="img-container cardImages">
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
      </div>
    </section>

    // <section className="container">
    //   {/* <h1 className="projects">Projects</h1> */}
    //   <section className="row">
    //     <div className="card mb-3 wholeCard">
    //       <div className="row g-0">
    //         <div className="col-md-4">
    //           <img
    //             className="image-fluid mx-auto d-block imageStyling"
    //             src={props.image}
    //             alt={props.alt}
    //           />
    //         </div>
    //         <div className="col-md-8">
    //           <div className="card-body text-center">
    //             <h5 className="card-title">{props.title}</h5>
    //             <p className="card-text text-left">{props.description}</p>
    //             <p className="card-text cardCenter">
    //               {/* Loop within a loop within a loop???? */}
    //               {/* {props.languages.map((language, index) => {
    //               index === props.languages.length - 1
    //                 ? (languageString += `${language} `)
    //                 : (languageString += `${language} |`); */}
    //               <small className="text-muted">{props.languages}</small>
    //               {/* // })} */}
    //               {/* <small className="text-muted">HTML | CSS | Bootstrap</small> */}
    //             </p>
    //             <a href={props.deployed} target="_blank" rel="noreferrer">
    //               <button type="button" className="btn btn-dark marginRight">
    //                 <i className="fas fa-sun"></i> Deployed
    //               </button>
    //             </a>
    //             <a href={props.gitHub} target="_blank" rel="noreferrer">
    //               <button type="button" className="btn btn-dark marginLeft">
    //                 <i className="fab fa-github"></i> Github
    //               </button>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </section>
  );
}

export default Portfolio;
