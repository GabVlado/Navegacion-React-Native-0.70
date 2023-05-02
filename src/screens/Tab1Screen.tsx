import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';




export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen effect');

    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title }>Iconos</Text>
            <View style={{flexDirection:'row'}} >

                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="boat-outline"  />
                <TouchableIcon iconName="bicycle-outline"  />
                <TouchableIcon iconName="heart-outline" />

            </View>

        </View>
    )
}
