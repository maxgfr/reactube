import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { WebView } from 'react-native';
import { Container, Content, Icon } from 'native-base'
import CardComponent from './CardComponent'

class Home extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent thumbnail={require("../assets/me.png")} id_youtube="KVZ-P-ZI6W4" likes="101" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="BLABLA HEIN"/>
                    <CardComponent thumbnail={require("../assets/me.png")}  id_youtube="KVZ-P-ZI6W4" likes="101" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="BLABLA HEIN"/>
                </Content>
            </Container>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
