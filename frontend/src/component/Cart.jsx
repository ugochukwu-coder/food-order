import './Cart.css'
import {CartItem} from '../component/CartItem';
export const Cart = () => {
  return(
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>Shopping Cart</h2>
        <CartItem/>
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>Subtotal (0) items</p>
          <p>N10,000</p>
        </div>
        <div>
          <button>Proceed To Chekout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;