import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTabNavigator } from './TopTapNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}




const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}
            activeColor= {colores.secondary}
            inactiveColor= {colores.secondary}
            style={{

            }}


            screenOptions={ ({  route }) => ({
                //tabBarActiveTintColor:colores.tertiary,
                // tabBarStyle: {
                //     borderTopColor: colores.primary,
                //     borderTopWidth: 0,
                //     elevation: 0
                // },
                // tabBarLabelStyle: {
                //     fontSize: 20
                // },
                tabBarIcon: ({ color, focused  }) => {


                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'Stack':
                            iconName = 'T3';
                            break;
                    }


                    return <Text style={{ color }}  >{iconName}</Text>
                },



            })}

        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="Stack" options={{title:'Stack'}}component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}




const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={ ({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color, focused, size }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'Stack':
                            iconName = 'T3';
                            break;
                    }

                    return <Text style={{ color }}>{iconName}</Text>
                }

            })}

            sceneContainerStyle={{
                backgroundColor: 'white'
            }}


        >
            {/* <Tab.Screen
                name="Tab1Screen"
                options={{
                    title: 'Tab 1',
                    tabBarIcon: ({color}) => <Text style={{color: color}}>Tab1</Text>
                }}
                component={Tab1Screen}
            /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="Stack" component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}
