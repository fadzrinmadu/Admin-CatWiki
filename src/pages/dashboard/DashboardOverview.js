import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";
import { ImageWidget } from "../../components/Widgets";
import Navbar from "../../components/Navbar";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Navbar title="Dashboard">
          <p className="mb-0">Here your dashboard and it's yours.</p>
        </Navbar>
      </div>
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <ImageWidget />
        </Col>
      </Row>
    </>
  );
};
