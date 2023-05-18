import React, { useState } from "react";
import * as C from "./style";
import { BiHomeAlt2, BiFolder } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";

const Sidebar = () => {
  const [width, setWidth] = useState("20rem"); // Estado para controlar a largura do componente
  const [contentVisible, setContentVisible] = useState(true); // Estado para controlar a visibilidade do conteúdo

  const handleClick = () => {
    setWidth((prevWidth) => (prevWidth === "20rem" ? "4.5rem" : "20rem")); // Alterna entre "20rem" e "3rem"
    setContentVisible(!contentVisible); // Alterna a visibilidade do conteúdo
  };

  return (
    <C.Container style={{ width }} className={contentVisible ? "opened" : "fechado"}>
      <C.btnColtrollSidebar onClick={handleClick}>
        <C.iconsGeral className={contentVisible ? "opened" : "fechado"} >
          {contentVisible ?  (
            <GrFormClose />
          ) : (
            <RxHamburgerMenu />
          )}
        </C.iconsGeral>
      </C.btnColtrollSidebar>
      
      
        <>
          <C.menuHome className={contentVisible ? "opened" : "fechado"}>
            <C.Div className={contentVisible ? "opened" : "fechado"}/>
            <BiHomeAlt2 />
            {contentVisible && (<C.Span className={contentVisible ? "opened" : "fechado"}></C.Span>)}
            {contentVisible && (<h4>Home</h4>)}
          </C.menuHome>

          <C.LinhaDivSection>
            <C.LinhaDivSectionDentro />
            {contentVisible &&(
            <C.textDivSectionDentro>
              <h3>Lista Pessoal</h3>
            </C.textDivSectionDentro>)}
          </C.LinhaDivSection>

          <C.menuMinhaLivraria className={contentVisible ? "opened" : "fechado"}>
            <C.menuMinhaLivrariaDiv className={contentVisible ? "opened" : "fechado"}/>
            <BiFolder />
            <C.menuMinhaLivrariaSpan></C.menuMinhaLivrariaSpan>
            {contentVisible && (<h4>Minha Livraria</h4>)}
          </C.menuMinhaLivraria>
        </>
        

      {/* Resto do código */}
    </C.Container>
  );
};

export default Sidebar;
