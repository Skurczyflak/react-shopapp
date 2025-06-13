import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = ({currentColor, setCurrentColor, currentSize, setCurrentSize, onSubmit, sizes, colors}) => (

    <form onSubmit={onSubmit}>
        <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
        </div>
        <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
        </div>
        <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
        </Button>
    </form>

);

ProductForm.propTypes = {
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
    currentSize: PropTypes.string,
    setCurrentSize: PropTypes.func,
    onSubmit: PropTypes.func,
    sizes: PropTypes.array,
    colors: PropTypes.array
};


export default ProductForm;