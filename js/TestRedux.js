import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet} from 'react-native';
import { connect } from "react-redux";
import { addArticle } from "./actions/index";
const mapStateToProps = state => {
    return{ 
        articles: state.articles
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addArticle: article => dispatch(addArticle(article))
    }
}
class TestRedux extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:''};
        this.submit = this.submit.bind(this);
    }
submit(){
    this.props.addArticle({name:'d'});
    console.log(this.props.articles);
}
    render() {
 
                return (
            <Container>
                        

                <View style={{width:'100%',height:'100%',marginTop:100}}>
                        <Text></Text>
                        <Button onPress={this.submit}>
                            <Text>YO</Text>
                        </Button>
                </View>
            </Container>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestRedux);


