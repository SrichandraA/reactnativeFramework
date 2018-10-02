import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet} from 'react-native';

export default class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = { fontsAreLoaded: true };
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({fontsAreLoaded: false});
    }
    render() {
        if (this.state.fontsAreLoaded) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <View style={{width:'100%',height:'100%',marginTop:100}}>
                    <Button onPress= {()=> this.props.navigation.navigate("TestRedux")}>
                        <Text>Click Me!</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}



