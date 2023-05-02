import React, { useContext  } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { TouchableIcon } from '../components/TouchableIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';

export const SettingsScreen = () => {

    const { authState } = useContext(AuthContext)


    return (
        <View>
            <Text>SettingsScreen</Text>
            <Text>{JSON.stringify(authState, null, 3)}</Text>

            {
                authState.favoriteIcon && (
                    <Icon
                        name={authState.favoriteIcon }
                        size={150}
                        color={colores.primary}
                    />
                )

            }

        </View>
    )
}
