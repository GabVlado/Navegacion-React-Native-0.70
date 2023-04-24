import React, { useEffect } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
                drawerPosition: 'left',
                headerShown: false,
                gestureHandlerProps:{
                    hitSlop:{horizontal:20}
                }
            }}

            drawerContent={ (props) => <MneuInterno {...props} /> }

        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}


const MneuInterno = ( {navigation }: DrawerContentComponentProps  ) => {

    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer} >
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/1198/1198293.png',
                    }}
                    style={styles.avatar}
                />
            </View>
            <View style={styles.menuContainer}>

                <Pressable
                    style={styles.menuBoton}
                    onPress={ () => navigation.navigate('StackNavigator') }
                >
                    <Text style={styles.menuText}>Navegacion </Text>
                </Pressable>

                <Pressable
                    style={styles.menuBoton}
                    onPress={ () => navigation.navigate('SettingsScreen') }
                >
                    <Text style={styles.menuText}>Settings</Text>
                </Pressable>

            </View>


        </DrawerContentScrollView>
    )
}
