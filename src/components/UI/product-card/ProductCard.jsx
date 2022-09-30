import React from "react";

import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
    const { id, title, image01, price } = props.item;
  //   const dispatch = useDispatch();

  //   const addToCart = () => {
  //     dispatch(
  //       cartActions.addItem({
  //         id,
  //         title,
  //         image01,
  //         price,
  //       })
  //     );
  //   };

  return (
    <>
      <div className="product__item__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__item__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="product__item__content__price">
          <span>${price}</span>
          <button className="product__item__price__btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
