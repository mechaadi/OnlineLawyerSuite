import styles from './banner.module.css';
import Button from '../Buttons/Button.js';
const Banner = (props) => {
    return (

        <div className={styles.banner}>
            <div className={styles.banner_heading}>
                {props.planName}
            </div>
            <div className={styles.banner_price}>
                {props.price}
            </div>
            <div className={styles.banner_description}>
                {props.description}
            </div>
            <div className={styles.banner_features}>
                <ul className={styles.banner_features_list}>
                    <li className={styles.list}>{props.point_zero}</li>
                    <li className={styles.list}>{props.point_one}</li>
                </ul>
            </div>
            <div className={styles.banner_button}>
                <Button name={props.button} />
            </div>
        </div>

    )
}

export default Banner;
