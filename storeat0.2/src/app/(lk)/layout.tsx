import type { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar";
import style from "./LK_layout.module.scss";

export default function LKLayout({children}: PropsWithChildren<unknown>){
    return <div>
        <div className={style.menu}>
            <div className={style.header}></div>
            <div className={style.wrapper_menu}>
                <div style={{zIndex: 2}}><Sidebar /></div>
                <div>{children}</div>
            </div>
        </div>
    </div>    
}
