import React from "react";
import moment from "moment-timezone";
import { Col } from "@themesberg/react-bootstrap";

export default () => {
  const currentYear = moment().get("year");

  return (
    <div>
      <footer className="footer section py-5">
        <Col xs={12} className="mb-4 mb-lg-0">
          <p className="mb-0 text-center text-xl">
            Copyright © 2019-{`${currentYear} `}- depsaaa.
          </p>
        </Col>
      </footer>
    </div>
  );
};
