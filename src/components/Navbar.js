import React from "react";
import { Navbar } from "@themesberg/react-bootstrap";

export default (props) => {
  const { title, children } = props;

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0 pt-0">
      <div className="d-block mb-4 mb-md-0">
        <h4>{title}</h4>
        {children}
      </div>
    </Navbar>
  );
};
