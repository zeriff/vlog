import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Video from 'react-native-video';
import * as actions from '../../actions';
import Cam from '../assets/Cam';

const { width, height } = Dimensions.get('window');

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            availableVideoUrl: null
        };
    }

    onButtonPress() {
        this.props.setLoading(true);
        setTimeout(() => {
            this.props.setLoading(false);
        }, 2000);
    }

    onRecordingComplete(path) {
        this.setState({
            availableVideoUrl: path
        });
    }

    getVideoComponent(url) {
        return (
            <Container>
                <Video
                    repeat
                    resizeMode='cover'
                    style={styles.backgroundVideo}
                    source={{ uri: url }}
                />
                <Button
                    onPress={() => {
                        this.uploadVideo();
                    }}
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        alignSelf: 'center'
                    }}
                >
                    <Text>Upload</Text>
                </Button>
            </Container>
        );
    }

    uploadVideo() {
        this.setState({
            availableVideoUrl: null
        });
    }

    render() {
        const { availableVideoUrl } = this.state;
        const cam = (
            <Cam onComplete={this.onRecordingComplete.bind(this)} />
        );

        return (
            <Container>
                {availableVideoUrl === null ? cam : this.getVideoComponent(availableVideoUrl)}
            </Container>
        );
    }
}
const styles = {
    backgroundVideo: {
        width,
        height,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
};

export default connect(null, actions)(Home);
