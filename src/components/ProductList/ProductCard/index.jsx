import styles from "./style.module.scss"

export const ProductCard = ({ product, addProduct}) => {
    return(
        <li className={styles.listStyle}>
            <img src={product.img} alt={product.name} className={styles.imgProduct}/>
            <div className={styles.flexBox}>
                <h3 className="heading3">{product.name}</h3>
                <span className="headline">{product.category}</span>
                <span className="body-600 green">{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
                <button className={`${styles.btnAdd} btn`} onClick={() => addProduct(product)}>Adicionar</button>
            </div>
        </li>
    )
}