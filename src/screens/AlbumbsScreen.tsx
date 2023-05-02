import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TouchableIcon } from '../components/TouchableIcon';
import { AuthContext } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {

    const {authState,logOut} = useContext(AuthContext)

    const {isLoggedIn} = authState

    return (
        <View>
            <Text>AlbumbsScreen</Text>
            {
                isLoggedIn  ?
                (
                    <TouchableOpacity
                    style={styles.botonGrande}
                    onPress={logOut}
                >
                    <Text>Log Out</Text>
                </TouchableOpacity>
                )
                : null

            }



        </View>
    )
}
