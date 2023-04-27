import React, { useEffect } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

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
            <Drawer.Screen name="Tabs" component={Tabs} />
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
                    onPress={ () => navigation.navigate('Tabs') }
                >
                    <Text style={styles.menuText}>Tabs </Text>
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
