import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Splash from './js/Splash';
import Main from './js/Main';

export default class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = { currentScreen:'Splash'};
    //     setTimeout(()=>{
    //         this.setState({currentScreen:'Main'})
    //     },3000)
    // }
    render() {
        // const { currentScreen } = this.state
        // let mainScreen = currentScreen === 'Splash' ? <Splash/>:<Main/>
        // return mainScreen;
        return <Main/>

    }
}