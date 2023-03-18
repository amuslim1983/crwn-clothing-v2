import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const deleteItemFromCartHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addItemQuantityToCartHandler = () => addItemToCart(cartItem);
  const decreaseItemQuantityToCartHandler = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${imageUrl}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decreaseItemQuantityToCartHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemQuantityToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={deleteItemFromCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
