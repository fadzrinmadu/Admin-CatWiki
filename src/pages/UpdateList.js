import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";
import UpdateBreedForm from "../components/UpdateBreedForm";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router-dom";

export default withRouter(() => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Navbar title="Update Breed">
          <p className="mb-0">Update data item for any breeds.</p>
        </Navbar>
      </div>
      <Row>
        <Col py={4}>
          <UpdateBreedForm />
        </Col>
      </Row>
    </>
  );
});
