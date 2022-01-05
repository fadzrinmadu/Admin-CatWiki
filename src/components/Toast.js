import React from 'react';
import { Toast, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

export default ({ showDefault, handleCloseDefault }) => {
  // const [showDefault, setShowDefault] = useState(true);
  // const handleCloseDefault = () => setShowDefault(!showDefault);

  return (
    <Toast show={showDefault} onClose={handleCloseDefault} className="my-3">
      <Toast.Header className="text-primary" closeButton={false}>
        <FontAwesomeIcon icon={faBootstrap} />
        <strong className="me-auto ms-2">Volt</strong>
        <small>11 mins ago</small>
        <Button variant="close" size="xs" onClick={handleCloseDefault} />
      </Toast.Header>
      <Toast.Body>
        Hello, world! This is a toast message.
      </Toast.Body>
    </Toast>
  );
};
