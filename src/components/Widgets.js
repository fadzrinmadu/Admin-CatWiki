import React from "react";
import { Card } from "@themesberg/react-bootstrap";
import banner from "../assets/img/pages/HeroImagelg.png";

export const ImageWidget = () => {
  return (
    <Card className="bg-dark-alt shadow-sm">
      <Card.Body className="p-2" style={{ backgroundColor: "black" }}>
        <img src={banner} alt="Banner" />;
      </Card.Body>
    </Card>
  );
};
