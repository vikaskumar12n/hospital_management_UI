"use client";

import React from "react";
import { Button } from "react-bootstrap";

const Partners = () => {
  return (
    <section className="hero position-relative d-flex align-items-center text-white">
      {/* Background Overlay */}
      <div className="overlay"></div>

      {/* Content Container */}
      <div className="container position-relative">
        <h6 className="text-uppercase text-danger fw-bold">
          Total Health Care Solution
        </h6>
        <h1 className="display-4 fw-bold " style={{ color: "#001F3F" }}>
          Your Most Trusted <br /> Health Partner
        </h1>
        <p className="lead fw-700"  style={{ color: "#001F3F" }}>
          A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
          quisquam <br/>aperiam maiores sunt fugit, deserunt rem suscipit placeat.
        </p>
        <Button variant="danger"  className="rounded-pill  px-4 py-2">
          MAKE APPOINTMENT →
        </Button>
      </div>

      {/* Scroll-Up Button */}
      <a href="#" className="scroll-up btn btn-danger rounded-circle">
        ↑
      </a>
    </section>
  );
};

export default Partners;
