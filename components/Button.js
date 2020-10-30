import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
    render() {
        const { children, orange, gray, fn } = this.props;

        const getListStyle = () => ({
            backgroundColor: orange ? (gray ? '#545559' : '#f2a33c') : '#7d7e80',
        })

        return (
            <TouchableOpacity onPress={fn} style={[styles.wrapper, getListStyle()]}>
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