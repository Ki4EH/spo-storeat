import styles from "../styles/sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import Title from './title';
import Profile_menu from './profile_menu';

const Sidebar = () =>{
    return(
        <div className={styles.sidebar}>
            <div className={styles.tittle}><Title /></div>
            <div className={styles.account}><Profile_menu /></div>
            <div className={styles.list}>
                <div className={styles.list_image}>
                    <Image
                        src="dairy-products.svg"
                        width={25}
                        height={25}
                        alt=""
                    />
                </div>
                <p className={styles.list_tittle}><Link style={{ textDecoration: 'none', fontSize: '15px', color: '#FFE3CE' }} href="#">Мои продукты</Link></p>
                   
                <div className={styles.list_image}>
                    <Image
                        src="cutlery.svg"
                        width={25}
                        height={25}
                        alt=""
                    />
                </div>
                <p className={styles.list_tittle}><Link style={{ textDecoration: 'none', fontSize: '15px', color: '#FFE3CE' }} href="/menu">Меню</Link></p>

                <div className={styles.list_image}>
                    <Image
                        src="menu.svg"
                        width={25}
                        height={25}
                        alt=""
                    />
                </div>
                <p className={styles.list_tittle}><Link style={{ textDecoration: 'none', fontSize: '15px', color: '#FFE3CE' }} href="/my_recipes">Рецепты</Link></p>
                      
                
            </div>
            
        </div>    
    )
}

export default Sidebar;