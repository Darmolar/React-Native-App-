import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/Home';
import ProfileScreen from './src/Profile';
import WelcomeScreen from './src/Welcome';
import LoginScreen from './src/Login';
import RegisterScreen from './src/Register';
import DetailsScreen from './src/Details';
import VideoScreen from './src/Video';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
 
function FeedsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feeds!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function bottomTabs() {
  return ( 
      <Tab.Navigator 
           screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-home'
                      : 'ios-home-outline';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                  }else if (route.name === 'Profile') {
                    iconName = focused ? 'ios-at' : 'ios-at-outline';
                  } else if (route.name === 'Search') {
                    iconName = focused ? 'search-sharp' : 'search-outline';
                  }
      
                  // You can return any component that you like here!
                  return  <View style={ focused ? styles.icon : styles.icon_out }>
                            <Ionicons name={iconName} size={30} color={color} /> 
                            <Text style={[styles.icon_text, {color: color}]}>{route.name}</Text>
                          </View>; 
                },
          })}
          tabBarOptions={{
            activeTintColor: '#2d10d1',
            inactiveTintColor: 'grey',
            showLabel: false, 
            style: { backgroundColor: '#fff', position: 'absolute' }
          }}
        >
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Search" component={FeedsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() { 

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Welcome">
				<Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                                                                  headerShown : false
                                                                }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{
                                                                  headerShown : false
                                                                }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{
                                                                  headerShown : false
                                                                }} /> 
        <Stack.Screen name="Details" component={DetailsScreen} options={{
                                                                  headerShown : false
                                                                }} />
        <Stack.Screen name="Video" component={VideoScreen} options={{
                                                                  headerShown : false
                                                                }} /> 
				<Stack.Screen name="Tabs" component={bottomTabs} options={{
                                                                headerShown : false
                                                              }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

var styles = StyleSheet.create({
  icon: { 
      flex: 1, 
      flexDirection: 'column', 
      width: "auto",  
      padding: 5,
      justifyContent: 'center', 
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  icon_out: { 
      flex: 1, 
      flexDirection: 'column',  
      width: "auto",  
      padding: 5,
      justifyContent: 'center', 
      alignItems: 'center',
      alignContent: 'center',
      borderRadius: 10
  },
  icon_text:{
    fontSize: 12,
    fontWeight: 'bold'
  }
})