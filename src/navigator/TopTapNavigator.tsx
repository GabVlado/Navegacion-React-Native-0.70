import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumbsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top,
            }}
            sceneContainerStyle= {{
                backgroundColor: 'white'
            }}
            screenOptions={ ({route})=> ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon:  true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarStyle: {
                    elevation:0,
                    shadowColor: 'transparent'
                },
                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'Ch';
                            break;
                        case 'Contacts':
                            iconName = 'Co';
                            break;
                        case 'Albums':
                            iconName = 'Al';
                            break;
                    }

                    return <Text style={{ color }}>{iconName}</Text>
                }

            })}

        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}
