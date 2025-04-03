import { Typography } from "@mui/material";
import React from "react";
import "./Produto.css";

function Produto(props) {
	return (
		<div className="container-produto" onClick={() => props.produtoSelecionado(props.nome)}>
			<div className="imagem-produto">
				<img src={props.imagem} width={100} height={100} alt={props.nome} />
			</div>
			<div className="nome-produto">
				<Typography>{props.nome}</Typography>
			</div>
		</div>
	);
}

export default Produto;
