import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { WebView } from 'react-native';

class Home extends Component {
    render() {
        return (

            <WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/PG7k6DWpXTE?rel=0?rel=0&autoplay=0&showinfo=0&controls=0'}}
            />

        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
