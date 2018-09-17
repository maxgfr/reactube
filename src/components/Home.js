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

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent thumbnail={require("../assets/me.jpeg")} id_youtube="bgluUp8VbaA" likes="11" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="dsq HEIN"/>
                    <CardComponent thumbnail={require("../assets/me.jpeg")} id_youtube="R3Phv3h7GaA" likes="01" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="dsq HEIN"/>
                    <CardComponent thumbnail={require("../assets/me.jpeg")} id_youtube="DY1IRXQH8fk" likes="1" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="BLABLA HEIN"/>
                    <CardComponent thumbnail={require("../assets/me.jpeg")} id_youtube="BPrE5QEsugQ" likes="1" nb_commentaires="2" pseudo="thomas" date="01/01/2020" description="BLABLA HEIN"/>
                    <CardComponent thumbnail={require("../assets/me.jpeg")} id_youtube="KVZ-P-ZI6W4" likes="101" nb_commentaires="202" pseudo="maxgfr" date="01/01/2018" description="BLABLA HEIN"/>
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
