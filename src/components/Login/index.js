import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./style";
import { SiGoogle } from "react-icons/si";
import { BiHeadphone } from "react-icons/bi";


const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <C.Div>
            <h1>Ouça o nosso podcast <BiHeadphone /></h1>
            <C.Container>
                <img src="img/logo-investnamente.jpg" alt="Logo Investnament" width={"300"} />
                <C.Button onClick={handleSignin}><SiGoogle /><C.Span></C.Span> Login com Google</C.Button>
            </C.Container>
        </C.Div>
    )
}

export default Login;
