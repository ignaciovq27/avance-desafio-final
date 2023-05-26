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


// ------------------------------------------------------------------
//transformar el STRINGJSON a un ARRAY
// const arraySTRINGJson = '[{"id": 1}, {"name": "Azul"}]' //STRINGJSON inicial
// const array = JSON.parse(arraySTRINGJson) //se transforma a array
// console.log(array[0].id, array[1].name) //se muestra array en consola

//transformar el ARRAY a un STRINGJSON
// const array = [{id: 1, name: "Azul"}] // array inicial
// const arraySTRINGJSON = JSON.stringify(array); //se transforma a STRINGJSON
// console.log(arraySTRINGJSON); //se muestra STRINGJSON en consola
// console.log(array); //se muestra ARRAY inical en consola para comparar
// ------------------------------------------------------------------


// 3) crear initialStateUser para inicializar el usuario // ¡ SE CREA SIEMPRE FUERA DEL USERCONTEXT !
const initialStateUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")) //si el usuario de la key "user" existe, se transforma el STRINGJSON a array
    : null; //si no existe usuario, el estado inicial de usuario es "null"

export function UserContext({ children }) {
    // const [user, setUser] = useState(null) //estado inicial del usuario = null
    const [user, setUser] = useState(initialStateUser) //si el usuario existe, el estado del user pasa a ser el usuario  inicial  (initialStateUser) encontrado.

    // ------------------------------------------------------------------
    // Usar useEffect para guardar información del usario (todo la información del usuario)
    // 5) Usar useEffect para estar pendiente de los datos que cambien del usuario "user"
    // useEffect(() => {
    //     if (user) {
    //         localStorage.setItem("user", JSON.stringify(user)) //se guardan todos los datos del usuario ingresado.
    //     }
    // }, [user])
    // ------------------------------------------------------------------

    // 5) Guardar email del usuario en el localStore
    useEffect(() => {

        if (user) {
            const { email } = user; // Obtener el email del usuario
            localStorage.setItem("user", JSON.stringify({ email })); // Guardar solo el email en el localStorage
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

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
            // throw new Error("User not found") //generar error en consola si el usuario no se encuentra.
            console.log("usuario no encontrado -----");
        }
        return userDB; //devuelve el usuario encontrado (se llama en AppLogIn)
    }

    // 3) Funcion para logOut
    const logOut = async () => {
        // localStorage.removeItem("user") //se quita el usuario de key "user" del localStorage
        setUser(null)  //se setea el estado "user" a null.
    }

    // 7) Funcion para comparar información ingresada en el logIn con la del JSON de usuario (se llama en AppLogIn)
    const compararInfoUsuarLogIn = async (userEmail, userPassword, setUserEmailError, setUserPasswordError) => {
        try {
            const usersData = await getUsersData()
            console.log(usersData)
            const user = usersData[0]; //info de usuario[0]

            if (userEmail !== user.email) {
                alert("Error de datos de email.");
                setUserEmailError(true);

            } if (userEmail === user.email) {
                setUserEmailError(false);
            }

            if (userPassword !== user.password) {
                alert("Error de datos de contraseña.");
                setUserPasswordError(true);
            }

            else if (userPassword === user.password) {
                setUserPasswordError(false);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return <ContextUser.Provider value={{ user, logIn, logOut, compararInfoUsuarLogIn }}>{children}</ContextUser.Provider>
}