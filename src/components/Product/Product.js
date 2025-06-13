import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    const size = props.sizes.find(size => size.name === currentSize);
    const price = parseInt(props.basePrice + size.additionalPrice);
    return price;
  }
  
  const handleAddToCart = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('========================');
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${getPrice()}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  }


  return (
    <article className={styles.product}>
      <ProductImage {...props} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm {...props} onSubmit={handleAddToCart} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.array,
  sizes: PropTypes.array
};

export default Product;