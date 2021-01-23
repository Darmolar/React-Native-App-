import * as React from 'react';
import { useFonts, 
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic } from '@expo-google-fonts/balsamiq-sans';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
const {width, height} = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
            BalsamiqSans_400Regular,
            BalsamiqSans_400Regular_Italic,
            BalsamiqSans_700Bold,
            BalsamiqSans_700Bold_Italic
      });
  return (
    <View style={styles.container}>
        <StatusBar style="light" backgroundColor="#0940a4" /> 
        <View style={styles.header}>
            <Text>Hello</Text>
        </View>
        <View style={styles.body}>
            <ScrollView>
                <View style={styles.input_container}>
                    <View style={styles.input_group}>
                        <TextInput 
                                style={styles.input}
                                placeholder={'Username'}
                                placeholderTextColor={'#000'}
                                />
                        <View style={styles.input_icon}>
                            <SimpleLineIcons name="user" size={24} color="black" />
                        </View>
                    </View>
                    <View style={styles.input_group}>
                        <TextInput 
                                secureTextEntry={true}
                                style={styles.input}
                                placeholder={'Password'}
                                placeholderTextColor={'#000'}
                                />
                        <TouchableOpacity style={styles.input_icon}>
                            <MaterialIcons name="lock-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.forget_password}>
                        <Text style={styles.forget_password_text}>forget Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.button_text}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUp}  onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.signUp_text}>create your account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#0940a4',
    },
    header:{
        flex: 1,
        width: width,
        backgroundColor: '#0940a4',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    body:{
        flex: 2,
        width: width,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    input_container:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    input_group:{
        flexDirection: 'row', 
        marginVertical: 20,
        width: 300,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',  
        padding: 0,
        borderBottomEndRadius: 20,
        borderRadius: 5
    },
    input_icon:{ 
        // width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    input:{
        width: 250,
        paddingLeft: 10,
        height: 48,
        fontSize: 20,
        color: '#000',
        fontFamily: 'BalsamiqSans_700Bold',
    },
    forget_password:{
        width: 300,
        alignItems: 'flex-end',
    },
    forget_password_text:{
        color: 'red',
        fontWeight: '200',
        fontFamily: 'BalsamiqSans_400Regular',
    },
    button:{ 
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#fc0b03',
        marginTop: 40,
        borderBottomEndRadius: 20,
        borderRadius: 5
    },
    button_text:{
        fontSize: 25, 
        fontFamily: 'BalsamiqSans_400Regular',
        color: '#fff'
    },
    signUp:{
        marginTop: 20,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    signUp_text:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'BalsamiqSans_400Regular',
    }
})

export default LoginScreen;