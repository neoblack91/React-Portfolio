import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import React from "react";

function Home() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className="text-white text-center py-5 px-4 my-5"
              style={{
                backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/Others/gradient1.jpg)`,
              }}
            >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                  This is my awesome portfolio!!
                </MDBCardTitle>
                <p className="mx-5 mb-5">
                  Welcome to my portfolio, click on the differnet navbar
                  elements to look through this experience.
                </p>
                <MDBBtn outline color="white" className="mb-5">
                  <MDBIcon icon="clone" className="mr-2"></MDBIcon> View project
                </MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Home;
