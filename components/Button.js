import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
    render() {
        const { children, orange, gray } = this.props;

        const getListStyle = () => ({
            backgroundColor: orange ? (gray ? '#545559' : '#f2a33c') : '#7d7e80',
        })

        return (
            <View style={[styles.wrapper, getListStyle()]}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>{children}</Text>
                </TouchableOpacity>
            </View>
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