import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({ productList, addProduct }) => {
   return (
      <ul className={styles.containerLi}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProduct={addProduct} />
         ))}
      </ul>
   );
};
