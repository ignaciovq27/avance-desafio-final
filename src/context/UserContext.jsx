//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ContextUser = createContext();

// x) Llamar funcion para traer info de usuarios del json.
// useEffect(() => {
//     getUsersData();
// }, []);

// 1) Realizar llamada al json para obtener info.
const getUsersData = async () => {
    try {
        // Consulta a la API.
        const url = "/users.json"
        const response = await fetch(url)
        const usersData = await response.json()
        // console.log("JSON users data: ")
        // console.log(usersData)
        return usersData;
    }
    catch (error) {
        console.log(error)
    }
}


// 3) Usar localStorage para guardar datos de usuario
// ------------------------------------------------------------------
//setItem = Guardar item con "key" y "string"
// localStorage.setItem("user", "si existe")

//getItem = Acceder item con "key"
// const testStorage = localStorage.getItem("user")
// console.log(testStorage)
// ------------------------------------------------------------------


export function UserContext({ children }) {
    const [user, setUser] = useState(null) //estado inicial del usuario = null

    // 2) Funcion para logIn (se llama en AppLogIn)
    const logIn = async (userEmail, userPassword) => {

        const users = await getUsersData()
        console.log("JSON users registrados: ")
        console.log(users)
        const userDB = users.find(
            (item) => item.email === userEmail && item.password === userPassword
        );
        if (userDB) {
            console.log("usuario encontrado: ");
            console.log(userDB);
            setUser(userDB);
        } else {
            setUser(null)
            console.log("usuario no encontrado -----");
        }
        return userDB; //devuelve el usuario encontrado (se llama en AppLogIn)
    }

    return <ContextUser.Provider value={{ user, logIn }}>{children}</ContextUser.Provider>
}