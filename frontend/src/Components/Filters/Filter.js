import React from 'react'
import styles from './filter.module.css'
import Checkbox from '../Checkbox/Checkbox'
const Filter = (props) => {
    return (

        <div>
            <div className={styles.lawyer_filter_box_heading}>
                {props.filter_title}
            </div>
            <div className={styles.lawyer_filter_box_contaienr}>
                <Checkbox checkbox="One" />
                <Checkbox checkbox="Two" />
            </div>
        </div>
    )
}

export default Filter
