import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Keys from "./components/Keys";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto"/>

                <View style={styles.result}>
                    <Text style={styles.resultText}>0</Text>
                </View>

                <Keys />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#545557"
    },

    result: {
        flex: 0.4,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 20
    },

    resultText: {
        fontSize: 100,
        color: "white"
    },

    keys: {
        flex: 0.6,
        backgroundColor: "#646466"
    },
});
