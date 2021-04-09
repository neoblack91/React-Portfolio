import React from "react";
import atl from "../images/facebook.png";
function Home() {
  return (
    // <div style={{ backgroundImage: `url(${atl})` }}>
    //   Hello World
    //   <h1 class="mb-3 h2 center">WELCOME</h1>
    //   <p>
    //     Hello This is my creations from coding class. Below you can read about
    //     me and check the apps that I have created in the last few months.
    //   </p>
    // </div>
    // <div class="container py-5">
    <div
      class="jumbotron text-white jumbotron-image shadow"
      style={{ backgroundimage: `url(${atl})` }}
    >
      <div style={{ backgroundimage: `url(${atl})` }}>
        <>
          <h2 class="mb-4">WELCOME</h2>
          <p class="mb-4">
            Hello This is my creations from coding class. Below you can read
            about me and check the apps that I have created in the last few
            months.
          </p>
        </>
      </div>
    </div>
    // </div>
  );
}
export default Home;
