import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeProduct }) => {
   return (
      <li className={styles.flexBoxContainer}>
         <img src={product.img} alt={product.name} className={styles.imgModal} />
         <div className={styles.flexBoxDescription}>
            <div className={styles.flexBox}>
               <h3 className="heading3">{product.name}</h3>
               <p className="body-600 green">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            </div>
            <button className={styles.btnDelete}
            aria-label="delete" title="Remover item">
               <MdDelete size={21}
                  onClick={() => removeProduct(product.id)} />
            </button>
         </div>
      </li>
   );
};
