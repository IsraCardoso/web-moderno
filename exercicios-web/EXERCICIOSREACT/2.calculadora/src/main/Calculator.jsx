/* eslint-disable no-unused-vars */
import React from "react";
import "./Calculator.css";
import Button from "../components/button/Button";
import Dispaly from "../components/display/Display";
import Display from "../components/display/Display";

const initialState = {
	displayValue: "0",
	clearDisplay: false,
	operation: null,
	values: [0, 0],
	current: 0,
};

export default class Calculator extends React.Component {
	state = { ...initialState };

	clearMemory() {
		this.setState({ ...initialState });
	}

	setOperation(operation) {
		if (this.setState.current === 0) {
			this.setState({ operation, current: 1, clearDisplay: true });
		} else {
			const equals = operation === "=";
			const currentOperation = this.state.operation;

			const values = [...this.state.values]
			values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
			console.log(this.values)
		}
	}

	addDigit(n) {
		if (n === "." && this.state.displayValue.includes(".")) {
			return;
		}

		const clearDisplay =
			this.state.displayValue === "0" || this.state.clearDisplay;
		const currentValue = clearDisplay ? "" : this.state.displayValue;
		const displayValue = currentValue + n;
		this.setState({ displayValue, clearDisplay: false });

		if (n !== ".") {
			const i = this.state.current;
			const newValue = parseFloat(displayValue);
			const values = [...this.state.values];
			values[i] = newValue;
			this.setState({ values });
			console.log(values);
		}
	}

	render() {
		const addDigit = (n) => this.addDigit(n);
		const setOperation = (n) => this.setOperation(n);
		const clearMemory = () => this.clearMemory();

		return (
			<div className="calculator">
				<Display value={this.state.displayValue} />
				<Button
					label={"AC"}
					triple
					operation
					click={() => this.clearMemory()}
				/>
				<Button label={"/"} operation click={(e) => this.setOperation(e)} />
				<Button label={"7"} click={(e) => this.addDigit(e)} />
				<Button label={"8"} click={(e) => this.addDigit(e)} />
				<Button label={"9"} click={(e) => this.addDigit(e)} />
				<Button label={"*"} operation click={(e) => this.setOperation(e)} />
				<Button label={"4"} click={(e) => this.addDigit(e)} />
				<Button label={"5"} click={(e) => this.addDigit(e)} />
				<Button label={"6"} click={(e) => this.addDigit(e)} />
				<Button label={"-"} operation click={(e) => this.setOperation(e)} />
				<Button label={"1"} click={(e) => this.addDigit(e)} />
				<Button label={"2"} click={(e) => this.addDigit(e)} />
				<Button label={"3"} click={(e) => this.addDigit(e)} />
				<Button label={"+"} operation click={(e) => this.setOperation(e)} />
				<Button label={"0"} double click={(e) => this.addDigit(e)} />
				<Button label={"."} click={(e) => this.addDigit(e)} />
				<Button label={"="} operation click={(e) => this.setOperation(e)} />
			</div>
		);
	}
}

// 	// assim ficaria sem as consts em render e as chamadas são diretas
// // sem arrowfunctions e '(e)' nos buttons
// constructor(props) {
// 	super(props);
// 	this.clearMemory = this.clearMemory.bind(this);
// 	this.setOperation = this.setOperation.bind(this);
// 	this.addDigit = this.addDigit.bind(this);
// }
