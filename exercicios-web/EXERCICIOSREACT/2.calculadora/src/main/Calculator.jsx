import React from "react";
import "./Calculator.css";
import Button from "../components/button/Button";
import Dispaly from "../components/display/Display";
import Display from "../components/display/Display";

export default class Calculator extends React.Component {


	clearMemory() {
		/////////////////////////funções dentro e fora do render??
		console.log("limpar memoria");
	}
	setOperation(operation) {
		console.log(operation);
	}
	addDigit(n) {
		console.long(n);
	}

	render() {
		const addDigit = (n) => this.addDigit(n);
		const setOperation = (n) => this.setOperation(n);
		const clearMemory = () => this.clearMemory();

		return (
			<div className="calculator">
				<Display value={100} />
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
				<Button label={"0"} click={(e) => this.addDigit(e)} />
				<Button label={"."} operation click={(e) => this.setOperation(e)} />
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
