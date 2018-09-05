import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { WebView } from 'react-native';
import { Container, Content, Icon } from 'native-base'


class Home extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>

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
