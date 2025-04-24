import React, { useEffect, useState } from "react";
import "./Produtos.css";
import { useNavigate } from "react-router";
import Sidebar from "../../components/Sidebar/Sidebar";
import produtosJson from "../../mock/produtos";
import { Typography, Modal, Box } from "@mui/material";
import Produto from "../../components/Produto/Produto";

function Home() {
	const [produtos, setProdutos] = useState([]);
	const [open, setOpen] = useState(false);
	const [nome, setNome] = useState("");

	const [selectedProduto, setSelectedProduto] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		setProdutos(produtosJson);
	}, []);

	const produtoSelecionado = (open, nome) => {
		setOpen(open);
		setNome(nome);
	};

	useEffect(() => {
		if (nome) {
			setSelectedProduto(produtos.find((produto) => produto.nome === nome));
		}
	}, [nome, produtos]);

	return (
		<div className="container-home">
			<div className="conteudo-home">
				<div className="product-grid">
					{produtos.map((produto) => (
						<Produto
							key={produto.id}
							nome={produto.nome}
							imagem={produto.imagem}
							produtoSelecionado={produtoSelecionado}
						/>
					))}
				</div>
			</div>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(153, 150, 150, 0.5)",
				}}
			>
				<Box width="250px" height="250px">
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{selectedProduto}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}

export default Home;
