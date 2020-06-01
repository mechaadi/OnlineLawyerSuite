import styles from './css/profile.module.css';
import Nav from '../Components/Navbar/Navbar';
import ProfileCard from '../Components/Profile/Profile.js';
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';
const Profile = () => {
    return (
        <div>
            <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}</style>
            <div className={styles.navbarhandler}>
                <Nav />
            </div>
            <div className={styles.main_container}>

                <div className={styles.container}>
                    <div className={styles.left_profile_container}>



                        <ProfileCard />

                        <div className={styles.left_profile_button}>
                            <Button name="Edit Picture" />
                        </div>



                        <div className={styles.some_box}>

                            <div className={styles.box}>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717011951003369522/icons8-account-50.png" />
                                </div>
                                <div className={styles.desc}>
                                    Account
                                </div>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717012311784554577/icons8-chevron-right-60.png" />
                                </div>
                            </div>

                        </div>







                        <div className={styles.some_box}>

                            <div className={styles.box}>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717011949543751791/icons8-gear-50.png" />
                                </div>
                                <div className={styles.desc}>
                                    Change Password
                                </div>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717012311784554577/icons8-chevron-right-60.png" />
                                </div>
                            </div>

                        </div>







                        <div className={styles.some_box}>

                            <div className={styles.box}>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717011952173449296/icons8-push-notifications-50.png" />
                                </div>
                                <div className={styles.desc}>
                                    Notifications
                                </div>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717012311784554577/icons8-chevron-right-60.png" />
                                </div>
                            </div>

                        </div>







                        <div className={styles.some_box}>

                            <div className={styles.box}>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717011953951703100/icons8-cloud-privacy-50.png" />
                                </div>
                                <div className={styles.desc}>
                                    Privacy
                                </div>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717012311784554577/icons8-chevron-right-60.png" />
                                </div>
                            </div>

                        </div>







                        <div className={styles.some_box}>

                            <div className={styles.box}>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717011955080232970/icons8-ledger-50.png" />
                                </div>
                                <div className={styles.desc}>
                                    Membership
                                </div>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717012311784554577/icons8-chevron-right-60.png" />
                                </div>
                            </div>

                        </div>







                        <div className={styles.some_box}>

                            <div className={styles.box}>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717011957353283694/icons8-logout-rounded-down-50.png" />
                                </div>
                                <div className={styles.desc}>
                                    Logout
                                </div>
                                <div className={styles.img_cont}>
                                    <img className = {styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717012311784554577/icons8-chevron-right-60.png" />
                                </div>
                            </div>

                        </div>














                    </div>











                    <div className={styles.right_profile_container}>



                        <div className={styles.right_profile_information_container}>

                            <div className={styles.right_profile_heading}>
                                Email
                        </div>
                            <div className={styles.right_profile_data}>
                                Sidm9@example.com
                        </div>
                            <div className={styles.right_profile_heading}>
                                Display Name
                        </div>
                            <div className={styles.right_profile_data}>
                                <Input placeholder="Harvey Spector" />
                            </div>

                            <div className={styles.right_profile_heading}>
                                Location
                        </div>
                            <div className={styles.right_profile_data}>
                                <Input placeholder="Location" />
                            </div>

                        </div>








                    </div>







                </div>


            </div>
        </div>
    )
}
export default Profile