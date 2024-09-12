import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"

export const Header = ({ numCart, setIsOpen }) => {
   return (
      <header className={styles.headerStyle}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)} className={styles.buttonStyle}>
               <MdShoppingCart size={21} />
               <span className={styles.spanStyle}>{numCart}</span>
            </button>
         </div>
      </header>
   );
};
