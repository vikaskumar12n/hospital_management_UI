'use client'
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className=" text-light py-2" style={{ backgroundColor: "#001F3F" }}>
        <div className="container d-flex justify-content-between">
          <div>
            <i className="bi bi-envelope"></i> support@novena.com &nbsp;
            <i className="bi bi-geo-alt"></i> Address Ta-134/A, New York, USA
          </div>
          <div>
            <strong>Call Now:</strong> <span className="text-warning">852-811-8190</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <img src="\images\images\logo.png" alt="Novena Logo" width={110} height={40} className="me-2" />
           
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">Services</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="deptDropdown" role="button" data-bs-toggle="dropdown">
                  Department
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/department/cardiology">Cardiology</Link></li>
                  <li><Link className="dropdown-item" href="/department/neurology">Neurology</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="doctorsDropdown" role="button" data-bs-toggle="dropdown">
                  Doctors
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/doctors/list">Doctor List</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/blog/articles">Articles</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;




