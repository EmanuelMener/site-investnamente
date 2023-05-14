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
  padding-top: 100px;
`;

export const CarouselImage = styled.img`
  width: 90%;
  max-width: 55rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 8px;
`;


//card google podcast

export const ContentContainer = styled.div`
  width: 80%;
  max-width: 55rem;
  height: 14.3rem;
  border-radius: 8px !important;
  margin-top: 100px;
  background-color: #26272B;
  padding: 0 1rem;
`;

export const CardContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  width: 30%; /* Ajuste a largura conforme necessário */
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 5px solid #26272B;
  padding: 16px;
  margin: 0 8px !important; /* Ajuste o espaçamento horizontal conforme necessário */
`;

export const CardImage = styled.img`
  max-width: 3rem; /* Ajuste a largura da imagem conforme necessário */
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #555555;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #555555;
`;


//dost

export const CustomDotsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const CustomDot = styled.li`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #26272B;
  cursor: pointer;
`;

// Restante do seu código de estilos