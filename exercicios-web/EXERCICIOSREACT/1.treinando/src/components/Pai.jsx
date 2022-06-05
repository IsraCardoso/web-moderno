import React from "react";
import childrenWithProps from "../utils/ChildrenWithProps";
import Filho from "./Filho";


export default function Pai(props) {
	return (
		<>
			<h1>
				{props.nome} {props.sobrenome}
			</h1>
			<h2>Filhos</h2>
			<ul>
        {React.cloneElement(props.children, { ...props })}
			</ul>
		</>
	);
}
