// import React from "react";
// // import {
// //   MDBNavbar,
// //   MDBNavbarBrand,
// //   MDBNavbarNav,
// //   MDBNavItem,
// //   MDBNavLink,
// //   MDBNavbarToggler,
// //   MDBCollapse,
// //   MDBIcon,
// // } from "mdbreact";

// const NavbarPage = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           RJ
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-mdb-toggle="collapse"
//           data-mdb-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i className="fas fa-bars"></i>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <a
//               className="nav-link active"
//               aria-current="page"
//               href="Aboutme.js"
//             >
//               About Me
//             </a>
//             <a className="nav-link" href="./Portfolio">
//               Portfolio
//             </a>
//             {/* <a className="nav-link" href="#">
//               Resume
//             </a> */}
//             <ul class="navbar-nav d-flex flex-row reverse">
//               <li class="nav-item me-3 me-lg-0">
//                 <a class="nav-link" href="https://github.com/neoblack91">
//                   <i class="fab fa-github"></i>
//                 </a>
//               </li>
//               <li class="nav-item me-3 me-lg-0">
//                 <a
//                   class="nav-link"
//                   href="https://www.linkedin.com/in/rajahni-fields"
//                 >
//                   <i class="fab fa-linkedin"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarPage;
// import React from "react";
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBDropdownLink,
//   MDBCollapse,
// } from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <MDBNavbar expand="lg" light bgColor="light">
//       <MDBContainer fluid>
//         <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           onClick={() => setShowBasic(!showBasic)}
//         >
//           <MDBIcon icon="bars" fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showBasic}>
//           <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current="page" href="#">
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href="#">Link</MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag="a" className="nav-link">
//                   Dropdown
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink>Action</MDBDropdownLink>
//                   </MDBDropdownItem>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink>Another action</MDBDropdownLink>
//                   </MDBDropdownItem>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink>Something else here</MDBDropdownLink>
//                   </MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink
//                 disabled
//                 href="#"
//                 tabIndex={-1}
//                 aria-disabled="true"
//               >
//                 Disabled
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>

//           <form className="d-flex input-group w-auto">
//             <input
//               type="search"
//               className="form-control"
//               placeholder="Type query"
//               aria-label="Search"
//             />
//             <MDBBtn color="primary">Search</MDBBtn>
//           </form>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }
