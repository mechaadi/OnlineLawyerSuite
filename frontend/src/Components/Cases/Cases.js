import React from 'react'
import styles from './cases.module.css'
const Cases = (props) => {
    return (
        <div className={styles.lawyer_cases_box}>
            <div className={styles.lawyer_cases_name}>
                {props.caseTitle} <span className = {styles.pubat} >
                    {props.pubAt}

                </span>
            </div>
            <div className={styles.line} />


            <h4>Client</h4>
            <h5>Email: {props.caseEmail}</h5>
            <h5>Name: {props.caseName}</h5>
            <div className={styles.line} />
            <div className={styles.lawyer_cases_description}>
                {props.caseDescription}
            </div>
        </div>
    )
}

export default Cases
