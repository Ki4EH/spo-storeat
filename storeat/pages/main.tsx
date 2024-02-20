import styles from '../styles/style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import TitleDescription from '../components/title_description';
import Title from '../components/title';



const Main = () => {
  return (
    <>
        <div className={styles.main}>
        <div className={styles.image_back} style={{backgroundImage: `url(/background_1.svg)`}}>
          
          <div className={styles.wrapper}>
          <div className={styles.img_leaves}>
            <Image
              src="\leaves-2-svgrepo-com 1.svg"
              width={218}
              height={207}
              alt=""
            />
          </div>
            <div className={styles.title}><Title /></div>
            <h2 className={styles.title_description} ><TitleDescription /></h2>
            <p className={styles.description}>Простой путь к более осознанному управлению продуктами в холодильнике!</p>
            <div className={styles.btn__link}><Link style={{ textDecoration: 'none', fontSize: '25px', color: '#FFF7E2' }} href="/menu"><button className={styles.btn}>Зарегистрироваться</button></Link></div>
            <div className={styles.btn_description}>Уже есть аккаунт?<Link style={{ textDecoration: 'none', fontSize: '20px', fontWeight: 'bold', color: '#3E3F3C' }} href="#">Войти</Link></div>
            <div className={styles.wrapper_image}>
              <Image
                src="/main-page_image.svg"
                width={617}
                height={617}
                alt=""
              />
            </div>

          </div>

        </div>
        </div>
    </>
  );
};

export default Main;