import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";

import { BreedsTable } from "../components/Tables";
import Navbar from "../components/Navbar";

import { Routes } from "../routes";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Navbar title="List Breeds">
          <p className="mb-0">All data item of breeds</p>
        </Navbar>
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={4} md={2} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Button variant="primary" as={Link} to={Routes.AddList.path}>
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                <span>Add Breed</span>
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <BreedsTable />
    </>
  );
};
