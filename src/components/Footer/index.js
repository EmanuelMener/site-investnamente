import React from "react";
import * as C from "./style";
import { BiShuffle, BiSkipPrevious, BiPlay, BiPause, BiSkipNext, BiSync } from "react-icons/bi";
import { BsSoundwave } from "react-icons/bs";


const Footer = () => {
    return (
        <C.Container>
            <C.bntPlay2>
                <BsSoundwave/>
            </C.bntPlay2>
            <C.InfoDoEP>
                <C.InfoDoEPimgConv src="img/entrevistaJenni.png" alt="imagem EP" />
                <C.InfoDoEPimgConvTEXTO>
                    Encontre seus valores em meio às dificuldades - Jenni Almeida EP#04
                    <C.InfoDoEPimgConvTEMPO>
                    00:48:36
                    </C.InfoDoEPimgConvTEMPO>
                </C.InfoDoEPimgConvTEXTO>

            </C.InfoDoEP>
            <C.centralDeControle>
                <C.centralDeControleCONTROLLS>
                    <BiShuffle/>
                    <BiSkipPrevious/>
                    <C.bntPlay><BiPlay/></C.bntPlay>
                    <BiSkipNext/>
                    <BiSync/>
                </C.centralDeControleCONTROLLS>
                <C.centralDeControlePROGRESSBAR>
                    00:00
                    <C.linhaProgresso>
                    
                    </C.linhaProgresso>
                    00:48:36
                </C.centralDeControlePROGRESSBAR>
            </C.centralDeControle>
            <C.InfoDaDireita/>
        </C.Container>
    );
};

export default Footer;