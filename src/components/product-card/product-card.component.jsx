import './product.card.scss';
import MyButton from '../my-button/my-button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  console.log(`name: ${name} price:${price} imgUrl:${imageUrl}`);
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='className'>{price}</span>
      </div>
      <MyButton buttonType='inverted'>Add To Cart</MyButton>
    </div>
  );
};

export default ProductCard;
