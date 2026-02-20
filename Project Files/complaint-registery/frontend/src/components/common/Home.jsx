import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image1 from '../../Images/Image1.png'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'
import { Navigate } from "react-router-dom";


const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 If logged in, redirect based on role
  if (user) {
    if (user.userType === "admin") {
      return <Navigate to="/AdminHome" />;
    }
    if (user.userType === "agent") {
      return <Navigate to="/AgentHome" />;
    }
    return <Navigate to="/Homepage" />; // ordinary user
  }

  // 🌐 If NOT logged in, show landing page (existing UI)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>ComplaintCare </Navbar.Brand>
          <ul className="navbar-nav">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/signup" className="nav-link text-light">
                SignUp
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>

      <Container className="home-container">
        <div className="left-side">
          <img src={Image1} alt="" />
        </div>
        <div className="right-side">
          <p>
            <span className="f-letter">Empower Your Team,</span><br />
            <span className="s-letter">
              Exceed Customer Expectations: Discover our
            </span><br />
            <span className="t-letter">
              Complaint Management Solution
            </span><br />
            <Link to="/Login">
              <Button className="mt-3 register">
                Register your Complaint
              </Button>
            </Link>
          </p>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Home
