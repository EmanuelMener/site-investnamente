import React, { useState, useEffect } from "react";
import * as EmailValidator from "email-validator";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as C from "./style";
import { settingsEmAlta, settingsComentarios } from "./carroussel";
import "./slider.css";
import { MdSend } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { BiShuffle, BiSkipPrevious, BiPlay, BiPause, BiSkipNext, BiSync } from "react-icons/bi";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import firebase from "firebase/compat/app";
import { collection, getDocs } from "firebase/firestore"

const fetchData = async (db) => {
  const docsCol = collection(db, 'iformacoesDoEp');
  const docSnap = await getDocs(docsCol);
  const docList = docSnap.docs.map(doc => {
    const data = doc.data();
    // Adicione as propriedades de data de upload e tempo do áudio
    data.dataUpload = doc.data().dataUpload; // Substitua "dataUpload" pelo nome da propriedade de data de upload
    data.tempoAudio = doc.data().tempoAudio; // Substitua "tempoAudio" pelo nome da propriedade de tempo do áudio
    return data;
  });
  return docList;
};


const Content = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user] = useAuthState(auth);
  const userName = user.displayName;
  const commentsRef = db.collection("comments");
  const [commentsSnapshot] = useCollection(commentsRef);

  const [showFullComment, setShowFullComment] = useState(false);

  const [expandedComments, setExpandedComments] = useState([]);
  const commentLines = 2;

  const [popupOpenMaisComentario, setPopupOpenMaisComentario] = useState(false); //
  const [commentsMaisMensagens, setCommentsMaisMensagens] = useState([]);// estado tela mais mensagens


  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false); //Excluir Comentário
  const [commentToDelete, setCommentToDelete] = useState(null);


  const [iformacoesDoEp, setInfoEp] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleToggleShowFullComment = () => {
    setShowFullComment(!showFullComment);
  };


  const toggleExpandComment = (commentId) => {
    if (expandedComments.includes(commentId)) {
      setExpandedComments(expandedComments.filter((id) => id !== commentId));
    } else {
      setExpandedComments([...expandedComments, commentId]);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      addComment(newComment);
      setNewComment("");
    }
  };

  const addComment = async (text) => {
    try {
      await commentsRef.add({
        text: text,
        userId: user.uid,
        userName: userName,
        userPhotoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setNewComment("");
    } catch (error) {
      console.error("Erro ao adicionar o comentário:", error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await db.collection("comments").doc(commentId).delete();
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Erro ao deletar o comentário:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = db.collection("comments").onSnapshot((snapshot) => {
      const updatedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCommentsMaisMensagens(updatedComments);
    });
  
    // Retorne uma função de limpeza para cancelar a inscrição quando o componente for desmontado
    return () => unsubscribe();
  }, []);
  
  useEffect(() => {
    const fetchInfoEp = async () => {
      try {
        const data = await fetchData(db);
        setInfoEp(data);
      } catch (error) {
        console.error("Erro ao buscar os dados da coleção iformacoesDoEp:", error);
      }
    };

    fetchInfoEp();
  }, []);
  
//variável maximo

const handlePlayAudio = (audioURL) => {
  // Aqui você pode exibir um pop-up com o player de áudio
  // e reproduzir o áudio usando a URL fornecida
  // Você pode usar um estado para controlar a exibição do pop-up
  setAudioURL(audioURL);
  setShowPopup(true);
};


  return (
    
    <C.Container>
      <C.ContentContainer>
        <h1>Em Alta</h1>

        <Slider {...settingsEmAlta}>
        {iformacoesDoEp.map((item) => (
          <C.CardContainer key={item.id}>
            <C.divImg><C.CardImage src={item.imageURL} alt="Imagem" /></C.divImg>
            
            <C.divTextosTTDD>
              <C.CardTitle>{item.titulo}</C.CardTitle>
              <C.CardDescription>{item.descricao}</C.CardDescription>
            </C.divTextosTTDD>
          </C.CardContainer>
        ))}
        </Slider>
      </C.ContentContainer>

      {/* Lista de Eps Disponíveis*/}
      
      <C.listaDeEpsDsiponiveis>
            <C.DivH1Ep>
              <h1>Epsódios</h1>
            </C.DivH1Ep>
            <C.telaMaisListEp>
              {iformacoesDoEp.map((item) => (
                <C.listaEp key={item.id}>
                  <C.ListadivImg>
                    <C.CardImage src={item.imageURL} alt="Imagem" />
                  </C.ListadivImg>
                  <C.ListadivTextosTTDD>
                    <C.ListaCardTitle>
                      {item.titulo && item.titulo.length > 21 ? `${item.titulo.substring(0, 21)}...` : item.titulo}
                    </C.ListaCardTitle>
                    <C.ListaCardDescription>
                      {item.descricao && item.descricao.length > 15 ? `${item.descricao.substring(0, 15)}...` : item.descricao}
                    </C.ListaCardDescription>
                    <C.DataTempoLista>
                      {item.dataUpload} {/* Substitua "dataUpload" pelo nome correto da propriedade de data de upload */}
                      {item.tempoAudio} {/* Substitua "tempoAudio" pelo nome correto da propriedade de tempo do áudio */}
                    </C.DataTempoLista>
                    <C.BtnReproduzirAudio onClick={() => handlePlayAudio(item.audioURL)}>
                      Reproduzir Áudio
                    </C.BtnReproduzirAudio> {/* Adicione este botão para reproduzir o áudio */}
                  </C.ListadivTextosTTDD>
                  {showPopup && audioURL === item.audioURL && (
                    <div className="audio-player-popup">
                      <audio src={audioURL} controls autoPlay={isPlaying} />
                      <button className="close-button" onClick={() => setShowPopup(false)}>
                        Fechar
                      </button>
                    </div>
                  )}
                </C.listaEp>
              ))}
            </C.telaMaisListEp>
            <C.btnVerMaisLista>Ver Mais</C.btnVerMaisLista>
          </C.listaDeEpsDsiponiveis>


      <C.ContentContainerComentarios>
        <h1>Comentários</h1>
        <C.formComentarios onSubmit={handleSubmitComment}>
          <C.inputComentario type="text" value={newComment} onChange={handleCommentChange} placeholder="Digite seu comentário..." />
          <C.btnEnviarComentario type="submit">Enviar <MdSend /></C.btnEnviarComentario>
        </C.formComentarios>

        <Slider {...settingsComentarios}>
          {commentsSnapshot?.docs.map((doc) => {
          const comment = doc.data();
          const isCurrentUserComment = comment.userId === user.uid;
          const commentDate = comment.timestamp?.toDate();

            return (
              <C.boxComentario key={doc.id}>
                <C.ContentComentario>
                  <C.InforUser>
                    <C.perfilUser>
                      {comment.userPhotoURL ? (
                        <C.divUsuario>
                          <C.imgUser src={comment.userPhotoURL} alt="User" />
                        </C.divUsuario>
                      ) : (
                        <span>Usuário</span>
                      )}
                      <C.labelEmailPerfil>
                        <span>{comment.userName}</span>
                      </C.labelEmailPerfil>
                      <C.CommentTimestamp>{commentDate?.toLocaleString()}</C.CommentTimestamp>
                    </C.perfilUser>
                    {isCurrentUserComment && (
                      <C.btnExcluirComentario onClick={() => { setCommentToDelete(doc.id); setShowConfirmationDialog(true) }} >
                        <CgTrash />
                      </C.btnExcluirComentario>
                    )}
                  </C.InforUser>
                  <C.contornoDoBoxMessagem
                      className={`content-text ${
                        comment.text && comment.text.length > 60 ? "expandable" : ""
                      } ${expandedComments.includes(doc.id) ? "open" : ""}`}
                    >
                      <C.contentText
                        className={`content-text ${
                          comment.text && comment.text.length > 50 ? "expandable" : ""
                        } ${expandedComments.includes(doc.id) ? "open" : ""}`}
                      >
                        {comment.text && comment.text.length > 50
                          ? `${comment.text.slice(0, 40)}...`
                          : comment.text}
                      </C.contentText>
                      {comment.text && comment.text.length > 70 && !showFullComment && (
                        <>
                          <C.btnVerMais
                            onClick={() => {
                              toggleExpandComment(doc.id);
                              setPopupOpenMaisComentario(!popupOpenMaisComentario);
                            }}
                          >
                            {expandedComments.includes(doc.id) ? "Ver mais" : "Ver mais"}
                          </C.btnVerMais>
                        </>
                      )}
                  </C.contornoDoBoxMessagem>

                </C.ContentComentario>
              </C.boxComentario>
            );
          })}
        </Slider>
          {showConfirmationDialog && (
              <C.ConfirmationDialog>
                <C.ConfirmationMessage>
                  Deseja realmente excluir o comentário?

                <C.ConfirmationButtons>
                  <C.ConfirmationButtonRed onClick={() => {deleteComment(commentToDelete); setShowConfirmationDialog(false);}} > Sim</C.ConfirmationButtonRed>
                  <C.ConfirmationButton onClick={() => {setShowConfirmationDialog(false);}}>Não</C.ConfirmationButton>
                </C.ConfirmationButtons>

                </C.ConfirmationMessage>

              </C.ConfirmationDialog>
            )};

            {popupOpenMaisComentario && (
              <C.PopupContainerMaisComentario>
                <C.corpoMaisMensagens>
                  <C.cabecaMaisMensagens>
                    <C.formComentariosMaisMensagens onSubmit={handleSubmitComment}>
                        <C.inputComentarioMaisMensagens type="text" value={newComment} onChange={handleCommentChange} placeholder="Digite seu comentário..." />
                        <C.btnEnviarComentarioMaisMensagens type="submit">Enviar <MdSend /></C.btnEnviarComentarioMaisMensagens>
                    </C.formComentariosMaisMensagens> 

                    <C.btnFecharMaisMensagens onClick={() => setPopupOpenMaisComentario(false)}>
                      X
                    </C.btnFecharMaisMensagens>
                  </C.cabecaMaisMensagens>

                  <C.telaMaisMensagens>                   

                  {commentsMaisMensagens.slice().reverse().map((comment) => {
                    const commentDate = comment.timestamp?.toDate();
                    const isCurrentUserComment = comment.userId === user.uid;

                    return (
                      <C.boxMensagensMaisMensagens key={comment.id}>
                        <C.UsuarioMaisMensagens>
                          <C.perfilUser>
                            {comment.userPhotoURL ? (
                              <C.divUsuarioMaisMensagens>
                                <C.imgUser src={comment.userPhotoURL} alt="User" />
                              </C.divUsuarioMaisMensagens>
                            ) : (
                              <span>Usuário</span>
                            )}
                            <C.labelEmailPerfil>
                              <span>{comment.userName}</span>
                            </C.labelEmailPerfil>
                            <C.CommentTimestamp>{commentDate?.toLocaleString()}</C.CommentTimestamp>
                            {isCurrentUserComment && (
                              <C.btnExcluirComentarioMaisMensagens onClick={() => { setCommentToDelete(comment.id); setShowConfirmationDialog(true) }} >
                                <CgTrash />
                              </C.btnExcluirComentarioMaisMensagens>
                            )}
                          </C.perfilUser>                        
                        </C.UsuarioMaisMensagens>
                        {comment.text}
                      </C.boxMensagensMaisMensagens>
                    );
                  })}







                  </C.telaMaisMensagens>

                </C.corpoMaisMensagens>

              </C.PopupContainerMaisComentario>
    
            )};



      </C.ContentContainerComentarios>

      <C.spaceHeightFooter>

        <Slider/>

      </ C.spaceHeightFooter >

    </C.Container>
  );
};

export default Content;
