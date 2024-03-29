import React, { useState, useRef, useEffect } from "react";
import * as C from "./style";
import * as CC from "../Content"
import { BiSearchAlt2, BiConversation, BiHelpCircle, BiNotification, BiUpload } from "react-icons/bi";
import { MdExitToApp } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { AiOutlineCloudUpload } from "react-icons/ai";

// Importações do db
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupOpen2, setPopupOpen2] = useState(false);
  const [popupOpen3, setPopupOpen3] = useState(false);
  const [unsubscribePopupOpen, setUnsubscribePopupOpen] = useState(false);
  const popupRef = useRef();

  
  const handleProfileClick = () => {
    setPopupOpen(!popupOpen);
    setUnsubscribePopupOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupOpen(false);
      setUnsubscribePopupOpen(false);
    }
  };

  
  const handleContainerClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //div do novo cod

  const handleLogout = () => {
    auth.signOut();
  };

  const handleProfileClick2 = () => {
    setPopupOpen2(!popupOpen2);
  };

  const handleProfileClick3 = () => {
    setPopupOpen3(!popupOpen3);
  };

  const handleUpload = () => {
    // Lógica para enviar o arquivo
  };

  const handleUnsubscribeClick = () => {
    setUnsubscribePopupOpen(!unsubscribePopupOpen);
    setPopupOpen(false);
  };

  const PopupContainerUnscribe = ({ open }) => {
    if (!open) return null;
  };

  return (
    <C.Container>
      <C.Img src="img/logo-investnamente2.png" alt="Logo Investnament" />
      <C.barraProgresso>
        <C.barraProgressoICON><BiSearchAlt2 /></C.barraProgressoICON>
        <C.barraProgressoINPUT placeholder="Pesquisar por episódio..." />
      </C.barraProgresso>

      <C.contaEnav>

        <C.btnContato> CONTATO</C.btnContato>

        <C.btnInf onClick={handleProfileClick2}>
          <BiHelpCircle />
          <C.PopupContainerINFO open={popupOpen2}>
            <C.TEXTinfo>
              <C.iconINFO><BiHelpCircle /></C.iconINFO>
              Somos um podcast que aborda desenvolvimento pessoal, administração, empreendedorismo e assuntos relacionados desde 2019. Emanuel Menezes é o host do podcast, juntamente com Gabriel Leal como sócio.
            </C.TEXTinfo>
          </C.PopupContainerINFO>
        </C.btnInf>

        <C.btnSino><BiNotification /></C.btnSino>
    
        {(user?.email === "modooncontabilidade@gmail.com" || user?.email === "emenezes.jem@gmail.com") && (
        <C.bntUpload onClick={handleProfileClick3}>
          <AiOutlineCloudUpload />
          <C.PopupContainerUPLOAD open={popupOpen3}>
            <C.FormContainer>
              <C.FormField>
                <C.Label htmlFor="image">Imagem:</C.Label>
                <C.Input type="file" id="image" accept="image/*" />
              </C.FormField>
              <C.FormField>
                <C.Label htmlFor="video">Vídeo:</C.Label>
                <C.Input type="file" id="video" accept="video/*" />
              </C.FormField>
              <C.FormField>
                <C.Label htmlFor="audio">Áudio:</C.Label>
                <C.Input type="file" id="audio" accept="audio/*" />
              </C.FormField>
              <C.FormField>
                <C.Label htmlFor="title">Título:</C.Label>
                <C.Input type="text" id="title" />
              </C.FormField>
              <C.FormField>
                <C.Label htmlFor="description">Descrição:</C.Label>
                <C.Textarea id="description" />
              </C.FormField>
              <C.Button onClick={handleUpload}>
                Enviar
                <C.bntUpload>
                  <BiUpload/>
                </C.bntUpload>
              </C.Button>
            </C.FormContainer>
          </C.PopupContainerUPLOAD>
        </C.bntUpload>
        )}

        <C.btnPessoa onClick={handleProfileClick}>
          {user?.photoURL ? (
            <div style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #26272B",
            }}>
              <img
                src={user.photoURL}
                alt="User"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          ) : (
              <span>Usuário</span>
            )}

          <C.PopupContainer open={popupOpen}>

            <C.BtnPerfil>
              <C.fotoPerfil>
                {user?.photoURL ? (
                  <div style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1px solid #26272B",
                  }}>
                    <img
                      src={user.photoURL}
                      alt="User"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  ) : (
                      <span>Usuário</span>
                    )}
              </C.fotoPerfil>


              <C.labelEmail>
                <span>{user?.email}</span>
              </C.labelEmail>
              

            </C.BtnPerfil>

            <C.BtnExit onClick={handleLogout}>

              <C.labelExit>
                Exit <C.iconExit><MdExitToApp/></C.iconExit>
              </C.labelExit>
              

            </C.BtnExit>

            <C.BtnExcluirConta onClick={handleUnsubscribeClick}>
              
              <C.labelExit open={unsubscribePopupOpen}>
                Excluir Conta 
                <C.iconExit><CgTrash/></C.iconExit>
              </C.labelExit>

              <C.PopupContainerUnscribe >
                <C.bntUnscribe>

                    Tem certeza de que deseja excluir sua conta?

                    <C.ConfirmButton>Confirmar</C.ConfirmButton>
                    <C.CancelButton>Cancelar</C.CancelButton>

                </C.bntUnscribe>
              </C.PopupContainerUnscribe>
            </C.BtnExcluirConta>

          </C.PopupContainer>
        </C.btnPessoa>

      </C.contaEnav>
    </C.Container>
  );
};



export default Navbar;