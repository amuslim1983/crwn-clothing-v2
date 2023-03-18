import { useContext } from 'react';

import MyButton from '../my-button/my-button.component';
import { CartContext } from '../contexts/CartContext';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <MyButton>Go To Cart</MyButton>
    </div>
  );
};

export default CartDropdown;
