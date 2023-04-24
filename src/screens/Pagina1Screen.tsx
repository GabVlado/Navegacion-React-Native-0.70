import React, { useEffect } from 'react'
import {View, Text, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { RootStackParamList } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import type { StackScreenProps } from '@react-navigation/stack';

// interface Props extends StackScreenProps<any , any > {
// }  // SOLUCION DE FERNANDO

interface Props extends  StackScreenProps<RootStackParamList , 'Pagina1Screen'>{}



export const Pagina1Screen = ( {navigation}: Props ) => {


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 1 Screen</Text>
            <Button
                title="Ir pagina 2"
                onPress={ ( ) => navigation.navigate('Pagina2Screen')  }
            />
            <Text>Navegar con argumentos</Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={[styles.botonGrande , {backgroundColor: '#5856D6'}]}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id: 1,
                        nombre: 'Gabriel'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Gabriel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botonGrande , {backgroundColor: '#ff9427'}]}
                    onPress={() => navigation.navigate('PersonaScreen',{
                        id: 1,
                        nombre: 'Maria'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
