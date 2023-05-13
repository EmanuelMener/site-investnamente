import React from "react";
import * as C from "./style";
import { BiHomeAlt2, BiFolder } from "react-icons/bi";

const Sidebar = () => {
    return (
        <C.Container>
            <C.menuHome>
                <C.Div/>
                <BiHomeAlt2 />
                <C.Span></C.Span>
                Home
            </C.menuHome>

            <C.LinhaDivSection>
                <C.LinhaDivSectionDentro/>
                <C.textDivSectionDentro><h3>Lista Pessoal</h3></C.textDivSectionDentro>
            </C.LinhaDivSection>

            <C.menuMinhaLivraria>
                <C.menuMinhaLivrariaDiv/>
                <BiFolder />
                <C.menuMinhaLivrariaSpan></C.menuMinhaLivrariaSpan>
                Minha Livraria
            </C.menuMinhaLivraria>
        </C.Container>
    );
};

export default Sidebar;