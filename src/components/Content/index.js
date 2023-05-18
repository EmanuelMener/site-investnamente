import React, { useState, useEffect } from "react";
import * as EmailValidator from "email-validator";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as C from "./style";
import {settingsEmAlta, settingsComentarios} from "./carroussel";
import "./slider.css";
import { MdSend } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useCollection} from "react-firebase-hooks/firestore";

import firebase from "firebase/compat/app";

const Content = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user] = useAuthState(auth);
  const userName = user.displayName; //este
  const commentsRef = db.collection("comments");
  const [commentsSnapshot] = useCollection(commentsRef);


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
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), // adiciona um campo de timestamp para ordenação
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
    if (commentsSnapshot) {
      const fetchedComments = commentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setComments(fetchedComments);
    }
  }, [commentsSnapshot]);

  return (
    <C.Container>
      <C.ContentContainer>
        <h1>Em Alta</h1>
        <Slider {...settingsEmAlta}>
          <C.CardContainer>
            <C.CardImage src="img/entrevistaJenni.png" alt="Imagem 1" />
            <C.CardTitle>Título do Episódio 1</C.CardTitle>
            <C.CardDescription>Descrição do Episódio 1</C.CardDescription>
          </C.CardContainer>

          <C.CardContainer>
            <C.CardImage src="img/entrevistaJenni.png" alt="Imagem 1" />
            <C.CardTitle>Título do Episódio 1</C.CardTitle>
            <C.CardDescription>Descrição do Episódio 1</C.CardDescription>
          </C.CardContainer>

          <C.CardContainer>
            <C.CardImage src="img/entrevistaJenni.png" alt="Imagem 1" />
            <C.CardTitle>Título do Episódio 1</C.CardTitle>
            <C.CardDescription>Descrição do Episódio 1</C.CardDescription>
          </C.CardContainer>

          <C.CardContainer>
            <C.CardImage src="img/entrevistaJenni.png" alt="Imagem 1" />
            <C.CardTitle>Título do Episódio 1</C.CardTitle>
            <C.CardDescription>Descrição do Episódio 1</C.CardDescription>
          </C.CardContainer>

          <C.CardContainer>
            <C.CardImage src="img/entrevistaJenni.png" alt="Imagem 1" />
            <C.CardTitle>Título do Episódio 1</C.CardTitle>
            <C.CardDescription>Descrição do Episódio 1</C.CardDescription>
          </C.CardContainer>

          <C.CardContainer>
            <C.CardImage src="img/entrevistaJenni.png" alt="Imagem 1" />
            <C.CardTitle>Título do Episódio 1</C.CardTitle>
            <C.CardDescription>Descrição do Episódio 1</C.CardDescription>
          </C.CardContainer>

          <C.CardContainer>
            <C.CardImage src="img/entrevistaJenni.png" alt="Imagem 1" />
            <C.CardTitle>Título do Episódio 1</C.CardTitle>
            <C.CardDescription>Descrição do Episódio 1</C.CardDescription>
          </C.CardContainer>

          {/* Adicione mais cards conforme necessário */}
        </Slider>
      </C.ContentContainer>

      <C.ContentContainerComentarios>
        <h1>Comentários</h1>
        <C.formComentarios onSubmit={handleSubmitComment}>
          <C.inputComentario type="text" value={newComment} onChange={handleCommentChange} placeholder="Digite seu comentário..." />
          <C.btnEnviarComentario type="submit">Enviar <MdSend /></C.btnEnviarComentario>
        </C.formComentarios>

        <Slider {...settingsComentarios}>
          {commentsSnapshot?.docs.map((doc) => {
            const comment = doc.data();
            const isCurrentUserComment = comment.userId === user.uid; // Verifica se o comentário pertence ao usuário atualmente autenticado

            return (
              <C.boxComentario key={doc.id}>
                <C.ContentComentario>
                  <C.InforUser>
                    <C.perfilUser>
                      {comment.userPhotoURL ? (
                        <C.divUsuario><C.imgUser src={comment.userPhotoURL} alt="User" /></C.divUsuario>
                      ) : (<span>Usuário</span>)}

                      <C.labelEmailPerfil><span>{comment.userName}</span></C.labelEmailPerfil>
                    </C.perfilUser>

                    {isCurrentUserComment && (
                      <C.btnExcluirComentario onClick={() => deleteComment(doc.id)}><CgTrash /></C.btnExcluirComentario>
                    )}
                  </C.InforUser>

                  <C.contentText> {comment.text} </C.contentText>
                </C.ContentComentario>
              </C.boxComentario>
            );
          })}
        </Slider>



      </C.ContentContainerComentarios>

      <C.spaceHeightFooter>

        <Slider/>

      </ C.spaceHeightFooter >

    </C.Container>
  );
};

export default Content;
