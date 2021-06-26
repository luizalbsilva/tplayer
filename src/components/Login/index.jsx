import React, {useState} from "react";
import {useDispatch} from "react-redux";
import logo from "./img/logo.png";
import {useHistory} from "react-router-dom"
import {logIn} from "../../slicers/logged-user.slicer"
import "./index.css";
import config from '../../config/config.json'

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    function login(e){
        fetch(`${config.server}/login-admin`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({usuario: email, senha})
        }).then(res => {
            if (res.status === 200) {
                return res.json();
            }
        }).then(obj => {
            if (obj) {
                dispatch(logIn(obj.jwt))
                history.push("/")
            }
        })

    }
    return (
        <div className="frm-login">
            <img src={logo} alt=""/>
            <fieldset>
                <input type="text" id="email" onChange={e => setEmail(e.target.value)} placeholder="Usuario" />
                <input type="password" id="senha" onChange={e => setSenha(e.target.value)} placeholder="Senha" />
            </fieldset>
            <div className="btn-div">
                <button className="entrar" onClick={login}>Entrar</button>
            </div>

        </div>
    )
}
