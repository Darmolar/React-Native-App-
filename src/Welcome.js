import * as React from 'react';
import { useFonts, 
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic } from '@expo-google-fonts/balsamiq-sans';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'; 
import { StatusBar } from 'expo-status-bar';
const {width, height} = Dimensions.get('window');


 const WelcomeScreen = ({ navigation }) => {  
    let [fontsLoaded] = useFonts({
            BalsamiqSans_400Regular,
            BalsamiqSans_400Regular_Italic,
            BalsamiqSans_700Bold,
            BalsamiqSans_700Bold_Italic
      });
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
        <View style={styles.contain}>
            <Text style={styles.container_H1}>Adding fun to your life</Text>
            <Text style={styles.container_H2}>Just a simple text here for now. Will add later. </Text> 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.button_text}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0940a4',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    contain:{
        width: width,
        padding: 20,
        alignItems: 'center',

    },
    container_H1:{
        fontSize: 55, 
        fontFamily: 'BalsamiqSans_700Bold_Italic',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    container_H2:{
        marginVertical: 30,
        fontSize: 20, 
        fontFamily: 'BalsamiqSans_400Regular',
        color: '#fff',
        textAlign: 'center'
    },
    button:{
        backgroundColor: '#fc0b03',
        marginVertical: 20,
        width: 250,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text:{
        fontSize: 25, 
        fontFamily: 'BalsamiqSans_400Regular',
        color: '#fff'
    }
})

export default WelcomeScreen;