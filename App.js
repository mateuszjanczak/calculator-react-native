import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { factorial, sqrt, pow} from 'mathjs';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Keys from "./components/Keys";

export default class App extends React.Component {

    state = {
        display: 0,
        prev: '',
        operation: ''
    }


    onChange = ({ window: {width, height} }) => {
        let isPortrait = false;

        if(width < height) {
            isPortrait = true;
        }

        this.setState({
            ...this.state,
            isPortrait
        })
    };

    componentDidMount() {
        Dimensions.addEventListener("change", this.onChange);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onChange);
    }

    clearState = () => {
        this.setState({
            ...this.state,
            display: 0,
            prev: '',
            operation: ''
        })
    }

    addString = (number) => {
        const { display } = this.state;
        if(display === 0 && number !== ',') {
            this.setState({
                ...this.state,
                display: number
            })
        } else {
            if(number === ',' && !display.toString().includes('.')) {
                this.setState({
                    ...this.state,
                    display: display.toString() + '.'
                })
            } else {
                this.setState({
                    ...this.state,
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
            ...this.state,
            display: result,
            operation: '',
            prev: ''
        })
    }

    changeSign = () => {
        const { display } = this.state;
        this.setState({
            ...this.state,
            display: (-1) * display
        })
    }

    doFactorial = () => {
        let { display } = this.state;
        if(display < 0){
            console.log("E: Negative numbers")
        } else if(display.toString().indexOf('.') !== -1) {
            console.log("E: Float numbers")
        } else {
            display = factorial(display)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    doSqrt = () => {
        let { display } = this.state;

        if(display < 0){
            console.log("E: Negative numbers")
        } else {
            display = sqrt(display)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    doPow = (num) => {
        let { display } = this.state;

        if(display < 0){
            console.log("E: Negative numbers")
        } else {
            display = pow(display, num)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    renderView = (isPortrait) => {
        const { display } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar style="auto"/>

                <View style={isPortrait ? stylesPortrait.result : stylesLandscape.result}>
                    <Text style={styles.resultText}>{display}</Text>
                </View>

                <Keys style={isPortrait ? stylesPortrait.keys : stylesLandscape.keys}
                      changeResult={this.changeResult} addString={this.addString}
                      setOperation={this.setOperation} clearState={this.clearState}
                      doCalculate={this.doCalculate} isPortrait={!isPortrait}
                      changeSign={this.changeSign} factorial={this.doFactorial}
                      sqrt={this.doSqrt} pow={this.doPow}
                />
            </View>
        )
    }


    render() {
        const { isPortrait } = this.state;

        return (
            this.renderView(isPortrait)
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#545557"
    },
    resultText: {
        fontSize: 100,
        color: "white"
    },
});


const stylesPortrait = StyleSheet.create({
    result: {
        flex: 0.7,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 20
    },
    keys: {
        flex: 0.3,
        backgroundColor: "#646466"
    },
});


const stylesLandscape = StyleSheet.create({
    result: {
        flex: 0.45,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 20
    },
    keys: {
        flex: 0.55,
        backgroundColor: "#646466"
    },
});