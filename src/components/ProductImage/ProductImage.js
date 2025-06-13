import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = ({currentColor, name, title}) => (

    <div className={styles.imageContainer}>
        <img 
            className={styles.image}
            alt={`${title}`}
            src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
    </div>

);

ProductImage.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    currentColor: PropTypes.string
};

export default ProductImage;

