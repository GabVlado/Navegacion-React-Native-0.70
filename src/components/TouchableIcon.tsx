import React, { useContext, useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string;
}



export const TouchableIcon = ({iconName}: Props) => {

        const { changeFavIcon } = useContext(AuthContext)

        const [pressed, setPressed] = useState(false);

        const handlePress = () => {
            setPressed(!pressed);
            changeFavIcon(iconName);
        };


        return (
            <Pressable
                onPress={handlePress}
                style={({ pressed }) => [
                    {
                        //backgroundColor: pressed ? 'gray' : '#0bf532',
                        opacity: pressed ? 0.5 : 1,
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                    },

                ]}
            >
                {/* <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text> */}
                    <Icon
                        //name={pressed ? 'checkmark-circle' : 'add-circle-outline'}
                        name={iconName}
                        size={40}
                        color={colores.primary}
                    />


            </Pressable>
        )
    }

