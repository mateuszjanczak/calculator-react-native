import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Button extends React.Component {
    render() {
        const { children, orange } = this.props;

        const getListStyle = () => ({
            backgroundColor: orange ? '#f2a33c' : '#7d7e80'
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
        padding: 25,
        borderWidth: 0.7,
        borderColor: '#545559'
    },

    buttonText: {
        color: "white",
        fontSize: 25
    }
});