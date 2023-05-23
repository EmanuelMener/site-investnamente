import React, { useState, useRef } from "react";
import * as C from "./style";
import { BiSearchAlt2, BiConversation, BiHelpCircle, BiNotification, BiUpload } from "react-icons/bi";
import { MdExitToApp } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { uploadFiles } from './uploadService';





// Importações do db
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";


const Navbar = () => {
  const [user] = useAuthState(auth);
  const [popupOpenPerfil, setPopupOpen] = useState(false);
  const [popupOpenInformacao, setPopupOpen2] = useState(false);
  const [popupOpenUpload, setPopupOpen3] = useState(false);
  const [exibirExcluirConta, setExibirExcluirConta] = useState(false);
  const [users, setUsers] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);



  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const popupRef = useRef(null);

  const handleLogout = () => {
    auth.signOut();
  };
  
  const lidarCliquePerfil = () => {
    setPopupOpen(!popupOpenPerfil);
  };

  const lidarCliqueInformacao = () => {
    setPopupOpen2(!popupOpenInformacao);
  };

  const lidarCliqueUpload = () => {
    setPopupOpen3(!popupOpenUpload);
  };

  const lidarCliqueExcluirConta = () => {
    setExibirExcluirConta(!exibirExcluirConta);
  };

  const lidarCliqueExcluirContaDefinitivamente = async () => {
    // Excluir a conta do usuário na coleção "comments"
    const commentsSnapshot = await db.collection("comments").where("userId", "==", user.uid).get();
    const batch = db.batch();
    commentsSnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    // Excluir a conta do usuário na coleção "users"
    await db.collection("users").doc(user.uid).delete();

    // Excluir a conta do usuário do Firebase Authentication
    await user.delete();
  };
  

  const lidarCliqueForaDoPopup = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupOpen(false);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
  
    const imageFile = document.querySelector('#image').files[0];
    //const videoFile = document.querySelector('#video').files[0];
    const audioFile = document.querySelector('#audio').files[0];
    const title = titleRef.current.value; // Usando a referência para o input do título
    const description = descriptionRef.current.value; // Usando a referência para o input da descrição
  
    if (imageFile && /*videoFile &&*/ audioFile && title && description) {
      uploadFiles(imageFile, /*videoFile,*/ audioFile, title, description, setUploadStatus, setUploadProgress);
    } else {
      console.error('Por favor, preencha todos os campos');
    }
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

        <C.btnInf onClick={lidarCliqueInformacao}>
          <BiHelpCircle />
          <C.PopupContainerINFO open={popupOpenInformacao}>
            <C.TEXTinfo>
              <C.iconINFO><BiHelpCircle /></C.iconINFO>
              Somos um podcast que aborda desenvolvimento pessoal, administração, empreendedorismo e assuntos relacionados desde 2019. Emanuel Menezes é o host do podcast, juntamente com Gabriel Leal como sócio.
            </C.TEXTinfo>
          </C.PopupContainerINFO>
        </C.btnInf>

        <C.btnSino><BiNotification /></C.btnSino>
    
        {(user?.email === "modooncontabilidade@gmail.com" || user?.email === "emenezes.jem@gmail.com") && (
        <C.bntUpload onClick={lidarCliqueUpload}>
          <AiOutlineCloudUpload />
          <C.PopupContainerUPLOAD open={popupOpenUpload}>
            <C.FormContainer onClick={(event) => event.stopPropagation()}>
              <div>
                <progress value={uploadProgress} max="100"></progress>
              </div>
              <C.FormField>
                <C.Label htmlFor="image">Imagem:</C.Label>
                <C.Input type="file" id="image" accept="image/*" />
              </C.FormField>
              {/*<C.FormField>
                <C.Label htmlFor="video">Vídeo:</C.Label>
                <C.Input type="file" id="video" accept="video/*" />
              </C.FormField>*/}
              <C.FormField>
                <C.Label htmlFor="audio">Áudio:</C.Label>
                <C.Input type="file" id="audio" accept="audio/*" />
              </C.FormField>
              <C.FormField>
                <C.Label htmlFor="title">Título:</C.Label>
                <C.Input type="text" id="title" ref={titleRef} />
              </C.FormField>
              <C.FormField>
                <C.Label htmlFor="description">Descrição:</C.Label>
                <C.Textarea id="description" ref={descriptionRef} />
              </C.FormField>
              <C.Button onClick={handleUpload}>
                Enviar
                <C.bntUpload>
                  <BiUpload/>
                </C.bntUpload>
              </C.Button>

              {uploadStatus && <span>{uploadStatus}</span>}

            </C.FormContainer>
          </C.PopupContainerUPLOAD>
        </C.bntUpload>
        )}

        <C.btnPessoa onClick={lidarCliquePerfil}>
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

          <C.PopupContainer open={popupOpenPerfil} ref={popupRef} onClick={(event) => event.stopPropagation()}>
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

            <C.BtnExcluirConta onClick={lidarCliqueExcluirConta}>
              <C.labelExit>
                Excluir Conta 
                <C.iconExit><CgTrash/></C.iconExit>
              </C.labelExit>
              {exibirExcluirConta && (
                <C.PopupContainerExcluirConta open={exibirExcluirConta} /*onClick={(event) => event.stopPropagation()}*/>
                  <C.ContainerExcluirConta>
                    <C.DivImgDespedida src="img/imgDespedida.svg" alt="imagem EP" />
                    <C.campoDeMinagem>
                      <C.TextorNotUnscribe>
                        <h2>
                        Você tem certeza que vai nos deixar? 
                        Esperamos ter lhe proporcionado momentos 
                        felizes e virginais!
                        </h2>
                      </C.TextorNotUnscribe>
                      <C.botoesDoCancelamento>
                        <C.PrimaryButton>Voltar</C.PrimaryButton>
                        <C.SecondaryButton onClick={lidarCliqueExcluirContaDefinitivamente}>Cancelar inscrição</C.SecondaryButton>
                      </C.botoesDoCancelamento>

                    </C.campoDeMinagem>
                  </C.ContainerExcluirConta>
                </C.PopupContainerExcluirConta>
              )}
            </C.BtnExcluirConta>
          </C.PopupContainer>
        </C.btnPessoa>



      </C.contaEnav>
    </C.Container>
  );
};

export default Navbar;
