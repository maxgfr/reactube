import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

import YouTube from 'react-native-youtube'

class CardComponent extends Component {

    render() {

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={this.props.thumbnail} />
                        <Body>
                            <Text>{this.props.pseudo} </Text>
                            <Text note>{this.props.date}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <YouTube
                      videoId={this.props.id_youtube}  // The YouTube video ID
                      play={false}             // control playback of video with true/false
                      fullscreen={false}       // control whether the video should play in fullscreen or inline
                      loop={false}             // control whether the video should loop when ended

                      onReady={e => this.setState({ isReady: true })}
                      onChangeState={e => this.setState({ status: e.state })}
                      onChangeQuality={e => this.setState({ quality: e.quality })}
                      onError={e => this.setState({ error: e.error })}

                      style={{ height: 200, width: null, flex: 1 }}
                    />
                </CardItem>
                <CardItem style={{ height: 30 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                            <Text> {this.props.likes}</Text>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                            <Text> {this.props.nb_commentaires}</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>{this.props.pseudo} </Text>
                            {this.props.description}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
