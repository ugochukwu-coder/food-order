import './CartItem.css';
import Picture from "../assets/dish-1.png"
import {Link} from 'react-router-dom';
 export const CartItem = () => {
  return(
    <div className='cartitem'>
      <div className='cartitem__image'>
       <img src={Picture} alt="pics"/>
      </div>

      <Link to="/ProductScreen" className="cartitem__name">
          <p>Product 1</p>
        </Link>

        <p className='cartitem__price'>N10,000</p>

        <select className='cartitem__select'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button className='cartitem__deleteBtn'>
          trash
        </button>
    </div>
  )
}

export default CartItem;