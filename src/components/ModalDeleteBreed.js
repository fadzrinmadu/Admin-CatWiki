import React from "react";
import { Modal, Button } from "@themesberg/react-bootstrap";
import axios from 'axios';

export default (props) => {
  async function deleteBreedById(id) {
    await axios({
      method: 'delete',
      url: `https://catwikiapinodejs.herokuapp.com/api/v1/breeds/${props.selectedBreed}`,
    });

    props.setPage(props.page);
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Body closeButton>
        <h4>Are you sure wanna delete this {props.selectedBreed}?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="danger" onClick={() => deleteBreedById(props.selectedBreed)}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};
