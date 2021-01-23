import * as React from 'react';
import { useFonts, 
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic } from '@expo-google-fonts/balsamiq-sans';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { SimpleLineIcons, MaterialIcons, Ionicons, AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar'; 
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';

const {width, height} = Dimensions.get('window'); 

export default class VideoScreen extends React.Component  {
    constructor(props) {
        super(props); 
        this.videoRef = null;
        this.video = { uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }
        this.state = {
            play: true,
            showControls: false,
            fullscreen: false,
            loop: false,
            loadingVideo: true,
            duration: 0,
            currentDuration: 0,
            videoMode: Video.RESIZE_MODE_CONTAIN,
            selectedVideoMode: 1,
        };
      }

      componentDidMount = async () =>{
        await this.changeScreenOrientation();
      }

      componentWillUnmount = async () =>{
        await this.changeScreenOrientationBack();
        setTimeout(() => this.setState(s => ({...s, showControls: true})), 4000);
      }

     changeScreenOrientation = () => {
         ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
     }

     changeScreenOrientationBack = () => {
         ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
     }

     onLoadVideo = (data) => { 
        //  console.log(data)
         this.setState({
                        duration: data.durationMillis,
                        currentDuration: data.positionMillis,
                        loadingVideo: !this.state.loadingVideo
                    });
        //  setTimeout(() => this.setState(s => ({...s, showControls: true})), 4000);
     }

     updateCurrentTime = (data) => {  
        // console.log(data);
        this.setState({
                    //    duration: data.durationMillis,
                       currentDuration: data.positionMillis,
                    //    loadingVideo: !this.state.loadingVideo
                   });
        // setTimeout(() => this.setState(s => ({...s, showControls: true})), 4000);
     }

     onErrorVideo = () =>{
         alert('Network time out. Play again');
         this.props.navigation.goBack()
     }
    
    render(){
        return (
            <View style={styles.container}>
            <StatusBar style="light" hidden={true} /> 
                <TouchableWithoutFeedback onPress={this.showControls}>
                    <View>
                        <Video
                                ref={(ref) => this.videoRef = ref}
                                source={this.video}
                                posterSource={this.video}
                                rate={1.0}
                                volume={1.0}
                                isMuted={false}
                                resizeMode={this.state.videoMode}
                                shouldPlay={this.state.play}
                                isLooping={this.state.loop}
                                useNativeControls={false}
                                style={styles.fullscreenVideo}
                                onLoad={this.onLoadVideo}
                                onError={this.onErrorVideo}
                                onPlaybackStatusUpdate={this.updateCurrentTime}
                            />
                        {
                            this.state.loadingVideo && 
                            <View style={styles.controlOverlayLoading}>
                                <View>
                                    <Text style={styles.loadingText}>Loading...</Text>
                                </View>
                            </View>
                        }
                        {
                            this.state.showControls && (
                                <View style={styles.controlOverlay}>
                                    <View style={styles.controllerContainer}>
                                        <View style={styles.firstController}>
                                            <TouchableOpacity
                                                    onPress={() => this.props.navigation.goBack()}
                                                    // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                                                    style={styles.fullscreenButton}
                                                    >
                                                    <Ionicons name="arrow-back-outline" size={30} color="white" />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                    onPress={this.updateRepeat}
                                                    // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                                                    style={styles.fullscreenButton}
                                                    >
                                                    <Ionicons name="ios-repeat-outline" size={30} color="white" />
                                            </TouchableOpacity>
                                            <DropDownPicker
                                                items={[
                                                    {
                                                        label: 'Contain', 
                                                        value: 1, 
                                                        icon: () => <MaterialCommunityIcons name="contain" size={24} color="black" />, 
                                                        hidden: false
                                                    },
                                                    {   
                                                        label: 'Cover', 
                                                        value: 2, 
                                                        icon: () => <MaterialCommunityIcons name="panorama-wide-angle" size={24} color="black" />, 
                                                        hidden: false
                                                    },
                                                    {   
                                                        label: 'Stretch', 
                                                        value: 3, 
                                                        icon: () => <MaterialCommunityIcons name="stretch-to-page-outline" size={24} color="black" />, 
                                                        hidden: false
                                                    },
                                                ]}
                                                defaultValue={this.state.selectedVideoMode}
                                                containerStyle={{height: 40, width: 130}}
                                                style={{backgroundColor: '#fafafa', color: '#000'}}
                                                itemStyle={{
                                                    justifyContent: 'flex-start'
                                                }}
                                                dropDownStyle={{backgroundColor: '#fff'}}
                                                onChangeItem={ item => {
                                                        if(item.value == 1){
                                                            this.setState({videoMode: Video.RESIZE_MODE_CONTAIN, selectedVideoMode: item.value })
                                                        }else if(item.value == 2){
                                                            this.setState({videoMode: Video.RESIZE_MODE_COVER, selectedVideoMode: item.value })
                                                        }else if(item.value == 3){
                                                            this.setState({videoMode: Video.RESIZE_MODE_STRETCH, selectedVideoMode: item.value })
                                                        }
                                                }}
                                            />
                                        </View>
                                        <View style={styles.secondController}>
                                            <TouchableOpacity
                                                onPress={this.updateForwardLeft}
                                                // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                                                style={styles.fullscreenButton}>
                                                <MaterialIcons name="rotate-left" size={40} color="white" />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={this.updatePauseOrPlay}
                                                // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                                                style={styles.fullscreenButton}>
                                                {this.state.play ? <AntDesign name="pause" size={40} color="white" /> : <Feather name="play" size={40} color="white" />}
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={this.updateForwardRight}
                                                // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                                                // style={styles.fullscreenButton}
                                                >
                                                <MaterialIcons name="rotate-right" size={40} color="white" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.thridController}>
                                            <Slider
                                                    style={{width: height, height: (width /3) - 20 }}
                                                    minimumValue={0}
                                                    maximumValue={this.state.duration}
                                                    value={this.state.currentDuration}
                                                    minimumTrackTintColor="#fc0b03"
                                                    maximumTrackTintColor="#fc0b03" 
                                                    onSlidingStart={(duration) => this.updateDurationMili(duration) }
                                                />
                                        </View>
                                    </View>
                                </View> 
                            ) 
                        }
                    </View>
                </TouchableWithoutFeedback> 
            </View>
        );
    } 

    updatePauseOrPlay = () => {
        this.setState({play: !this.state.play}); 
        // setTimeout(() => this.setState(s => ({...s, showControls: false})), 10000);
    }

    updateRepeat = () => { 
        this.videoRef.replayAsync();
        this.setState({loop: !this.state.loop});
        // setTimeout(() => this.setState(s => ({...s, showControls: false})), 10000); 
    }

    updateDurationMili = (duration) => {
        console.log(duration)
        this.videoRef.positionMillis = duration ;
    }

    updateForwardLeft = () => {

        // setTimeout(() => this.setState(s => ({...s, showControls: false})), 10000);
    }

    
    updateForwardRight = () => {
        
        // setTimeout(() => this.setState(s => ({...s, showControls: false})), 10000);
    }

    showControls = () => {
        if(!this.state.loadingVideo){ 
            this.state.showControls ? this.setState({ showControls: false}) : this.setState({ showControls: true}); 
                                    
            // setTimeout(() => this.setState(s => ({...s, showControls: false})), 2000);
        }
    }

    handleFullscreen = () => {
        this.videoRef.presentFullscreenPlayer();
        // this.videoRef.pauseAsync()
        this.setState({ fullscreen: !this.state.fullscreen})
        
        // setTimeout(() => this.setState(s => ({...s, showControls: false})), 2000);
    }
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: '#000',
    }, 
    video_container: {
        height: Dimensions.get('window').width * (9 / 16),
        width: Dimensions.get('window').width,
        backgroundColor: 'black',
    },
    fullscreenVideo: {
        height: width,
        width: height,
        backgroundColor: '#000',
    }, 
    controlOverlayLoading:{ 
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000000c4',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    loadingText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    controlOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000000c4',
    },
    controllerContainer:{
        height: width,
        width: height,
        // padding:  10,
        // justifyContent: 'space-between', 
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
    }, 
    firstController:{ 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding:  20, 
        width: height,
        height: width / 3,
        // justifyContent: 'center',
        alignContent: 'flex-start',
        alignItems: 'center',
    },
    secondController:{ 
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        // justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding:  10,
        width: height,  
        height: width / 3,
    },
    thridController:{ 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding:  10,  
        width: height,
        height: width / 3,
        justifyContent: 'center',
        alignContent: 'flex-end',
        alignItems: 'center',
        top: 20,
    },
    fullscreenButton: {
        // flex: 1,
        // flexDirection: 'row',
        // alignSelf: 'flex-end',
        // alignItems: 'center',
        // padding: 20,
    },
    sliderTag:{
        color: '#fff',
        fontSize: 25,
    }
})
 