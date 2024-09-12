import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"

export const CartModal = ({ cartList, removeProduct, removeAllProcucts, setIsOpen }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={styles.modalOverlay}>
         <div className={styles.modalBox}>
            <div className={styles.flexBoxModal}>
               <h2 className="heading3 white">Carrinho de compras</h2>
               <button  className={styles.btnClose} onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.containerUl}>
               <ul className={styles.containerItens}>
                  {cartList.length > 0 ? cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeProduct={removeProduct} />
               )) : <p className={styles.notItems}>Não há pedidos</p>}
               </ul>
            </div>
            <div className={styles.containerTotal}>
               <div className={styles.containerValue}>
                  <span className="body-600 grey">Total</span>
                  <span className="body-600">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className={styles.btnRemoveAll} onClick={() => removeAllProcucts()}>Remover todos</button>
            </div>
         </div>

      </div>
   );
};
