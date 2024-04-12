/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from 'react';

// Definimos el tipo para el usuario
interface User {
    pkUsuario: number;
    correo: string;
    nombre: string;
}

// Definimos el tipo para el contexto del usuario
interface UserContextType {
    user: User | null;
}

// Creamos el contexto del usuario
export const UserContext = createContext<UserContextType>({
    user: JSON.parse(window.localStorage.getItem("usuario")!),
});

// Creamos un componente proveedor del contexto del usuario
export const UserProvider: React.FC<any> = ({ children }: any) => {
    const usuario = JSON.parse(window.localStorage.getItem("usuario")!)

    return (
        <UserContext.Provider value={{ user: usuario }}>
            {children}
        </UserContext.Provider>
    );
};

// Creamos un hook personalizado para acceder al contexto del usuario
export const useUser = () => useContext(UserContext);
