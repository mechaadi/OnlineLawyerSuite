import styles from './membership.module.css'
import Button from '../Buttons/Button'
import LightButton from '../Buttons/LightButton'
import { useRouter } from 'next/router'

const Membership = () => {
    const router = useRouter()
    function hanleButtonClick (event){
        router.push('/Login')
    }
    return (
        <div className={styles.membership}
            <div className={styles.mem_left}>
                <div className={styles.mem_content}>
                    Membership
                     </div>
                <div className={styles.mem_text}>Enjoy our exclusive service with uplaw Premium with high prioritiy acess and other benifits </div>
            </div>
            <div className={styles.mem_right}>
                    <Button onChildClick={hanleButtonClick} name="Join Today" />
                    <LightButton name="Contact Us" />
            </div>

        </div>
    )
}
export default Membership
