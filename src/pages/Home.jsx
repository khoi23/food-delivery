import React from "react";
import { Col, Container, Row } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";

import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-4">Easy way to make an order</h5>
                <h1 className="mb-5 hero__content__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br /> Qui magni delectus tenetur autem, sint veritatis!
                </p>
              </div>

              <div className="hero__btns gap-5 mt-4">
                <button className="hero__btns__order btn">
                  Order now <i className="ri-arrow-right-s-line"></i>
                </button>

                <button className="hero__btns__all btn">
                  <Link to="/foods">See all foods</Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      Home
    </Helmet>
  );
};

export default Home;
