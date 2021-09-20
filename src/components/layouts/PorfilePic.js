import React from "react";
import rajahniphoto from "../../images/rajahniphoto.jpg";
import ReactRoundedImage from "react-rounded-image";

const PorfilePic = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <ReactRoundedImage image={rajahniphoto} alt="Rajahni Fields" /> */}
      <ReactRoundedImage
        image={rajahniphoto}
        roundedColor="#321124"
        imageWidth="300"
        imageHeight="300"
        roundedSize="20"
        borderRadius="50"
      />
    </div>
  );
};

export default PorfilePic;
