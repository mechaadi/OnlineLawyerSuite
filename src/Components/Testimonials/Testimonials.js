import styles from "./Testimonials.module.css";
const Component = () => {
    return(
        <div className={styles.main}>
            <div className={styles.heading}>
                Testimonials
            </div>
            
            <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore
            </div>
            <div className ={styles.box}>
            <div className={styles.A}>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div> 
            </div>
            <div className={styles.A}>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div> 
            </div>
            </div>
        </div>
    )
}

export default Component