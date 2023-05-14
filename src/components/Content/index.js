import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import * as C from "./style";
import "./slider.css";

const Content = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <C.Container>
      <C.ContentContainer>
        <h1>Em Alta</h1>
        <Slider {...settings}>
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
    </C.Container>
  );
};

export default Content;
