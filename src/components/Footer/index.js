import React, { useRef, useState } from "react";
import * as C from "./style";
import "./style.css";

import { BiPlay, BiPause } from "react-icons/bi";

const Footer = ({ selectedEpisode }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    const audioPlayer = audioRef.current;

    if (audioPlayer.paused) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

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
              <C.InfoDoEPimgConvTEXTO>{selectedEpisode.titulo && selectedEpisode.titulo.length > 21 ? `${selectedEpisode.titulo.substring(0, 21)}...` : selectedEpisode.titulo}</C.InfoDoEPimgConvTEXTO>
              <C.InfoDoEPimgConvTEMPO>{selectedEpisode.descricao && selectedEpisode.descricao.length > 21 ? `${selectedEpisode.descricao.substring(0, 21)}...` : selectedEpisode.descricao}</C.InfoDoEPimgConvTEMPO>
            </C.divInfoEpConv>
        </C.boxIfGeralEp>


        {/* Renderize o player de áudio aqui */}
        <C.DivcentralControll>
          <audio ref={audioRef} src={selectedEpisode.audioURL} controlls autoPlay />
          <C.btnPlay onClick={handlePlayPause}>
            {isPlaying ? <BiPause /> : <BiPlay />}
          </C.btnPlay>
        </C.DivcentralControll>

        <C.boxDivMaisControles>Mais Controles</C.boxDivMaisControles>
      </C.Container>
    </C.boxContainer>

  );
};

export default Footer;
