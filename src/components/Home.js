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
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="201" />
                    <CardComponent imageSource="3" likes="301" />
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
