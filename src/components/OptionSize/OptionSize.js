import clsx from 'clsx';
import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({  currentSize, setCurrentSize, sizes }) => (
    <ul className={styles.choices}>
        {sizes.map(size =>
        <li key={size.name}>
            <button type="button" className={clsx(currentSize === size.name && styles.active)} onClick={() => setCurrentSize(size.name)}>{size.name}</button>
        </li>
        )}
    </ul>
);

OptionSize.propTypes = {
    currentSize: PropTypes.string,
    setCurrentSize: PropTypes.func,
    sizes: PropTypes.array
};

export default OptionSize;

