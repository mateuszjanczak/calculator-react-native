import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {factorial, sqrt, pow, log, log10, exp, e, pi} from 'mathjs';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Colors} from "./theme/Colors";
import Button from "./components/Button";

const Type = {
    portrait: 'portrait',
    landscape: 'landscape'
}

export default class App extends React.Component {

    state = {
        display: 0,
        prev: '',
        operation: ''
    }

    onChange = ({window: {width, height}}) => {
        let isPortrait = false;

        if (width < height) {
            isPortrait = true;
        }

        this.setState({
            ...this.state,
            isPortrait
        })
    };

    componentDidMount() {
        const dimensions = {
            window: {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }
        }

        this.onChange(dimensions);

        Dimensions.addEventListener("change", this.onChange);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onChange);
    }

    handleAC = () => {
        this.setState({
            ...this.state,
            display: 0,
            prev: '',
            operation: ''
        })
    }

    handleNumber = (number) => {
        const {display} = this.state;
        if (display === 0 && number !== ',') {
            this.setState({
                ...this.state,
                display: number
            })
        } else {
            if (number === ',' && !display.toString().includes('.')) {
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

    handleOperation = (operation) => {
        let {display, prev} = this.state;

        if (prev) {
            this.handleEquals();
            setTimeout(() => {
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

    handleEquals = () => {
        const {display, prev, operation} = this.state;

        let result;

        switch (operation) {
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

    handleSign = () => {
        const {display} = this.state;
        this.setState({
            ...this.state,
            display: (-1) * display
        })
    }

    handleFactorial = () => {
        let {display} = this.state;
        if (display < 0) {
            console.log("E: Negative numbers")
        } else if (display.toString().indexOf('.') !== -1) {
            console.log("E: Float numbers")
        } else {
            display = factorial(display)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    handleSqrt = () => {
        let {display} = this.state;

        if (display < 0) {
            console.log("E: Negative numbers")
        } else {
            display = sqrt(display)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    handlePow = (num) => {
        let {display} = this.state;

        if (display < 0) {
            console.log("E: Negative numbers")
        } else {
            display = pow(display, num)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    handleLn = () => {
        let {display} = this.state;

        if (display < 0) {
            console.log("E: Negative numbers")
        } else if (display === 0) {
            console.log("E: Zero number")
        } else {
            display = log(display)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    handleLog = () => {
        let {display} = this.state;

        if (display < 0) {
            console.log("E: Negative numbers")
        } else if (display === 0) {
            console.log("E: Zero number")
        } else {
            display = log10(display)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    handleExp = () => {
        let {display} = this.state;

        if (display < 0) {
            console.log("E: Negative numbers")
        } else if (display === 0) {
            console.log("E: Zero number")
        } else {
            display = exp(display)
            this.setState({
                ...this.state,
                display
            })
        }
    }

    handleE = () => {
        this.handleConst(e);
    }

    handlePI = () => {
        this.handleConst(pi);
    }

    handleConst = (num) => {
        this.setState({
            ...this.state,
            display: num
        })
    }

    handleTenPow = () => {
        let {display} = this.state;

        display = pow(10, display);

        this.setState({
            ...this.state,
            display
        })
    }

    handlePercent = () => {
        let {display, prev, operation} = this.state;

        if (operation === "*" || operation === "/") {
            display = display / 100;
        } else {
            display = (prev * display) / 100;
        }

        this.setState({
            ...this.state,
            display
        }, this.handleEquals)
    }

    buttons = [
        {
            color: Colors.tertiary,
            text: '√x',
            onPress: this.handleSqrt,
            type: Type.landscape
        },
        {
            color: Colors.tertiary,
            text: 'x!',
            onPress: this.handleFactorial,
            type: Type.landscape
        },
        {
            color: Colors.primary,
            text: 'AC',
            onPress: this.handleAC,
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: '+/-',
            onPress: this.handleSign,
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: '%',
            onPress: this.handlePercent,
            type: Type.portrait
        },
        {
            color: Colors.secondary,
            text: '/',
            onPress: () => this.handleOperation('/'),
            type: Type.portrait
        },



        {
            color: Colors.tertiary,
            text: 'x^2',
            onPress: () => this.handlePow(2),
            type: Type.landscape
        },
        {
            color: Colors.tertiary,
            text: 'x^3',
            onPress: () => this.handlePow(3),
            type: Type.landscape
        },
        {
            color: Colors.primary,
            text: '7',
            onPress: () => this.handleNumber(7),
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: '8',
            onPress: () => this.handleNumber(8),
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: '9',
            onPress: () => this.handleNumber(9),
            type: Type.portrait
        },
        {
            color: Colors.secondary,
            text: '*',
            onPress: () => this.handleOperation('*'),
            type: Type.portrait
        },



        {
            color: Colors.tertiary,
            text: 'ln',
            onPress: this.handleLn,
            type: Type.landscape
        },
        {
            color: Colors.tertiary,
            text: 'log10',
            onPress: this.handleLog,
            type: Type.landscape
        },
        {
            color: Colors.primary,
            text: '4',
            onPress: () => this.handleNumber(4),
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: '5',
            onPress: () => this.handleNumber(5),
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: '6',
            onPress: () => this.handleNumber(6),
            type: Type.portrait
        },
        {
            color: Colors.secondary,
            text: '-',
            onPress: () => this.handleOperation('-'),
            type: Type.portrait
        },

        {
            color: Colors.tertiary,
            text: 'e^x',
            onPress: this.handleExp,
            type: Type.landscape
        },
        {
            color: Colors.tertiary,
            text: 'e',
            onPress: this.handleE,
            type: Type.landscape
        },
        {
            color: Colors.primary,
            text: '1',
            onPress: () => this.handleNumber(1),
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: '2',
            onPress: () => this.handleNumber(2),
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: '3',
            onPress: () => this.handleNumber(3),
            type: Type.portrait
        },
        {
            color: Colors.secondary,
            text: '+',
            onPress: () => this.handleOperation('+'),
            type: Type.portrait
        },

        {
            color: Colors.tertiary,
            text: 'π',
            onPress: this.handlePI,
            type: Type.landscape
        },
        {
            color: Colors.tertiary,
            text: '10^x',
            onPress: this.handleTenPow,
            type: Type.landscape
        },
        {
            color: Colors.primary,
            text: '0',
            onPress: () => this.handleNumber(0),
            type: Type.portrait
        },
        {
            color: Colors.primary,
            text: ',',
            onPress: () => this.handleNumber(','),
            type: Type.portrait
        },
        {
            color: Colors.secondary,
            text: '=',
            onPress: this.handleEquals,
            type: Type.portrait
        },
    ]

    renderButton = (item) => {
        const {isPortrait} = this.state;
        const {color, text, onPress, type} = item;

        if(isPortrait) {
            if(type === Type.portrait) {
                return (
                    <Button key={text} width={25.0} color={color} fn={onPress} type={type}>{text}</Button>
                )
            }
        } else {
            return (
                <Button key={text} width={16.66} color={color} text={text} fn={onPress} type={type}>{text}</Button>
            )
        }
    }

    renderView = (isPortrait) => {
        const {display} = this.state;

        return (
            <View style={styles.container}>
                <StatusBar style="auto"/>

                <View style={[styles.result, isPortrait ? stylesPortrait.result : stylesLandscape.result]}>
                    <Text style={styles.resultText}>{display}</Text>
                </View>

                <View style={[styles.keys, isPortrait ? stylesPortrait.keys : stylesLandscape.keys]}>
                    {this.buttons.map((item) => this.renderButton(item))}
                </View>
            </View>
        )
    }


    render() {
        const {isPortrait} = this.state;

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
        fontSize: 75,
        color: "white"
    },
    result: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 20
    },
    keys: {
        backgroundColor: "#646466",
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent:'stretch'
    }
});

const stylesPortrait = StyleSheet.create({
    result: {
        flex: 0.5,
    },
    keys: {
        flex: 0.5,
    },
});

const stylesLandscape = StyleSheet.create({
    result: {
        flex: 0.3,
    },
    keys: {
        flex: 0.7,
    },
});