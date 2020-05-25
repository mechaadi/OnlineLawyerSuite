import Link from 'next/link'
import styles from './membership.module.css'
import Button from '../Buttons/Button'
import LightButton from '../Buttons/LightButton'
const Membership = () => {
    return (
        <div className={styles.membership}>
            <div className={styles.mem_left}>
                <div className={styles.mem_content}>
                    Membership
                     </div>
                <div className={styles.mem_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
            </div>
            <div className={styles.mem_right}>
                <Link href="/" passHref >
                    <Button name="Join Today" />
                </Link>
                <Link href="/" passHref >
                    <LightButton name="Contact Us" />
                </Link>
            </div>

        </div>
    )
}
export default Membership
