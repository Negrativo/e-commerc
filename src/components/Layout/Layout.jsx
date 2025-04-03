import React from "react";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar";

function Layout({ children }) {
	return (
		<div className="container-layout">
			<div className="sidebar">
				<Sidebar />
			</div>
			<div className="conteudo">{children}</div>
		</div>
	);
}

export default Layout;
