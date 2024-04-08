import './Menu.css';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

//Components
import {Product} from "../component/Product";

//Actions
import { getProducts as listProducts} from '../redux/actions/productAction';
export const Menu = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error} = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);
  
  
  return(
      <div className="menuscreen">
        <h2 className="menuscreen__title">Tasteful Food</h2>
        <div className="menuscreen__products">
          {loading ? (
            <h2>Loading...</h2>
          ): error ? (
            <h2>{error}</h2>
          ): (
            products.map((product) => <Product
            key={product._id}
            name={product.name}
            productId={product._id}
            Price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            />)
          )
        }
        
        </div>
      </div>
  )
  
};
export default Menu;