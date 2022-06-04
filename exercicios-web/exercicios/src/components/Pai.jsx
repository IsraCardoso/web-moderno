import React from "react";
import childrenWithProps from "../utils/ChildrenWithProps";

export default function Pai(props) {
	return (
		<>
			<h1>
				{props.nome} {props.sobrenome}
			</h1>
			<h2>Filhos</h2>
			<ul>
        {childrenWithProps(props)}
			</ul>
		</>
	);
}
