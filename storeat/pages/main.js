import styles from '../styles/style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import TittleDescription from '../components/tittle_description';
import Tittle from '../components/tittle';


const Main = () => {
  return (
    <>

        <div className={styles.image_back} style={{backgroundImage: `url(/background_1.svg)`}}>
          {/* <div className={styles.header} /> */}
          
          <div className={styles.wrapper}>
          <div className={styles.img_leaves}>
            <Image
              src="\leaves-2-svgrepo-com 1.svg"
              width={218}
              height={207}
              alt=""
            />
          </div>
            <div className={styles.tittle}><Tittle /></div>
            <h2 className={styles.tittle_description} ><TittleDescription /></h2>
            <p className={styles.description}>Планируйте свой рацион, следите за КБЖУ, делитесь рецептами или блять сука какой текст тут нахуй аааа</p>
            <button className={styles.btn}><Link href="#">Зарегистрироваться</Link></button>
            <div className={styles.btn_description}>Уже есть аккаунт?<Link href="#">Войти</Link></div>
            <div className={styles.link_account}></div>
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

    </>
  );
};

export default Main;