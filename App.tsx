import React, { FC, PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { AuthProvider } from './src/context/AuthContext';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';


const App = () => {
    return (

        <NavigationContainer>

            <AppStateGlobal>
                <MenuLateral />
            </AppStateGlobal>
            
        </NavigationContainer>

    )
}


const AppStateGlobal: FC<PropsWithChildren> = ({children} ) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default App;
