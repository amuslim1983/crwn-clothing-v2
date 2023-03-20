import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import MyButton from '../my-button/my-button.component';
import { CartContext } from '../contexts/cart.context';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const navigate = useNavigate();
  const checkOutHandler = () => {
    navigate('/checkout');
  };

  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <span className='empty-message'>Your cart is empty.</span>
        )}
      </div>
      <MyButton onClick={checkOutHandler}>Go To Cart</MyButton>
      {cartItems.length ? '' : ''}
    </div>
  );
};

export default CartDropdown;
