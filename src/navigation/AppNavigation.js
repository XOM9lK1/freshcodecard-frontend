import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import AccountScreen from '../screens/AccountScreen';
import MainScreen from '../screens/MainScreen';
import PartnerScreen from '../screens/PartnerScreen';
import MapScreen from '../screens/MapScreen';
import EmailLoginScreen from '../screens/EmailLoginScreen';
import PinLoginScreen from '../screens/PinLoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const navigatorOptions = {
    header: null,
    headerMode: 'none'
};

const PartnerNavigator = createStackNavigator({
    Partner: PartnerScreen,
}, navigatorOptions);

const MainNavigator = createStackNavigator({
    Main: MainScreen,
    Partner: PartnerNavigator
}, navigatorOptions);

const MapNavigator = createStackNavigator({
    Map: MapScreen,
}, navigatorOptions);

const AccountNavigator = createStackNavigator({
    Account: AccountScreen,
}, navigatorOptions);

const LoginNavigator = createStackNavigator({
    LoginEmail: EmailLoginScreen,
    LoginPin: PinLoginScreen,
}, navigatorOptions);

const BottomNavigator = createBottomTabNavigator({
    Map: {
        screen: MapNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons name={`ios-location${!focused ? '-outline' : ''}`} size={30} color={tintColor} />
            )
        }
    },
    Main: {
        screen: MainNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons name={`ios-albums${!focused ? '-outline' : ''}`} size={30} color={tintColor} />
            )
        },
    },
    Account: {
        screen: AccountNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons name={`ios-person${!focused ? '-outline' : ''}`} size={30} color={tintColor} />
            )
        }
    }
},
    {
        initialRouteName: 'Main',
        tabBarOptions: {
            inactiveTintColor: '#3FCD7E',
            activeTintColor: '#3FCD7E',
            showLabel: false,
            style: {
                backgroundColor: '#fff',
                borderTopColor: '#3FCD7E',
                borderTopWidth: 1
            },
        },
    });


MainNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    for (let i = 0; i < navigation.state.routes.length; i++) {
        if (navigation.state.routes[i].routeName == "Partner") {
            tabBarVisible = false;
        }
    }

    return {
        tabBarVisible
    };
};

export const AppNavigation = createAppContainer(createSwitchNavigator(
    {
        Welcome: WelcomeScreen,
        Auth: LoginNavigator,
        App: BottomNavigator,
    }
));