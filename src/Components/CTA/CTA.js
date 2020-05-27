import styles from './CTA.module.css';
import LightButton from '../Buttons/LightButton'

const Component = () => {
    return (
        <div className={styles.main}>
            <div className={styles.h1}> Features listing with CTAs and brief description. </div>
            <div className={styles.ABContainer}>
                <div className={styles.A}>
                    <div className={styles.one}>
                        <div className={styles.heading}>
                            Sed ut perspiciatis
                    </div>
                        <div className={styles.description}>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est.
                    </div>
                        <div className={styles.button} className={styles.Abutton}>
                        <LightButton name="Learn More" />
                        </div>
                    </div>
                    <div className={styles.one}>
                        <div className={styles.heading}>
                            Lorem ipsum dolor
                    </div>
                        <div className={styles.description}>
                            Amet, consectetur adipiscing elit, sed do eiusmod tempor inc
                            ididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi.
                    </div>
                        <div className={styles.button} className={styles.Abutton}>
                        <LightButton name="Learn More" />
                        </div>
                    </div>
                </div>
                <div className={styles.A}>
                    <div className={styles.one}>
                        <div className={styles.heading}>
                            Nemo enim ipsam
                    </div>
                        <div className={styles.description}>
                            Consequuntur magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </div>
                        <div className={styles.button}>
                        <LightButton name="Learn More" />
                        </div>
                    </div>
                    <div className={styles.one}>
                        <div className={styles.heading}>
                            Tempor incididunt
                    </div>
                        <div className={styles.description}>
                            Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora.
                    </div>
                        <div className={styles.button}>
                        <LightButton name="Learn More" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component