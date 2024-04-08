
import { Link } from "react-router-dom";
import './Product.css';
import Picture from "../assets/dish-1.png"





export const Product = ({ name, price, description, productId}) => {
  return (
    <>
      <div className="product">
        <img src={Picture} alt="{name}"/>
        <div className="product__info">
          <p className="info__name">{name}</p>
          <p className="info__description">{description}</p>
          <p className="info__price">{price}</p>
          <Link to={`/Product/${productId}`} className="info__button">
            View
          </Link>
        </div>
      </div>
  </>

  )
};

export default Product;
