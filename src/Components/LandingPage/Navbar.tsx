'use client'
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from 'react-bootstrap';
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
            <img src="\images\images\logo.png" alt="Novena Logo" width={150} height={50} className="me-2" />
           
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/services">Services</Link>
              </li>
          

<Dropdown>
  <Dropdown.Toggle variant="none" style={{border:"none"}} id="deptDropdown">
    Department
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item as={Link} href="/department/cardiology">Cardiology</Dropdown.Item>
    <Dropdown.Item as={Link} href="/department/neurology">Neurology</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

              
<Dropdown>
  <Dropdown.Toggle variant="none" style={{border:"none"}} id="deptDropdown">
    Doctor
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item as={Link} href="/department/cardiology">Doctor </Dropdown.Item>
    <Dropdown.Item as={Link} href="/department/neurology">Doctor single</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown>
  <Dropdown.Toggle variant="none" style={{border:"none"}} id="deptDropdown">
   Blog
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item as={Link} href="/department/cardiology">Blog with sidebar </Dropdown.Item>
    <Dropdown.Item as={Link} href="/department/neurology">Blog single</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
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




