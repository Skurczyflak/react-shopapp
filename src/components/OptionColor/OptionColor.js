import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({ currentColor, setCurrentColor, colors }) => (
    <ul className={styles.choices}>
        {colors.map(color =>
        <li key={color}>
            <button type="button" className={clsx(styles["color" + color.charAt(0).toUpperCase() + color.slice(1) + ""], currentColor === color && styles.active)} onClick={() => setCurrentColor(color)} />
        </li>
        )}
    </ul>
);

OptionColor.propTypes = {
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
    colors: PropTypes.array
};

export default OptionColor;