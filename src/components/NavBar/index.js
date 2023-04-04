import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../../assets/imgs/icons8-sparkling-100 (1).png";
import navIcon1 from "../../assets/imgs/nav-icon1 (1).svg";
import navIcon2 from "../../assets/imgs/github-svgrepo-com.svg";
import navIcon3 from "../../assets/imgs/icons8-twitter.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdatedActiveLink = (value) => {
    setActiveLink(value);
  };
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <NavLink to="/">
          {" "}
          <Navbar.Brand>
            <img src={logo} alt="Logo" className="mr-10px" />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdatedActiveLink("home")}
            >
              Home
            </Nav.Link>
            {pathname === "/" && (
              <>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdatedActiveLink("skills")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#project"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdatedActiveLink("projects")}
                >
                  Projects
                </Nav.Link>
              </>
            )}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/hermione-dadheech/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/Hermione2408"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://twitter.com/HermioneDadhee1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
              <button className="vvd" onClick={() => navigate("/contact")}>
                <span>Let's connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
