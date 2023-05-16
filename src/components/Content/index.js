import React, { useState, useEffect } from "react";
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

import firebase from "firebase/app";

const Content = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user] = useAuthState(auth);
  const userName = user.displayName; //este

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
      const commentRef = await db.collection("comments").add({
        text: text,
      });
      const newComment = {
        id: commentRef.id,
        text: text,
      };

      setComments([...comments, newComment]);
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
    const fetchComments = async () => {
      try {
        const commentsRef = await db.collection("comments").get();
        const fetchedComments = commentsRef.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setComments(fetchedComments);
      } catch (error) {
        console.error("Erro ao buscar os comentários:", error);
      }
    };

    fetchComments();
  }, []);

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
          {comments.map((comment) => (
            <C.boxComentario key={comment.id}>
              <C.ContentComentario>
                <C.InforUser>
                  <C.perfilUser>
                    {user?.photoURL ? (
                      <C.divUsuario><C.imgUser src={user.photoURL} alt="User" /></C.divUsuario>
                    ) : (<span>Usuário</span>)}

                    <C.labelEmailPerfil><span>{userName}</span></C.labelEmailPerfil>
                  </C.perfilUser>

                  <C.btnExcluirComentario onClick={() => deleteComment(comment.id)}><CgTrash /></C.btnExcluirComentario>
                </C.InforUser>

                <C.contentText> {comment.text} </C.contentText>
              </C.ContentComentario>
            </C.boxComentario>
          ))}
        </Slider>
      </C.ContentContainerComentarios>


    </C.Container>
  );
};

export default Content;
