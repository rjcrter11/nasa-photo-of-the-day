import React from "react";
import "./SpaceCard.css";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import { Button, Col } from "reactstrap";

const SpaceCard = (props) => {
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
            <CardTitle>{props.title}</CardTitle>
            <CardTitle>{props.date}</CardTitle>
            <CardText>{props.desc}</CardText>
            <CardText>
              <small className="text-muted">{props.copyright}</small>
            </CardText>
          </Col>

          <Col xl="12">
            <Button color="primary" onClick={props.incrementYear}>
              Change Year
            </Button>{" "}
            <Button color="secondary" onClick={props.incrementMonth}>
              Change Month
            </Button>{" "}
            <Button color="success" onClick={props.incrementDay}>
              Change Day{" "}
            </Button>{" "}
          </Col>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SpaceCard;
