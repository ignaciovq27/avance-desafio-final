//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ContextProduct = createContext();

// 3) crear initialStateProduct para inicializar el array de productos guardados
// ¡ SE CREA SIEMPRE FUERA DEL PRODUCTCONTEXT !
const initialStateProduct = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products")) //si el producto de la key "product" existe, se transforma el STRINGJSON a array
    : []; //si no existen productos creados, el estado inicial de producto es "null" o []


export function ProductContext({ children }) {

    // 1) array para enlistar productos de json.
    const [products, setProducts] = useState(initialStateProduct)
    // {
    // id: "",
    // title: "",
    // category: "",
    // price: "",
    // img: "",
    // user: "",
    // quantity: "",
    // description: "",
    // }

    // 2) Realizar llamada al json para obtener info de productos.
    const getProductsData = async () => {
        try {
            // Consulta a la API.
            const url = "/products.json"
            const response = await fetch(url)
            const productsData = await response.json()
            console.log("JSON products data: ")
            console.log(productsData)
            setProducts(productsData)
        }
        catch (error) {
            console.log(error)
        }
    }

    // 4) utilizar useEffect para comprobar si el array de productos del local storage esta o no vacio.
    useEffect(() => {
        if (products.length === 0) {
            getProductsData() // si está vacio, solo llama a los productos de products.json
            console.log("asdasd")
        }
    }, [])

    // 5) En caso contrario, se usa useEffect para comprobar la información de productos del localStorage y usarlos como un nuevo array de productos.
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products)) // se transforma el JSON guardado en array.
    }, [products]) // al estar pendiente de "products", cada vez que se añada un nuevo producto se guardará en el localStorage.

    // 6) añadir producto desde "mis publicaciones" del usuario
    const createProduct = newProduct => {
        setProducts([newProduct, ...products])
    }

    const deleteProduct = id => {
        const newProducts = products.filter(product => product.id !== id)
        setProducts(newProducts)
        console.log(products)
    }

    return <ContextProduct.Provider value={{
        products,
        createProduct,
        deleteProduct,
    }}>{children}</ContextProduct.Provider>
}