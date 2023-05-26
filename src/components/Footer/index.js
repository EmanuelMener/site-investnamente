import React from "react";
import * as C from "./style";

const Footer = ({ selectedEpisode }) => {
  if (!selectedEpisode) {
    return null;
  }

  return (
    <C.boxContainer>
      <C.Container>
        {/* Renderize as informações do episódio selecionado aqui */}
        <C.boxIfGeralEp>
          <C.divImgConv><C.InfoDoEPimgConv src={selectedEpisode.imageURL} alt="Imagem" /></C.divImgConv>
          <C.divInfoEpConv>
              <C.InfoDoEPimgConvTEXTO>{selectedEpisode.titulo}</C.InfoDoEPimgConvTEXTO>
              <C.InfoDoEPimgConvTEMPO>{selectedEpisode.descricao}</C.InfoDoEPimgConvTEMPO>
            </C.divInfoEpConv>
        </C.boxIfGeralEp>


        {/* Renderize o player de áudio aqui */}
        <C.DivcentralControll><audio src={selectedEpisode.audioURL} controls autoPlay /> </C.DivcentralControll>

        <C.boxDivMaisControles>Mais Controles</C.boxDivMaisControles>
      </C.Container>
    </C.boxContainer>

  );
};

export default Footer;
