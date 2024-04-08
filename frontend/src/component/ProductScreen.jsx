import './ProductScreen.css';
import Picture from "../assets/dish-1.png"

export const ProductScreen = () => {
  return (
     <div className='productscreen'>
    <div className='productscreen__left'>
      <div className='left__image'>
        <img src={Picture} alt=""/>
      </div>
      <div className='left__info'>
        <p className='left__name'>Product 1</p>
        <p>Price: N10,000</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolorum, soluta autem assumenda laborum obcaecati vel beatae harum eveniet expedita! Repellat veritatis ad illo dignissimos expedita omnis velit eos error.</p>
      </div>
    </div>
    <div className='productscreen__right'>
        <div className='right__info'>
          <p>
            Price: <span>N10,000</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
            </select>
          </p>
          <p>
            <button type="button">PAY</button>
          </p>
        </div>
    </div>
  </div>
  )
}

export default ProductScreen;