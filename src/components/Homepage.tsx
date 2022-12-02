import React from "react";
import { StyledHomepage } from "../css/Homepage.styled";

const Homepage = () => {
  return (
    <StyledHomepage>
      <div className="offsetContainer">
        <div className="homeWrapper">
          Homepage, Create a new List with the + button to start
        </div>
      </div>
    </StyledHomepage>
  );
};

export default Homepage;
