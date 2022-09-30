import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";

import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";

import products from "../assets/fake-data/products";

import Category from "../components/UI/category/Category";
import ProductCard from "../components/UI/product-card/ProductCard";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="Home">
      {/* Hero banner */}
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

              <div className="hero__btns mt-4">
                <Button className="hero__btns__order">
                  <Link to="/foods">Order now</Link>
                  <i className="ri-arrow-right-s-line"></i>
                </Button>

                <button className="btn hero__btns__all">
                  <Link to="/foods">See all foods</Link>
                </button>
              </div>

              <div className="hero__service">
                <p className="hero__service__item">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>
                  No shipping charge
                </p>

                <p className="hero__service__item">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span>
                  100% secure checkout
                </p>
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

      {/* Category */}
      <section>
        <Category />
      </section>

      {/* feature */}
      <section>
        <Container className="feature__content">
          <Col lg="12" className="text-center">
            <h5 className="feature__content__subtitle mb-4">What we serve</h5>
            <h2 className="feature__content__title">Just sit back at home</h2>
            <h2 className="feature__content__title">
              we will <span>take care</span>
            </h2>
            <p className="feature__content__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officiis?
            </p>
            <p className="feature__content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              eius.
            </p>
          </Col>

          <div className="feature__content__carousel">
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__content__carousel__item">
                  <img src={item.imgUrl} alt="feature-img" />
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </div>
        </Container>
      </section>

      {/* product card */}
      <section>
        <Container className="mt-5">
          <Row>
            <Col lg="12" className="text-center mt-5">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category">
                <button
                  className={`food__category__button-all ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}>
                  All
                </button>
                <button
                  className={`${category === "BURGER" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("BURGER")}>
                  <img src={foodCategoryImg01} alt="" />
                  <span>Burger</span>
                </button>
                <button
                  className={`${category === "PIZZA" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("PIZZA")}>
                  <img src={foodCategoryImg02} alt="" />
                  <span>Pizza</span>
                </button>
                <button
                  className={`${category === "BREAD" ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory("BREAD")}>
                  <img src={foodCategoryImg03} alt="" />
                  <span>Bread</span>
                </button>
              </div>
            </Col>

            {/* list product */}
            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <Link to={`/foods/${item.id}`} className="product__item">
                  <ProductCard item={item} />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              1
            </Col>
            <Col lg="6" md="6">
              1
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
