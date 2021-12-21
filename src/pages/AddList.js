import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";
import { GeneralInfoForm } from "../components/Forms";
import Navbar from "../components/Navbar";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Navbar title="Add Breed">
          <p className="mb-0">Add data item for any breeds.</p>
        </Navbar>
      </div>
      <Row>
        <Col py={4}>
          <GeneralInfoForm />
        </Col>
      </Row>
    </>
  );
};
