import React, { useState } from "react";
import "./SpaceCard.css";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Collapse
} from "reactstrap";

import { Button, Col } from "reactstrap";
import styled from "styled-components";

const CardH2 = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`;

const SpaceCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card inverse style={{ backgroundColor: "black", borderColor: "black" }}>
        <CardImg width="100%" src={props.photo} alt="A Picture a day" />
        <CardImgOverlay>
          <Col
            xs="12"
            md={{ size: "6", offset: 3 }}
            xl={{ size: "6", offset: 3 }}
          >
            <CardTitle>
              <CardH2> {props.title}</CardH2>
            </CardTitle>
            <CardTitle>{props.date}</CardTitle>

            <Button
              color="secondary"
              onClick={toggle}
              style={{ marginBottom: "2rem" }}
            >
              About
            </Button>
            <Collapse isOpen={isOpen}>
              <CardText>{props.desc}</CardText>
              <CardText>
                <small className="text-muted">{props.copyright}</small>
              </CardText>
            </Collapse>
          </Col>

          <Col xl="12">
            <Button
              color="secondary"
              onClick={props.incrementYear}
              style={{ margin: "2rem" }}
            >
              Change Year
            </Button>
            <Button
              color="secondary"
              onClick={props.incrementMonth}
              style={{ margin: "2rem" }}
            >
              Change Month
            </Button>
            <Button
              color="secondary"
              onClick={props.incrementDay}
              style={{ margin: "2rem" }}
            >
              Change Day
            </Button>
          </Col>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SpaceCard;
