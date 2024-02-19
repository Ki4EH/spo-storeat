import styles from '../styles/sidebar.module.css';
import Image from "next/image";

const Profile_menu = () =>{
    return(
        <>
        <div className={styles.profile}>
            <div className={styles.img_profile__account}>
                <img className={styles.img_profile} src='https://artbs.ru/zakaz/portret_na_zakaz_21.jpg' alt=''/>
                <div className={styles.img_profile_line}>
                <Image
                    src="Line.svg"
                    width={40}
                    height={1}
                    alt=""
                />
                </div>
            </div>
            <div className={styles.login_sidebar}>
                hairynigga228
            </div>
        </div>
        </>
    )
};

export default Profile_menu;