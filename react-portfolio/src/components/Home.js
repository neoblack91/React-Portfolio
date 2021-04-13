import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";

export default function Home() {
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  RJ
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="./AboutMe">About Me</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="./Portfolio">Portfolio</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="./Resume">Resume</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url(../images/downtownatl.jpg)",
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">WELCOME</h1>
              <h4 className="mb-3">
                Hello This is my creations from coding class. Below you can read
                about me and check the apps that I have created in the last few
                months.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
// import React from "react";
// import atl from "../images/facebook.png";
// function Home() {
//   return (
//     // <div style={{ backgroundImage: `url(${atl})` }}>
//     //   Hello World
//     //   <h1 class="mb-3 h2 center">WELCOME</h1>
//     //   <p>
//     //     Hello This is my creations from coding class. Below you can read about
//     //     me and check the apps that I have created in the last few months.
//     //   </p>
//     // </div>
//     // <div class="container py-5">
//     <div
//       class="jumbotron text-white jumbotron-image shadow"
//       style={{ backgroundimage: `url(${atl})` }}
//     >
//       <div style={{ backgroundimage: `url(${atl})` }}>
//         <>
//           <h2 class="mb-4">WELCOME</h2>
//           <p class="mb-4">
//             Hello This is my creations from coding class. Below you can read
//             about me and check the apps that I have created in the last few
//             months.
//           </p>
//         </>
//       </div>
//     </div>
//     // </div>
//   );
// }
// export default Home;
