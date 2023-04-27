import React from 'react';
import { StyleSheet } from 'react-native';

export const colores = {
    primary: '#5856D6',
    secondary: '#f8efe4',
    tertiary: '#f08e16',

}



export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {

        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100
    },
    avatarContainer:{
        marginTop: 20,
        alignItems: 'center',
    },
    menuContainer:{
        //backgroundColor: 'red',
        marginVertical: 30,
        marginHorizontal: 30
    },
    menuText:{
        fontSize: 20
    },
    menuBoton: {
        marginVertical: 10
    }
})
