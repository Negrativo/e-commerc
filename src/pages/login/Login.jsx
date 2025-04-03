import React, { useState } from "react";
import {Button, TextField} from '@mui/material';
import "./Login.css"
import { useNavigate } from "react-router";

function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const logar = () => {
        console.log(login, password);
        navigate('home');
    }

    return (
        <div className="login">
              <div className="container-login">
            <TextField value={login} onChange={(event) => setLogin(event.target.value)} className="input-text" name="login"
                   placeholder="Login"/>
            <TextField value={password} onChange={(event) => setPassword(event.target.value)}className="input-text" name="password"
                   placeholder="Senha"/>
            <Button className="button-login" onClick={logar}>Entrar</Button>
        </div>
        </div>
    )
}

export default Login;