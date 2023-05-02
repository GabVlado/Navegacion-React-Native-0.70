
import React, { Children, FC, PropsWithChildren, createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Que informacion  tendré aqui

export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}


//Estado Inicial

export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

// Lo que el Context le va pasara a los hijos como luce / y que expone

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: ( iconName: string ) => void;
    logOut: () => void;
    changeUserName: ( userName: string ) => void;

}



//Crear el Contexto

export const AuthContext = createContext({} as AuthContextProps)

// Componente que es proveedor del estado
export const AuthProvider: FC<PropsWithChildren> = ({children}) => {

    const [authState, dispatch] = useReducer( authReducer, authInitialState ) //Reducer es una funcion, genera un nuevo estado no lo muta

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const changeFavIcon = ( iconName: string ) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const logOut = () => {
        dispatch({type: 'logOut'})
    }

    const changeUserName = ( userName: string ) => {
        dispatch({type: 'changeUserName', payload: userName})
    }


    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            logOut,
            changeUserName

        }}>
            {children}
        </AuthContext.Provider>
    )
}
