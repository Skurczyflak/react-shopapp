import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductForm.module.scss';

const ProductForm = ({currentColor, setCurrentColor, currentSize, setCurrentSize, ...props}) => (

    <form onSubmit={props.onSubmit}>
        <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize {...props} currentSize={currentSize} setCurrentSize={setCurrentSize} />
        </div>
        <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor {...props} currentColor={currentColor} setCurrentColor={setCurrentColor} />
        </div>
        <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
        </Button>
    </form>

);

export default ProductForm;

