import React from "react";
import "./TitleBar.css";
import styled from "styled-components";

const Navigation = styled.nav`
  background-color: black;
  max-height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2%;
  width: 100%;
`;

const LogoImage = styled.img`
  width: 12%;
  height: 150px;
  object-fit: scale;
`;

const TitleText = styled.h1`
  Color: white; 
  font-size = 60px; 
  font-weight: bold; 
  font-family: "Nunito", sans-serif;
`;

const TitleBar = (props) => {
  return (
    <Navigation>
      <LogoImage src={props.img} alt="Nasa Logo" />
      <TitleText>A PICTURE A DAY</TitleText>
    </Navigation>
  );
};

export default TitleBar;
