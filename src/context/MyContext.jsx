//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const Context = createContext();

export function MyContext({ children }) {

    const [showModal, setShowModal] = useState(false);
    const [pizzas, setPizzas] = useState([])
    const [cartAmount, setCartAmount] = useState(0)
    const [pizzasCount, setPizzasCount] = useState(0)

    // Logica de añadir pizzas al carrito de compra
    // 1) Se crea un estado con forma de array para guardar los datos de cada pizza añadida.
    const [cartItems, setCartItems] = useState([
        {
            // id: "",
            // user: "",
            // title: "",
            // category: "",
            // price: "",
            // img: "",
            // description: "",
            // quantity: "",
        }
    ])

    // 2)Se crea una función para añadir los datos de la pizza al estado
    // setCartItems actualiza el estado haciendo una copia de los datos de cartItems
    // y luego se le añade un nuevo objeto con las propiedades id, img, name, price y quantity.

    // const addPizza = (id, img, name, price, quantity) => {
    //     setCartItems([...cartItems, { id, img, name, price, quantity }])
    // }

    function addPizza(id, img, name, price, quantity) {
        const existingPizza = cartItems.find((pizza) => pizza.id === id);
        if (existingPizza) {
            const updatedCartItems = cartItems.map((pizza) => {
                if (pizza.id === id) {
                    return { ...pizza, quantity: pizza.quantity + 1 };
                }
                return pizza;
            });
            setCartItems(updatedCartItems);
        } else {
            const newPizza = { id, img, name, price, quantity };
            setCartItems([...cartItems, newPizza]);
        }
    }

    // useEffect(() => {
    //     getData();
    // }, []);

    // const getData = async () => {
    //     try {
    //         // Consulta a la API.
    //         const url = "/pizzas.json"
    //         const response = await fetch(url)
    //         const data = await response.json()

    //         setPizzas(data)
    //         // console.log(data)
    //         // console.log(pizzas)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    const user =
    {
        name: "Azul",
        email: "azul@dado.cl",
        password: "azul",
    };

    const globalState =
    {
        showModal,
        setShowModal,
        pizzas,
        cartAmount,
        setCartAmount,
        pizzasCount,
        setPizzasCount,
        cartItems,
        setCartItems,
        addPizza,
        user
    }
    return <Context.Provider value={globalState}>{children}</Context.Provider>
}