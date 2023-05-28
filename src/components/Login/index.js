import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./style";
import { SiGoogle } from "react-icons/si";
import { BiHeadphone } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";


const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        
        <C.Div>
            <C.img src="img/logoInvertido.png" alt="Logo Investnament"/>
            <C.h1>Ouça o nosso podcast <BiHeadphone /></C.h1>
            <C.Container>
                <C.Button onClick={handleSignin}><SiGoogle /><C.Span></C.Span> Login com Google <C.icons><BiRightArrowAlt/></C.icons></C.Button>
            </C.Container>
        </C.Div>
    )
}

export default Login;
