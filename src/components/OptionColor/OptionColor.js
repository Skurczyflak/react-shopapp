import styles from './OptionColor.module.scss';
import clsx from 'clsx';
const OptionColor = ({ currentColor, setCurrentColor, ...props }) => (
    <ul className={styles.choices}>
        {props.colors.map(color =>
        <li key={color}>
            <button type="button" className={clsx(styles["color" + color.charAt(0).toUpperCase() + color.slice(1) + ""], currentColor === color && styles.active)} onClick={() => setCurrentColor(color)} />
        </li>
        )}
    </ul>
);

export default OptionColor;

