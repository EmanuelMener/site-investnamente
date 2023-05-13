import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 20rem);
  height: 100vh;
  margin-left: 20rem;
  background-color: #070709;
  color: white;
  position: relative;
  z-index: 1;
  display: flex; /* Adicione essa propriedade para centralizar verticalmente */
  align-items: start; /* Adicione essa propriedade para centralizar verticalmente */
  justify-content: center; /* Adicione essa propriedade para centralizar horizontalmente */
`;


export const ContainerIMG = styled.div`
  width: 80%;
  max-width: 55rem;
  height: 25rem;
  border-radius: 8px;
  padding-top:100px;
`;

export const CarouselImage = styled.img`
  width: 90%;
  max-width: 55rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 8px;
  `;