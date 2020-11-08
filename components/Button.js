import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
    render() {
        const { children, width, color, fn } = this.props;

        const getBackgroundColor = () => ({
            backgroundColor: color
        })

        const getWidth = () => {
            let flexBasis = (children === '0' ? width * 2 : width) + '%';

            return ({
                flexBasis
            })
        }

        return (

                <TouchableOpacity onPress={fn} style={[styles.wrapper, getBackgroundColor(), getWidth()]}>
                    <Text style={styles.buttonText}>{children}</Text>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#545559"
    },

    buttonText: {
        color: "white",
        fontSize: 25
    }
});