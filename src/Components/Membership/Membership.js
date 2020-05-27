import Link from 'next/link'
import styles from './membership.module.css'
import Button from '../Buttons/Button'
import LightButton from '../Buttons/LightButton'
import { useRouter } from 'next/router'

const Membership = () => {
    const router = useRouter()
    function hanleButtonClick (event){
        console.log(event)
        router.push('/login')
    }
    return (
        <div className={styles.membership}>
            <div className={styles.mem_left}>
                <div className={styles.mem_content}>
                    Membership
                     </div>
                <div className={styles.mem_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
            </div>
            <div className={styles.mem_right}>
                <Link href="/login">
                    <Button onChildClick={hanleButtonClick} name="Join Today" />
                </Link>
                <Link href="/" passHref >
                    <LightButton name="Contact Us" />
                </Link>
            </div>

        </div>
    )
}
export default Membership
