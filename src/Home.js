import * as React from 'react';
import { useFonts, 
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic } from '@expo-google-fonts/balsamiq-sans';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView, Image } from 'react-native';
import { SimpleLineIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
const {width, height} = Dimensions.get('window');
 
const HomeScreen = ({ navigation }) => {
     let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_400Regular_Italic,
        BalsamiqSans_700Bold,
        BalsamiqSans_700Bold_Italic
    });
  return (
            <ScrollView style={styles.container}>
                <StatusBar style="light" backgroundColor="#0940a4" />  
                <View style={styles.header}>
                   <View style={styles.header_top}>
                        <View style={styles.top_card_nav}>
                            <View>
                                <Text style={styles.top_card_nav_h1}>Welcome</Text>
                                <Text style={styles.top_card_nav_h2}>Explore load of movies </Text>
                            </View>
                            <View style={styles.top_card_nav_icon}>
                                <FontAwesome5 name="user" size={30} color="white" />
                            </View>
                        </View> 
                   </View>
                </View>
                <View style={styles.body}> 
                   <View style={styles.body_container}>
                       <View style={styles.body_main}>
                            <Text style={styles.body_main_card_text}>Genres</Text>
                            <ScrollView 
                                        style={styles.body_container_top} 
                                        horizontal={true} 
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        >
                                    <View style={styles.top_card}>
                                        <Text style={styles.card_text}>Action</Text>
                                    </View>
                                    <View style={styles.top_card}>
                                        <Text style={styles.card_text}>Adventure</Text>
                                    </View>
                                    <View style={styles.top_card}>
                                        <Text style={styles.card_text}>Horror</Text>
                                    </View>
                                    <View style={styles.top_card}>
                                        <Text style={styles.card_text}>Biography</Text>
                                    </View>
                                    <View style={styles.top_card}>
                                        <Text style={styles.card_text}>Adventure</Text>
                                    </View>
                                    <View style={styles.top_card}>
                                        <Text style={styles.card_text}>Horror</Text>
                                    </View>
                                    <View style={styles.top_card}>
                                        <Text style={styles.card_text}>Biography</Text>
                                    </View>
                                </ScrollView>
                       </View>
                       <View style={styles.body_main}>
                           <View style={styles.body_main_card}>
                                <Text style={styles.body_main_card_text}>Recent watch</Text>
                                <ScrollView 
                                        horizontal={true} 
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://cdn3.movieweb.com/i/movie/rvZlY0AVSp5P0KewRFeujX0GjPrS67/154:70/Rocket-Hunter.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://vcdn-english.vnecdn.net/2019/12/12/shutterstock-1532525783-157612-8971-4507-1576125059.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://www.xcoos.com/blog/wp-content/uploads/2019/01/avengers-infinity-war-sean-gunn-reveals-set-photo_h6gg_12398221258ecaca0d30cc-1050x591.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20201009184025/maxresdefault-7-14.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://cdn3.movieweb.com/i/movie/rvZlY0AVSp5P0KewRFeujX0GjPrS67/154:70/Rocket-Hunter.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.body_main_card}>
                                <Text style={styles.body_main_card_text}>Popular</Text>
                                <ScrollView 
                                        horizontal={true} 
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://cdn3.movieweb.com/i/movie/rvZlY0AVSp5P0KewRFeujX0GjPrS67/154:70/Rocket-Hunter.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://vcdn-english.vnecdn.net/2019/12/12/shutterstock-1532525783-157612-8971-4507-1576125059.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://www.xcoos.com/blog/wp-content/uploads/2019/01/avengers-infinity-war-sean-gunn-reveals-set-photo_h6gg_12398221258ecaca0d30cc-1050x591.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20201009184025/maxresdefault-7-14.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://cdn3.movieweb.com/i/movie/rvZlY0AVSp5P0KewRFeujX0GjPrS67/154:70/Rocket-Hunter.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.addBanner}>
                                <Text>Ads Block Goes here</Text>
                            </View>
                           <View style={styles.body_main_card}>
                                <Text style={styles.body_main_card_text}>Recent watch</Text>
                                <ScrollView 
                                        horizontal={true} 
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://assets3.thrillist.com/v1/image/2723922/414x310/scale;jpeg_quality=65.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://vcdn-english.vnecdn.net/2019/12/12/shutterstock-1532525783-157612-8971-4507-1576125059.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://www.xcoos.com/blog/wp-content/uploads/2019/01/avengers-infinity-war-sean-gunn-reveals-set-photo_h6gg_12398221258ecaca0d30cc-1050x591.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20201009184025/maxresdefault-7-14.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://cdn3.movieweb.com/i/movie/rvZlY0AVSp5P0KewRFeujX0GjPrS67/154:70/Rocket-Hunter.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.body_main_card}>
                                <Text style={styles.body_main_card_text}>Popular</Text>
                                <ScrollView 
                                        horizontal={true} 
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://cdn3.movieweb.com/i/movie/rvZlY0AVSp5P0KewRFeujX0GjPrS67/154:70/Rocket-Hunter.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://vcdn-english.vnecdn.net/2019/12/12/shutterstock-1532525783-157612-8971-4507-1576125059.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://www.xcoos.com/blog/wp-content/uploads/2019/01/avengers-infinity-war-sean-gunn-reveals-set-photo_h6gg_12398221258ecaca0d30cc-1050x591.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20201009184025/maxresdefault-7-14.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.body_card}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Details')}> 
                                            <Image
                                                    progressiveRenderingEnabled={true}
                                                    style={styles.stretch}
                                                    source={ {uri: 'https://cdn3.movieweb.com/i/movie/rvZlY0AVSp5P0KewRFeujX0GjPrS67/154:70/Rocket-Hunter.jpg'} }
                                                />
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={styles.addBanner}>
                                <Text>Ads Block Goes here</Text>
                            </View>
                       </View>
                   </View> 
                </View> 
            </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: '#0940a4', 
        bottom: 50
    },
    header:{
        marginTop: 10,
        height: 150,
        width: width,
        backgroundColor: '#0940a4', 
        alignItems: 'center',
        alignContent: 'flex-end'
    },
    header_top:{
        padding: 10
    },
    top_card_nav:{
        marginTop: 40,
        flexDirection: 'row',
        padding: 20,
        width: width,
        justifyContent: 'space-between'
    },
    top_card_nav_h1:{ 
        fontSize: 24,
        color: '#fff',
    },
    top_card_nav_h2:{
        fontSize: 18,
        color: '#fff',
    },
    top_card_nav_icon:{
        padding: 15
    },
    body:{
        minHeight: 700,
        width: width,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30, 
    },
    body_container:{
        padding: 10,
    },
    body_container_top:{
        width: width,
        // height: 70,
        // padding: 10,
        flexDirection: 'row', 
        marginTop: 10, 
    },
    top_card:{ 
        width: 70,
        height: 30,
        padding: 5, 
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center', 
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 5,
        borderRadius: 20
    },
    card_icon:{
        width: 47,
        height: 50,
        padding: 3,
        backgroundColor: '#0940a4',
        borderRadius: 10
    },
    card_text:{
        fontSize: 15,
    },
    body_main:{
        padding: 10,
    },
    body_main_card_text:{
      fontSize: 20,  
      fontWeight: 'bold'
    },
    body_main_card:{
        marginVertical: 15,
        display: 'flex',
    },
    body_card:{ 
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    stretch: { 
        width: 130,
        height: 170,
        marginRight: 15,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    addBanner:{
        width: 320,
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center', 
        borderWidth: 1,
        borderColor: '#000',
    }
}) 

export default HomeScreen;