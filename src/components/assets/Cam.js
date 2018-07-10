import React from 'react';
import Camera, { constants } from 'react-native-camera';
import { Container } from 'native-base';


export default class Cam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            captureMode: constants.CaptureMode.video
        };
    }

    buildStartRecordContainer() {
        return (
            <Container onTouchEndCapture={this.startRecording.bind(this)} style={styles.startControl} />
        );
    }

    buildStopRecordContainer() {
        return (
            <Container onTouchEndCapture={this.stopRecording.bind(this)} style={styles.stopControl}>
                <Container style={styles.innerStopControl} />
            </Container>
        );
    }

    startRecording() {
        this
            .camera
            .capture({ mode: constants.CaptureMode.video })
            .then((data, eOps) => { this.props.onComplete(data.path); console.log(data, eOps); })
            .catch((err) => console.log(err));

        this.setState({
            isRecording: true
        });
    }

    stopRecording() {
        this.camera.stopCapture();
        this.setState({
            isRecording: false
        });
    }

    render() {
        const { isRecording } = this.state;
        const captureButton = isRecording ? this.buildStopRecordContainer() : this.buildStartRecordContainer();
        return (
            <Container>
                <Camera
                    style={styles.preview}
                    captureTarget={constants.CaptureTarget.cameraRoll}
                    // captureQuality={constants.CaptureQuality.medium}
                    type={constants.Type.back}
                    ref={(camera) => {
                        this.camera = camera;
                    }}
                    style={styles.preview}
                />
                {captureButton}
            </Container >
        );
    }
}

const styles = {
    innerStopControl: {
        width: 35,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        backgroundColor: 'yellow'
    },
    startControl: {
        position: 'absolute',
        backgroundColor: 'yellow',
        borderColor: 'grey',
        borderWidth: 5,
        borderRadius: 40,
        width: 80,
        height: 80,
        bottom: '9%',
        alignSelf: 'center'
    },
    stopControl: {
        position: 'absolute',
        bottom: '9%',
        alignSelf: 'center',
        borderRadius: 40,
        borderColor: 'grey',
        borderWidth: 5,
        width: 80,
        height: 80,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
};
