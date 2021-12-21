import React, { useState } from "react";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";

export const GeneralInfoForm = () => {
  const [data, setData] = useState({
    galleries: { 0: { name: "", image: "" } },
  });

  function fnAddRowGallery() {
    setData((prev) => ({
      ...prev,
      galleries: {
        ...prev.galleries,
        [Object.keys(prev.galleries).length + 1]: { name: "", image: "" },
      },
    }));
  }

  function fnChangeGallery(event) {
    event.persist && event.persist();

    const [key, row, path] = event.target.name.split(".");
    console.dir(event.target);
    console.log(event.target.files);

    let value = event.target.value;
    if (event.target.type === "file") {
      value = event.target.files[0];
    }

    setData((prev) => ({
      ...prev,
      galleries: {
        ...prev.galleries,
        [row]: { ...prev.galleries[row], [path]: value },
      },
    }));
  }

  console.log(data);

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form>
          <Col md={12} className="mb-3">
            <Form.Group id="firstName">
              <Form.Label>Breed Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter breed name"
              />
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group id="temperament">
              <Form.Label>Temperament</Form.Label>
              <Form.Control required type="text" placeholder="Temperament" />
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group id="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                required
                type="text"
                placeholder="Description"
              />
            </Form.Group>
          </Col>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="origin">
                <Form.Label>Origin</Form.Label>
                <Form.Control required type="text" placeholder="Origin" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lifeSpan">
                <Form.Label>Life Span</Form.Label>
                <Form.Control required type="text" placeholder="Life Span" />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Meta Data</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[adaptability]">
                <Form.Label>Adaptability</Form.Label>
                <Form.Control required type="text" placeholder="Adaptability" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[affectionLevel]">
                <Form.Label>Affection Level</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Affection Level"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[childFriendly]">
                <Form.Label>Child Friendly</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Child Friendly"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[intelligence]">
                <Form.Label>Intelligence</Form.Label>
                <Form.Control required type="text" placeholder="Intelligence" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[grooming]">
                <Form.Label>Grooming</Form.Label>
                <Form.Control required type="text" placeholder="Grooming" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[healthIssues]">
                <Form.Label>Health Issues</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Health Issues"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[socialNeeds]">
                <Form.Label>Social Needs</Form.Label>
                <Form.Control required type="text" placeholder="Social Needs" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[strangerFriendly]">
                <Form.Label>Stranger Friendly</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Stranger Friendly"
                />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Gallery</h5>
          {Object.keys(data.galleries).map((key) => (
            <Row key={key}>
              <Col md={6} className="mb-3">
                <Form.Group id="galleries">
                  <Form.Label>Alternatif</Form.Label>
                  <Form.Control
                    name={`galleries.${key}.name`}
                    required
                    type="text"
                    placeholder="Add some image"
                    onChange={fnChangeGallery}
                  />
                </Form.Group>
              </Col>
              <Col md={3} className="mb-3" style={{ marginTop: "2rem" }}>
                <Button variant="gray">
                  <div className="file-field">
                    <div className="d-flex justify-content-xl-center">
                      <div className="d-flex-center">
                        <input
                          type="file"
                          name={`galleries.${key}.image`}
                          onChange={fnChangeGallery}
                        />
                        <div className="d-md-block text-start">
                          <div className="fw-normal center">Choose Image</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Button>
              </Col>
            </Row>
          ))}
          <Col md={6} className="mb-3">
            <Button
              variant="secondary"
              border="1px solid"
              className="btn-gallery"
              style={{ padding: "0.75rem 12.5rem" }}
              onClick={fnAddRowGallery}
            >
              <div className="d-md-block text-start">
                <div className="fw-normal center" style={{ width: "100%" }}>
                  Add Gallery
                </div>
              </div>
            </Button>
          </Col>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              Save Breed
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
