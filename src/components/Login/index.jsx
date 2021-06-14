import React, {useState} from "react";
import logo from "./img/logo.png";
import {useHistory} from "react-router-dom"
import "./index.css";

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const history = useHistory();

    return (
        <div className="frm-login">
            <img src={logo} alt=""/>
            <input type="text" id="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="text" id="senha" onChange={e => setSenha(e.target.value)} placeholder="Senha" />
            <button className="entrar">Entrar</button>
            <button className="cadastrar" onClick={() => history.push("/cadastrar")}>Cadastrar</button>
        </div>
    )
}
