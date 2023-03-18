import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <h1 className='name'>{name}</h1>
        <span className='price'>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
