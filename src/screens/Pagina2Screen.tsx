import React, { useEffect } from 'react'
import {View, Text, Button} from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';

type NavigationProps = StackNavigationProp<RootStackParamList>


export const Pagina2Screen = () => {

    const navigator = useNavigation<NavigationProps>();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: ''
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2 Screen</Text>
            <Button
                title="Ir a pagina 3"
                onPress={() => navigator.navigate('Pagina3Screen' ) }
            />
        </View>
    )
}
