import React from 'react';
import {StyleSheet, View} from "react-native";
import Button from "./Button";

export default class Keys extends React.Component {

    handleAC = () => {
        const { clearState } = this.props;
        clearState();
    }

    handleNumberKey = (number) => {
        const { addString } = this.props;
        addString(number);
    }

    handleOperation = (operation) => {
        const { setOperation } = this.props;
        setOperation(operation);
    }

    handleEquals = () => {
        const { doCalculate } = this.props;
        doCalculate();
    }

    handleDot = () => {
        const { addString } = this.props;
        addString(',');
    }

    handleSign = () => {
        const { changeSign } = this.props;
        changeSign();
    }

    handleFactorial = () => {
        const { factorial } = this.props;
        factorial();
    }

    handleSqrt = () => {
        const { sqrt } = this.props;
        sqrt();
    }

    handlePow = (num) => {
        const { pow } = this.props;
        pow(num);
    }

    handleLn = () => {
        const { ln } = this.props;
        ln();
    }

    handleLog = () => {
        const { log } = this.props;
        log();
    }

    handleExp = () => {
        const { exp } = this.props;
        exp();
    }

    handleE = () => {
        const { e } = this.props;
        e();
    }

    handlePI = () => {
        const { pi } = this.props;
        pi();
    }

    handleTenPow = () => {
        const { tenPow } = this.props;
        tenPow();
    }

    handlePercent = () => {
        const { percent } = this.props;
        percent();
    }

    render() {
        const { isPortrait } = this.props;

        return (
            <View style={styles.keys}>

                <View style={styles.row}>

                    {isPortrait &&
                        <>
                            <View style={styles.item}>
                                <Button fn={this.handleSqrt}>√x</Button>
                            </View>
                            <View style={styles.item}>
                                <Button fn={this.handleFactorial}>x!</Button>
                            </View>
                        </>
                    }

                    <View style={styles.item}>
                        <Button gray fn={this.handleAC}>AC</Button>
                    </View>
                    <View style={styles.item}>
                        <Button gray fn={this.handleSign}>+/-</Button>
                    </View>
                    <View style={styles.item}>
                        <Button gray fn={this.handlePercent}>%</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange fn={() => this.handleOperation("/")}>/</Button>
                    </View>
                </View>

                <View style={styles.row}>
                    {isPortrait &&
                    <>
                        <View style={styles.item}>
                            <Button fn={() => this.handlePow(2)}>x^2</Button>
                        </View>
                        <View style={styles.item}>
                            <Button fn={() => this.handlePow(3)}>x^3</Button>
                        </View>
                    </>

                    }

                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(7)}>7</Button>
                    </View>
                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(8)}>8</Button>
                    </View>
                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(9)}>9</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange fn={() => this.handleOperation("*")}>*</Button>
                    </View>
                </View>

                <View style={styles.row}>

                    {isPortrait &&
                    <>
                        <View style={styles.item}>
                            <Button fn={this.handleLn}>ln</Button>
                        </View>
                        <View style={styles.item}>
                            <Button fn={this.handleLog}>log10</Button>
                        </View>
                    </>

                    }

                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(4)}>4</Button>
                    </View>
                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(5)}>5</Button>
                    </View>
                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(6)}>6</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange fn={() => this.handleOperation("-")}>-</Button>
                    </View>
                </View>

                <View style={styles.row}>

                    {isPortrait &&
                    <>
                        <View style={styles.item}>
                            <Button fn={this.handleExp}>e^x</Button>
                        </View>
                        <View style={styles.item}>
                            <Button fn={this.handleE}>e</Button>
                        </View>
                    </>

                    }
                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(1)}>1</Button>
                    </View>
                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(2)}>2</Button>
                    </View>
                    <View style={styles.item}>
                        <Button fn={() => this.handleNumberKey(3)}>3</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange fn={() => this.handleOperation("+")}>+</Button>
                    </View>
                </View>

                <View style={styles.row}>

                    {isPortrait &&
                    <>
                        <View style={styles.item}>
                            <Button fn={this.handlePI}>π</Button>
                        </View>
                        <View style={styles.item}>
                            <Button fn={this.handleTenPow}>10^x</Button>
                        </View>
                    </>

                    }
                    <View style={styles.itemBig}>
                        <Button big fn={() => this.handleNumberKey(0)}>0</Button>
                    </View>
                    <View style={styles.item}>
                        <Button fn={this.handleDot}>,</Button>
                    </View>
                    <View style={styles.item}>
                        <Button orange fn={this.handleEquals}>=</Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    keys: {
        flex: 1,
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