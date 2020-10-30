import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Keys from "./components/Keys";

export default class App extends React.Component {

    state = {
        display: 0,
        prev: '',
        operation: ''
    }

    clearState = () => {
        this.setState({
            display: 0,
            prev: '',
            operation: ''
        })
    }

    addString = (number) => {
        const { display } = this.state;
        if(display === 0 && number !== ',') {
            this.setState({
                display: number
            })
        } else {
            if(number === ',' && !display.toString().includes('.')) {
                this.setState({
                    display: display.toString() + '.'
                })
            } else {
                this.setState({
                    display: parseFloat(display.toString() + number)
                })
            }
        }
    }

    setOperation = (operation) => {
        let { display, prev } = this.state;

        if(prev) {
            this.doCalculate();
            setTimeout(()=> {
                display = this.state.display
                this.setState({
                    ...this.state,
                    operation,
                    prev: display,
                    display: 0
                })
            }, 1)
        } else {
            this.setState({
                ...this.state,
                operation,
                prev: display,
                display: 0
            })
        }
    }

    doCalculate = () => {
        const { display, prev, operation } = this.state;

        let result;

        switch (operation){
            case "+":
                result = prev + display;
                break;
            case "-":
                result = prev - display;
                break;
            case "*":
                result = prev * display;
                break;
            case "/":
                result = display !== 0 ? prev / display : 0;
                break;
            default:
                result = display;
        }

        this.setState({
            display: result,
            operation: '',
            prev: ''
        })
    }


    render() {
        const { display } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar style="auto"/>

                <View style={styles.result}>
                    <Text style={styles.resultText}>{display}</Text>
                </View>

                <Keys changeResult={this.changeResult} addString={this.addString} setOperation={this.setOperation} clearState={this.clearState} doCalculate={this.doCalculate}/>
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
