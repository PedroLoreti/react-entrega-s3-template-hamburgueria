import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";

export const HomePage = () => {
    const getLocalStorage = localStorage.getItem("@PRODUCTS")

    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState(getLocalStorage ? JSON.parse(getLocalStorage) : []);
    const [numCart, setNumCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false)



    useEffect(() => {
        const getProducts = async () => {
            const { data } = await api.get("products")
            setProductList(data)
        }
        getProducts()
    }, [])

    useEffect(() => {
        setNumCart(cartList.length)
        localStorage.setItem("@PRODUCTS", JSON.stringify(cartList));
    }, [cartList])

    const addProduct = (product) => {
        if (!cartList.some(cart => cart.id === product.id)) {
            setCartList([...cartList, product])
        } else {
            alert("Produto Já Adicionado")
        }
    }

    const removeProduct = (productId) => {
        const newCardList = cartList.filter(product => product.id !== productId)
        setCartList(newCardList)
    }

    const removeAllProcucts = () => {
        setCartList([])
    }

    return (
        <>

            <Header numCart={numCart} setIsOpen={setIsOpen} />
            <main>
                <ProductList productList={productList} addProduct={addProduct} />
                {isOpen ?
                    <CartModal setIsOpen={setIsOpen} cartList={cartList} removeProduct={removeProduct} removeAllProcucts={removeAllProcucts} /> : null}

            </main>
        </>
    );
};
