import React from "react";
import ReactDOM from "react-dom/client";
import Primeiro from "./components/Primeiro";
import BomDia from "./components/BomDia";
import Multiplos from "./components/Multiplos";
import Saudacao from "./components/Saudacao";
import Filho from "./components/Filho";
import Pai from "./components/Pai";

const elemento = <h1>Olá React!</h1>;
const componente = <BomDia nome="Israel" idade={10} />;
const multiplos = <Multiplos.BoaTarde nome="Israel" />;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Pai nome={1} sobrenome={2}>
			<Filho />
			<Filho sobrenome="teste2"  />
			<Filho nome="teste3"  />
			<Filho nome="teste4"  />
		</Pai>
	</>
);
