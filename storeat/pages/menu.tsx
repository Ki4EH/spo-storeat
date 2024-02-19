import Sidebar from '../components/sidebar';
import style from '../styles/menu.module.css';
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({subsets: ['latin']})

const Menu = () =>{
    return(
        <div className={montserrat.className}>
            <div className={style.menu}>
            <div className={style.header}></div>
                <div className={style.wrapper_menu}>
                    <div className={style.menu_sidebar}>
                    <Sidebar />
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Menu;