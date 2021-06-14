import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import logo from "./img/logo.png";
import {useHistory} from "react-router-dom"
import {logIn} from "../../slicers/logged-user.slicer"
import "./index.css";

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    function login(e){
        dispatch(logIn("fake-jwt"))
        history.push("/")
    }
    return (
        <div className="frm-login">
            <img src={logo} alt=""/>
            <input type="text" id="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="text" id="senha" onChange={e => setSenha(e.target.value)} placeholder="Senha" />
            <button className="entrar" onClick={login }>Entrar</button>
            <button className="cadastrar" onClick={() => history.push("/cadastrar")}>Cadastrar</button>
        </div>
    )
}
