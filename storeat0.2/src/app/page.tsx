import Image from "next/image";
import Link from "next/link";
import style from "./HomePage.module.scss";
import Title from "@/components/Title";
import TitleDescription from "@/components/TitleDescription";
import Slider from "@/components/Slider";

export default function HomePage() {

  return (
    <main>
      <div className={style.main}>
        <div className={style.image_back} style={{backgroundImage: `url(/background_1.svg)`}}>         
          <div className={style.wrapper}>
            <div className={style.img_leaves}>
              <Image
                src="\leaves-2-svgrepo-com 1.svg"
                width={218}
                height={207}
                alt=""
              />
            </div>
            <h2><Title /></h2>
            <h3><TitleDescription /></h3>
            <p>Простой путь к более осознанному управлению продуктами в холодильнике!</p>
            <div className={style.btn__link}><Link style={{ textDecoration: 'none' }} href="/menu"><button className={style.btn}>Зарегистрироваться</button></Link></div>
            <div className={style.btn_description}>Уже есть аккаунт?<Link style={{ textDecoration: 'none', fontSize: 'inherit', fontWeight: 'bold', color: '#3E3F3C' }} href="/login">Войти</Link></div>
            <div className={style.wrapper_image}>
              <Image
                src="/main-page_image.svg"
                width={617}
                height={617}
                alt=""
              />
            </div>

          </div>
          
        </div>
        <div style={{marginTop: '-5px'}}>
        <Slider />
        </div>
        
        </div>
    </main>
  );
}
