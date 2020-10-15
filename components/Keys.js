import React from 'react';
import {StyleSheet, View} from "react-native";
import Button from "./Button";

export default class Keys extends React.Component {
    render() {
        return (
            <View style={styles.keys}>
                <View style={styles.row}>
                    <Button>AC</Button>
                    <View style={styles.placeholder} />
                    <View style={styles.placeholder} />
                    <Button orange>/</Button>
                </View>

                <View style={styles.row}>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button orange>*</Button>
                </View>

                <View style={styles.row}>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button orange>-</Button>
                </View>

                <View style={styles.row}>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button orange>+</Button>
                </View>

                <View style={styles.row}>
                    <Button>0</Button>
                    <View style={styles.placeholder} />
                    <Button>,</Button>
                    <Button orange>=</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    keys: {
        flex: 0.6,
        backgroundColor: "#646466"
    },

    row: {
        flex: 1,
        flexDirection: "row"
    },

    placeholder: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25
    }
});