import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ProjectItem(props) {
  return (
    <MDBCard style={{ maxWidth: "22rem" }}>
      <MDBCardImage
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle> {props.title} </MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
        <MDBBtn href="#">Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
