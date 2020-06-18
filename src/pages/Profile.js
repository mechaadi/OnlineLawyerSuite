import styles from './css/profile.module.css';
import Nav from '../Components/Navbar/Navbar';
import ProfileCard from '../Components/Profile/Profile.js';
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';
import Settings from '../Components/Settings/Settings';
import { useState } from 'react';
import {getUser, updateProfile} from "../api/user"
import {uploadProfilePicture} from "../api/file"
const Profile = () => {

    getUser();
    

    const profilePicListener = (e)=>{
        const doc = document.getElementById("profilePic")
        uploadProfilePicture(doc.files[0])
        
    }


    const Account_Dark = "https://cdn.discordapp.com/attachments/715197944202002584/717011951003369522/icons8-account-50.png";
    const Account_White = "https://cdn.discordapp.com/attachments/715197944202002584/717302392814567484/icons8-account-50.png";
    const Change_Password_Dark = "https://cdn.discordapp.com/attachments/715197944202002584/717011949543751791/icons8-gear-50.png";
    const Change_Password_White = "https://cdn.discordapp.com/attachments/715197944202002584/717302377631449138/icons8-gear-50.png";
    const Notifications_Dark = "https://cdn.discordapp.com/attachments/715197944202002584/717011952173449296/icons8-push-notifications-50.png";
    const Notifications_Light = "https://cdn.discordapp.com/attachments/715197944202002584/717302411676483645/icons8-push-notifications-50.png";
    const Privacy_Dark = "https://cdn.discordapp.com/attachments/715197944202002584/717011953951703100/icons8-cloud-privacy-50.png";
    const Privacy_Light = "https://cdn.discordapp.com/attachments/715197944202002584/717302510439891004/icons8-cloud-privacy-50.png";
    const Membership_Dark = "https://cdn.discordapp.com/attachments/715197944202002584/717011955080232970/icons8-ledger-50.png";
    const Membership_Light = "https://cdn.discordapp.com/attachments/715197944202002584/717302527091015780/icons8-ledger-50.png";
    const Logout_Dark = "https://cdn.discordapp.com/attachments/715197944202002584/717011957353283694/icons8-logout-rounded-down-50.png";
    const Logout_Light = "https://cdn.discordapp.com/attachments/715197944202002584/717302540932350003/icons8-logout-rounded-down-50.png";
    const Arrow_Dark = "https://cdn.discordapp.com/attachments/715197944202002584/717303034153271366/icons8-chevron-right-50.png";
    const Arrow_Light = "https://cdn.discordapp.com/attachments/715197944202002584/717303031242293429/icons8-chevron-right-50_1.png";

    const [Account, setAccount] = useState(true);
    const [Change_Password, setChange_Password] = useState(true);
    const [Notifications, setNotifications] = useState(true);
    const [Privacy, setPrivacy] = useState(true);
    const [Membership, setMembership] = useState(true);
    const [Logout, setLogout] = useState(true)

    const iconChange_Account = (dataFromChild) => {
        setAccount(dataFromChild);
    }

    const iconChange_Change_Password = (dataFromChild) => {
        setChange_Password(dataFromChild);
    }

    const iconChange_Notifications = (dataFromChild) => {
        setNotifications(dataFromChild);
    }

    const iconChange_Privacy = (dataFromChild) => {
        setPrivacy(dataFromChild);
    }

    const iconChange_Membership = (dataFromChild) => {
        setMembership(dataFromChild);
    }

    const iconChange_Logout = (dataFromChild) => {
        setLogout(dataFromChild);
    }


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

                        <Settings hoverData={iconChange_Account} describe="Account" img={(Account === false) ? Account_White : Account_Dark} Arrow={(Account === true) ? Arrow_Dark : Arrow_Light} />

                        <Settings hoverData={iconChange_Change_Password} describe="Change Password" img={(Change_Password === false) ? Change_Password_White : Change_Password_Dark} Arrow={(Change_Password === true) ? Arrow_Dark : Arrow_Light} />

                        <Settings hoverData={iconChange_Notifications} describe="Notifications" img={(Notifications === false) ? Notifications_Light : Notifications_Dark} Arrow={(Notifications === true) ? Arrow_Dark : Arrow_Light} />

                        <Settings hoverData={iconChange_Privacy} describe="Privacy" img={(Privacy === false) ? Privacy_Light : Privacy_Dark} Arrow={(Privacy === true) ? Arrow_Dark : Arrow_Light} />

                        <Settings hoverData={iconChange_Membership} describe="Membership" img={(Membership === false) ? Membership_Light : Membership_Dark} Arrow={(Membership === true) ? Arrow_Dark : Arrow_Light} />

                        <Settings hoverData={iconChange_Logout} describe="Logout" img={(Logout === false) ? Logout_Light : Logout_Dark} Arrow={(Logout === true) ? Arrow_Dark : Arrow_Light} />

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
                                <input id="profilePic" type="file"/>
                                <button onClick={profilePicListener}>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile