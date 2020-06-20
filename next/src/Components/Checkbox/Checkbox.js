import styles from './checkbox.module.css';
const Checkbox = (props) => {
    return (
        <div className={styles.lawyer_filter_box_check_box_container}>
            <input type="checkbox" style={{ border: "red", width: 20, height: 20 }} />
            <div className={styles.checkbox}>
                {props.checkbox}
            </div>
        </div>
    )
}

export default Checkbox
