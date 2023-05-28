//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ContextProduct = createContext();



export function ProductContext({ children }) {

    // 1) array para enlistar productos de json.
    const [products, setProducts] = useState([])

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

    // 3) llamar a funcion para obtener productos de json.
    useEffect(() => {
        getProductsData()
    }, [])


    return <ContextProduct.Provider value={{

    }}>{children}</ContextProduct.Provider>
}