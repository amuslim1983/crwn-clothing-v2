import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

import MyButton from '../my-button/my-button.component';
import './product.card.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { cartItems, addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    //console.log(cartItems, addItemToCart);
    addItemToCart(product);
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='className'>{price}</span>
      </div>
      <MyButton buttonType='inverted' onClick={addProductToCart}>
        Add To Cart
      </MyButton>
    </div>
  );
};

export default ProductCard;
