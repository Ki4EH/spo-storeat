import NavLink from "./NavLink";
import Image from "next/image";
import styles from "@/styles/Links.module.scss";
const links = [
    {
      src: "dairy-products.svg",
      title: "Мои продукты",
      path: "/products",
    },
    {
      src: "cutlery.svg",
      title: "Меню",
      path: "/menu",
    },
    {
      src: "menu.svg",
      title: "Рецепты",
      path: "/recipes",
    }
  ];

  const Links = () => {
  
    return (
        <div className={styles.list}>
          {links.map((link) => (
             <>
             <div className={styles.list_image}>
                 <Image
                     src={link.src}
                     width={25}
                     height={25}
                     alt=""
                 />
             </div>
             <p className={styles.list_tittle}><NavLink item={link} key={link.title} /></p>
           
             </>
             
          ))} 
         
         </div>
        
    );
  };
  
  export default Links;