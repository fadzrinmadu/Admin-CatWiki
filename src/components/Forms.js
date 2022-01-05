import React, { useState, useRef } from "react";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import axios from 'axios';

export const GeneralInfoForm = () => {
  const initialStateGallery = useRef({
    galleries: { 0: { name: "", image: "" } },
  });

  const initialStateBreed = useRef({
    name: '',
    temperament: '',
    description: '',
    origin: '',
    lifeSpan: '',
  });

  const initialStateMetaData = useRef({
    adaptability: 0,
    affectionLevel: 0,
    childFriendly: 0,
    intelligence: 0,
    grooming: 0,
    healthIssues: 0,
    socialNeeds: 0,
    strangerFriendly: 0,
  });

  const [data, setData] = useState(initialStateGallery.current);
  const [breed, setBreed] = useState(initialStateBreed.current);
  const [metaData, setMetaData] = useState(initialStateMetaData.current);

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
    // console.dir(event.target);
    // console.log(event.target.files);

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

  function fnChangeBreed(event) {
    event.persist && event.persist();
    setBreed((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function fnChangeMetaData(event) {
    event.persist && event.persist();
    setMetaData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('name', breed.name);
    formData.append('temperament', breed.temperament);
    formData.append('description', breed.description);
    formData.append('origin', breed.origin);
    formData.append('lifeSpan', breed.lifeSpan);

    for (const value in metaData) {
      formData.append(`metaData[${value}]`, metaData[value]);
    }

    Object.keys(data.galleries).forEach((key) => {
      formData.append(`galleries[${key}][name]`, data.galleries[key].name);
      formData.append(`galleries[${key}][image]`, data.galleries[key].image);
    });

    try {
      await axios({
        method: 'post',
        url: 'https://catwikiapinodejs.herokuapp.com/api/v1/breeds',
        data: formData,
      });

      setData(initialStateGallery.current);
      setBreed(initialStateBreed.current);
      setMetaData(initialStateMetaData.current);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Col md={12} className="mb-3">
            <Form.Group id="firstName">
              <Form.Label>Breed Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Enter breed name"
                value={breed.name}
                onChange={fnChangeBreed}
              />
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group id="temperament">
              <Form.Label>Temperament</Form.Label>
              <Form.Control
                required
                type="text"
                name="temperament"
                placeholder="Temperament"
                value={breed.temperament}
                onChange={fnChangeBreed}
              />
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
                name="description"
                value={breed.description}
                onChange={fnChangeBreed}
              />
            </Form.Group>
          </Col>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="origin">
                <Form.Label>Origin</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Origin"
                  name="origin"
                  value={breed.origin}
                  onChange={fnChangeBreed}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lifeSpan">
                <Form.Label>Life Span</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Life Span"
                  name="lifeSpan"
                  value={breed.lifeSpan}
                  onChange={fnChangeBreed}
                />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Meta Data</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[adaptability]">
                <Form.Label>Adaptability</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Adaptability"
                  name="adaptability"
                  value={metaData.adaptability}
                  onChange={fnChangeMetaData}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[affectionLevel]">
                <Form.Label>Affection Level</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Affection Level"
                  name="affectionLevel"
                  value={metaData.affectionLevel}
                  onChange={fnChangeMetaData}
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
                  type="number"
                  placeholder="Child Friendly"
                  name="childFriendly"
                  value={metaData.childFriendly}
                  onChange={fnChangeMetaData}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[intelligence]">
                <Form.Label>Intelligence</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Intelligence"
                  name="intelligence"
                  value={metaData.intelligence}
                  onChange={fnChangeMetaData}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[grooming]">
                <Form.Label>Grooming</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Grooming"
                  name="grooming"
                  value={metaData.grooming}
                  onChange={fnChangeMetaData}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[healthIssues]">
                <Form.Label>Health Issues</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Health Issues"
                  name="healthIssues"
                  value={metaData.healthIssues}
                  onChange={fnChangeMetaData}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[socialNeeds]">
                <Form.Label>Social Needs</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Social Needs"
                  name="socialNeeds"
                  value={metaData.socialNeeds}
                  onChange={fnChangeMetaData}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="metaData[strangerFriendly]">
                <Form.Label>Stranger Friendly</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Stranger Friendly"
                  name="strangerFriendly"
                  value={metaData.strangerFriendly}
                  onChange={fnChangeMetaData}
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
                    value={data.galleries[key].name}
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
