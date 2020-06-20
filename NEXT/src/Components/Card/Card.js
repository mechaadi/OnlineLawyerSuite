import styles from './card.module.css'
const Card = (props) => {
    return (
        <div className={styles.lawyer_items_card}>
            <div className={styles.items_card_price_container}>
                <div className={styles.items_card_price}>
                    ₹{props.price}
                </div>
            </div>
            <div className={styles.items_card_details_container}>
                <div className={styles.items_card_image_container}>
                    <img src="https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" className={styles.items_card_image} />

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
