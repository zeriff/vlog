import React from 'react';
import { ScrollView, View, Dimensions, Text } from 'react-native';

const window = Dimensions.get('window');

const styles = {
    item: {
        flex: 1,
        width: window.width
    },
    verticalItem: {
        flex: 1,
        width: window.width,
        height: window.height
    },
    scrollViewVertical: {
        //flexDirection: 'column'
        flex: 1,
        transform: [
            { scaleX: -1 },
        ],
    },
    scrollView: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
    },
    verticallyInverted: {
        flex: 1,
        transform: [
            { scaleX: -1 },
        ],
    },
};

export default class Menu extends React.Component {
    static defaultProps = {
        routes: [],
        horizontal: true,
        initialIndex: 0,
    }

    constructor(props) {
        super(props);
        this.scrollView = null;
    }

    componentDidMount() {
        if (this.props.horizontal) {
            const offset = window.width * this.props.initialIndex;
            this.scrollView.scrollTo({ x: offset, animated: false });
        } else {
            const offset = window.height * this.props.initialIndex;
            this.scrollView.scrollTo({ y: offset, animated: false });
        }
    }

    renderScreens() {
        const { horizontal, routes } = this.props;
        const itemStyle = horizontal ? styles.item : styles.verticalItem;
        return routes.map((item, index) => {
            return (
                <View key={index} style={itemStyle}>
                    <item.Component />
                </View>
            );
        });
    }

    render() {
        const { horizontal } = this.props;
        const scrollViewStyle = horizontal ? styles.scrollView : styles.scrollViewVertical;
        return (
            <View style={styles.container}>
                <ScrollView
                    // contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    ref={c => { this.scrollView = c; }}
                    flex={1}
                    overScrollMode="always"
                    horizontal={horizontal}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={scrollViewStyle}
                    scrollEventThrottle={32}
                    bounces={false}
                >
                    {this.renderScreens()}
                </ScrollView>
            </View>
        );
    }
}
