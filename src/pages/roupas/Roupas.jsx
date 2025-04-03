import React from "react";
import "./Roupas.css";
import { useNavigate } from "react-router";
import Sidebar from "../../components/Sidebar/Sidebar";

function Roupas() {
	const navigate = useNavigate();

	return (
		<div className="container-roupas">
			<div className="conteudo">
				<div>Tela de roupas!</div>
			</div>
		</div>
	);
}

export default Roupas;
