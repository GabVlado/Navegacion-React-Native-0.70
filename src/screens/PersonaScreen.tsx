import React, { useEffect ,  useContext} from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParamList, 'PersonaScreen'> { }


//interface Props extends StackScreenProps<any , any>{};


export const PersonaScreen = ({ route, navigation }: Props) => {

    const params = route.params;

    const {changeUserName} = useContext(AuthContext)


    console.log(JSON.stringify(params, null, 3));

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUserName(params.nombre)
    }, [])






    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
