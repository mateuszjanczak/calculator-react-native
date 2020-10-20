import React from 'react';
import {StyleSheet, View} from "react-native";
import Button from "./Button";

export default class Keys extends React.Component {
    render() {
        return (
            <View style={styles.keys}>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Button gray>AC</Button>
                    </View>
                    <View style={styles.itemBig}>
                        <View style={styles.placeholder} />
                    </View>
                    <View style={styles.item}>
                        <Button orange>/</Button>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.item}>
                        <Button>7</Button>
                    </View>
                    <View style={styles.item}>
                        <Button>8</Button>
                    </View>
                    <View style={styles.item}>
                        <Button>9</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange>*</Button>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.item}>
                        <Button>4</Button>
                    </View>
                    <View style={styles.item}>
                        <Button>5</Button>
                    </View>
                    <View style={styles.item}>
                        <Button>6</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange>-</Button>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.item}>
                        <Button>1</Button>
                    </View>
                    <View style={styles.item}>
                        <Button>2</Button>
                    </View>
                    <View style={styles.item}>
                        <Button>3</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange>+</Button>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.itemBig}>
                        <Button big>0</Button>
                    </View>
                    <View style={styles.item}>
                        <Button>,</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange>=</Button>
                    </View>
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
        flex: 2,
        borderWidth: 1,
        borderColor: "#545559"
    },

    item: {
        flex: 1
    },

    itemBig: {
        flex: 2
    }
});