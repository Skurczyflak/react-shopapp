import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState, useMemo, useCallback } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const price = useMemo(() => {
    const size = props.sizes.find(size => size.name === currentSize);
    const sum = parseInt(props.basePrice + size.additionalPrice);
    return sum;
  }, [currentSize, props.basePrice, props.sizes]);
  
  const handleAddToCart = useCallback(e => {
    e.preventDefault();
    console.log('Summary');
    console.log('========================');
    console.log(`Name: ${props.title}`);
    console.log(`Price: ${price}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Color: ${currentColor}`);
  },[price, currentSize, currentColor, props.title]);
  
  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm colors={props.colors} sizes={props.sizes} onSubmit={handleAddToCart} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  props: PropTypes.array
};

export default Product;