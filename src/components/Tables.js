import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Nav, Card, Table, Button } from "@themesberg/react-bootstrap";
import axios from 'axios';
import ModalDeleteBreed from "./ModalDeleteBreed";
import { Link } from "react-router-dom";
import Pagination from './Pagination';

export const BreedsTable = () => {
  const [breeds, setBreeds] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [totalBreeds, setTotalBreeds] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios({
        method: 'get',
        url: `https://catwikiapinodejs.herokuapp.com/api/v1/breeds?limit=${limit}&page=${page}`,
      });

      setLoading(false);
      setBreeds(response.data.results);
      setTotalBreeds(response.data.total);
    }

    fetchData();
  }, [page, totalBreeds, limit]);

  const TableRow = (props) => {
    const {_id, index, name, image} = props;

    return (
      <tr>
        <td>
          <span className="fw-normal">{index}</span>
        </td>
        <td>
          <img
            src={image}
            alt={name}
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
        </td>
        <td>
          <span className="fw-normal">{name}</span>
        </td>
        <td>
          <Button bsPrefix="text" as={Link} to={`/updatelist/${_id}`}>
            <FontAwesomeIcon icon={faEdit} className="me-3" />
          </Button>
          <Button bsPrefix="text" href="#" onClick={() => {setModalShow(true); setSelectedBreed(_id)}}>
            <FontAwesomeIcon icon={faTrashAlt} color="#e11d48" />
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom" width="5%">No</th>
              <th className="border-bottom">Image</th>
              <th className="border-bottom">Breed Name</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? <tr>
              <td colSpan="4" className="text-center">Loading...</td>
            </tr> : breeds.map((breed, index) => (
              <TableRow key={`breed-${breed._id}`} index={index + 1} {...breed} />
            ))}
          </tbody>
        </Table>

        <ModalDeleteBreed
          show={modalShow}
          onHide={() => setModalShow(false)}
          selectedBreed={selectedBreed}
          page={page}
          setPage={setPage}
        />

        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination
              postsPerPage={limit}
              totalPosts={totalBreeds}
              page={page}
              setPage={setPage}
            />
          </Nav>
          <small className="fw-bold">
            Showing <b>{(page === Math.ceil(totalBreeds / limit)) ? totalBreeds : limit * page}</b> out of <b>{totalBreeds}</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
