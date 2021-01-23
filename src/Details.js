import * as React from 'react';
import { useFonts, 
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic, } from '@expo-google-fonts/inter';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView, ImageBackground, Image } from 'react-native';
import { SimpleLineIcons, MaterialIcons, Ionicons, AntDesign, Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { Rating, AirbnbRating } from 'react-native-ratings';
import * as ScreenOrientation from 'expo-screen-orientation';

const {width, height} = Dimensions.get('window');
 
// changeScreenOrientation = () => {
    ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
//  }

//  const myScreen = changeScreenOrientation();

const image = {uri: 'https://theglobalcoverage.com/wp-content/uploads/2020/01/Fast-and-Furious-696x391.jpg'};
const image1 = { uri: "https://ccdiscovery.b-cdn.net/wp-content/uploads/2020/01/Fast-and-Furious-9-696x393.jpg" }
const image2 = { uri: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/Fast-and-Furious-9-Han-Dom-and-Jakob.jpg" }
const DetailsScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
            BalsamiqSans_400Regular,
            BalsamiqSans_400Regular_Italic,
            BalsamiqSans_700Bold,
            BalsamiqSans_700Bold_Italic
      });
  return (
    <View style={styles.container}>
        <StatusBar style="dark" /> 
        <ImageBackground 
                style={styles.header}
                source={image} >
            <View style={styles.header_text}>
                <TouchableOpacity onPress={() => navigation.goBack() }  style={styles.header_text_icon}>
                    <Ionicons name="ios-chevron-back" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
        <View style={styles.body}>
            <TouchableOpacity style={styles.play_button_top} onPress={() => navigation.navigate('Video')}>
                <Feather name="play" size={30} color="white" /> 
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.input_container}>
                    <View style={styles.title_container}>
                        {/* <Image 
                            style={styles.avatar}
                            source={image}
                        /> */}
                        <View style={styles.title_text_container}>
                            <Text style={styles.title_text_h1}>Fast and furious 9</Text>
                            <Text style={styles.title_text_p}>Adventure, Thriller, Action</Text>
                            <Text style={styles.title_text_footer}> Runtime: 2h 30m </Text>
                        </View>
                    </View>
                    <View style={styles.preview_container}>
                        <View style={styles.biography}>
                            <Text style={styles.biography_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend efficitur vehicula. 
                            Cras tristique lorem quis tristique aliquam. Aliquam malesuada euismod lorem et vehicula. 
                            Suspendisse sed urna pellentesque mauris varius viverra id non urna. Sed sed condimentum ipsum. 
                            Nunc eget nisl nec arcu dictum egestas. Praesent imperdiet, mauris iaculis semper pulvinar, ante dui 
                            placerat odio, non scelerisque est tortor at neque. Nulla nec tellus eu turpis sagittis varius. 
                            Donec a sem et nunc sollicitudin suscipit non eu sem. Suspendisse nec lectus fermentum, blandit ante ut, 
                            finibus augue. Vestibulum aliquam auctor est, suscipit malesuada eros vehicula
                            a. Praesent scelerisque pellentesque congue. Phasellus dapibus lacus at ex faucibus dictum.
                            </Text>
                        </View> 
                        <ScrollView 
                                horizontal={true} 
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                style={styles.scrollTabPreview}>
                            <View style={styles.body_card}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                    <Image
                                            progressiveRenderingEnabled={true}
                                            style={styles.stretch}
                                            source={ image1 }
                                        />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.body_card}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                    <Image
                                            progressiveRenderingEnabled={true}
                                            style={styles.stretch}
                                            source={ image2 }
                                        />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.body_card}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                    <Image
                                            progressiveRenderingEnabled={true}
                                            style={styles.stretch}
                                            source={ image1 }
                                        />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.body_card}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                    <Image
                                            progressiveRenderingEnabled={true}
                                            style={styles.stretch}
                                            source={ image2 }
                                        />
                                </TouchableOpacity>
                            </View>
                        </ScrollView> 
                        
                    </View>
                    <View style={styles.rating_container}> 
                        <View style={styles.rating_left}>
                            <Text style={styles.rating_Number}>4.8</Text>
                        </View>
                        <View style={styles.rating_left}>
                            <AirbnbRating
                                        count={5}
                                        reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                                        defaultRating={3}
                                        size={20}
                                        showRating={false}
                                    />
                             <Text style={styles.rating_numbers}>322 Reviews</Text>
                        </View>
                    </View> 
                    <View style={styles.play_button_container}>
                        <TouchableOpacity style={styles.play_button} onPress={() => navigation.navigate('Video')}>
                            <Feather name="play" size={24} color="black" /> 
                            <Text style={styles.play_button_text}> Play </Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#000',
        flexDirection: "column"
    },
    header:{
        flex: 1,
        resizeMode: "cover",
    },
    header_text:{
        top: 30,
        padding: 20,
        fontSize: 30,
    },
    header_text_icon:{ 
        width: 30,
        height: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 100,
    },
    body:{
        flex: 2,
        width: width,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    }, 
    play_button_top:{
        width: 80,
        height: 40,
        borderRadius: 25, 
        right: 10,
        backgroundColor: '#fc0b03',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'flex-end',
        top: -15,
    },
    input_container:{   
    },
    title_container:{
        flexDirection: 'row',
        padding: 10,
        top: -20,
    },
    avatar:{
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title_text_container:{
        padding: 10,
    },
    title_text_h1:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    title_text_p:{
        top: 5,
        color: '#000',
        fontSize: 14,
    },
    title_text_footer:{
        top: 15,
        color: '#000',
        justifyContent: 'center'
    },
    preview_container:{
        padding: 10, 
        top: -30,
    },
    scrollTabPreview:{
        top: 10
    },
    body_card:{ 
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    stretch: { 
        width: 120,
        height: 100,
        marginRight: 15,
        borderRadius: 20, 
        resizeMode: 'cover',
    },
    biography:{
        padding: 10,
    },
    biography_text:{ 
        top: 10,
        fontSize: 14, 
        textAlign: 'left'
    },
    rating_container:{
        padding: 20,
        top: -20,
        flexDirection: 'row'
    },
    rating_left:{
        padding: 10,
    },
    rating_right:{
        padding: 10,
    },
    rating_icon:{
        position: 'absolute',
        flexDirection: 'row'
    },
    rating_Number:{
        fontSize: 40,
    },
    rating_numbers:{
        fontSize: 15,
    },
    play_button_container:{ 
        width: width,
        height: 60, 
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    play_button:{ 
        flexDirection: 'row',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#fc0b03',
        borderBottomEndRadius: 20, 
    },
    play_button_text:{ 
        color: '#fff',
        fontSize: 25,
    }
})

export default DetailsScreen;