import clsx from 'clsx';
import styles from './OptionSize.module.scss';

const OptionSize = ({  currentSize, setCurrentSize, ...props }) => (
    <ul className={styles.choices}>
        {props.sizes.map(size =>
        <li key={size.name}>
            <button type="button" className={clsx(currentSize === size.name && styles.active)} onClick={() => setCurrentSize(size.name)}>{size.name}</button>
        </li>
        )}
    </ul>
);

export default OptionSize;

