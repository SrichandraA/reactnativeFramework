import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet} from 'react-native';
import { Provider } from "react-redux";
import store from "./store/index";
import Test from './Test';
import TestRedux from './TestRedux';
import {createStackNavigator, TabNavigator} from 'react-navigation';
export default class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>

                <AppNavigator/>
            </Provider>
        );
    }
}

const AppNavigator = createStackNavigator({

    Test: {
        screen: Test,
        header: {visible: false},
        navigationOptions: {
            title: 'Test',
            header: null
        }
    },
    TestRedux: {
        screen: TestRedux,
        header: {visible: false},
        navigationOptions: {
            title: 'TestRedux',
            header: null
        }
    }
})