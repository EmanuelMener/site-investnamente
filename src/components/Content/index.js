import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import * as C from "./style";

// Componente estilizado para o botão "Prev"
const CustomPrevArrow = styled.button`
  /* Estilos personalizados aqui */
  width: 108px;
  height: 108px;
  background: #F4F4F5;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 66px;
`;

// Componente estilizado para o botão "Next"
const CustomNextArrow = styled.button`
  /* Estilos personalizados aqui */
  width: 108px;
  height: 108px;
  background: #F4F4F5;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 66px;
`;

const Content = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />, // Componente estilizado para o botão "Prev"
    nextArrow: <CustomNextArrow />, // Componente estilizado para o botão "Next"
  };

  return (
    <C.Container>
      <C.ContainerIMG>
        <Slider {...settings}>
          <C.CarouselImage src="img/episodio-001.png" alt="Imagem 1" />
          <C.CarouselImage src="img/episodio-002.png" alt="Imagem 2" />
          <C.CarouselImage src="img/episodio-001.png" alt="Imagem 3" />
          {/* Adicione mais imagens conforme necessário */}
        </Slider>
      </C.ContainerIMG>
    </C.Container>
  );
};

export default Content;
