/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from './card.module.css'
const Card = (props) => {
    return (
        <div onClick={()=>{props.click(props.username)}} className={styles.lawyer_items_card}>
            <div className={styles.items_card_price_container}>
                <div className={styles.items_card_price}>
                    ₹{props.price}
                </div>
            </div>
            <div className={styles.items_card_details_container}>
                <div className={styles.items_card_image_container}>
                    <img src={process.env.REACT_APP_API_URL + "/files/"+props.image} className={styles.items_card_image} />

                </div>
                <div className={styles.items_card_name}>
                    {props.name}
                </div>
                <div className={styles.items_card_cases}>
                    total cases : {props.total_cases}
                </div>
            </div>
        </div>
    )
}

export default Card
