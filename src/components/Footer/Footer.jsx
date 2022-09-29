import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "./about",
  },
  {
    display: "Liên hê",
    path: "./contact",
  },
  {
    display: "Tuyển Dụng",
    path: "./about",
  },
  {
    display: "Tin tức",
    path: "./about",
  },
  {
    display: "Giới thiệu",
    path: "./about",
  },
];

const footerCustomerLinks = [
  {
    display: "Giới thiệu",
    path: "./about",
  },
  {
    display: "Liên hê",
    path: "./contact",
  },
  {
    display: "Liên hê",
    path: "./contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p className="footer__newsletter__sub">Subscribe our newsletter</p>
            <div className="footer__newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>

            <h5 className="footer__time__title">Time Open</h5>
            <div className="footer__time">
              <div className=" footer__time__item">
                <span>Sunday - Thursday</span>
                <p>6:00am - 1:00pm</p>
              </div>
              <div className="footer__time__hr"></div>
              <div className=" footer__time__item">
                <span>Sunday - Thursday</span>
                <p>4:00pm - 10:00pm</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6" className="p-0 ">
            <p className="footer__copyright">
              Copyright - 2022, website made by Muhibur Rahman. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6" className="p-0">
            <div className="footer__social">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com/muhib160">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/muhib160">
                  <i className="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
                  <i className="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i className="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
