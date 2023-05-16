import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 20rem);
  height: 100vh; /* Subtrai a altura do Navbar do total da altura da viewport */
  margin-left: 20rem;
  background-color: #070709;
  color: white;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  overflow: auto;

    /* Estilização da barra de rolagem */
  &::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background-color: #070709; /* Cor do fundo da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #E8005080; /* Cor da barra de rolagem */
    border-radius: 5px; /* Raio do canto da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #E80050; /* Cor da barra de rolagem ao passar o mouse */
  }
`;


export const ContainerIMG = styled.div`
  width: 80%;
  max-width: 55rem;
  height: 25rem;
  border-radius: 8px;
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

// Comentários

export const ContentContainerComentarios = styled.div`
  width: 80%;
  max-width: 55rem;
  height: 18rem;
  border-radius: 8px !important;
  margin-top: 100px;
  background-color: #26272B;
  padding: 0 1rem;


`;

export const formComentarios = styled.form`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 8px;
  margin-top: 1rem;
`;

export const inputComentario = styled.input`
  width: 82%;
  height: 100%;
  border-radius: 0;
  outline: none;
  border: none;
  color: #f4f4f5;
  border-bottom: 1px solid #f4f4f550;
  padding: 1rem;
  background-color: transparent;

  &:focus{
    border-bottom: 1.5px solid #0080BF;
  }
`;

export const btnEnviarComentario = styled.button`
  width: 15%;
  height: 100%;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0080BF;
  color: #F4F4F580;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid #0080BF;

  padding: 1rem 1.5rem;

  border-radius: 8px;

  &:hover {
    background-color: #0080BF;
    color: #F4F4F5;
  }
  transition: all 0.3s ease;
`;

export const boxComentario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:#f4f4f5;
  border: 3px solid #26272B;
  border-radius: 8px;
  width: 20rem;
  height: 8rem;
  color: black;
  margin-top: 2rem;
  
`;

export const ContentComentario = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

`;

export const labelEmail = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
`;

export const InforUser = styled.div`
  width: 100%;
  height: auto;
  //background-color: red;
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
`;

export const divUsuario = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #26272B;
`;

export const imgUser = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const contentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 2.8em;
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: attr(data-text);
    position: absolute;
    top: -20px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    z-index: 9999;
    white-space: normal;
  }
`;

export const btnExcluirComentario = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0080BF22;
  color: #26272B50;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 8px;
  border: 1px solid #26272B50;
  padding: 0.2rem;

  &:hover {
    background-color: red;
    color: #F4F4F5;
  }
  transition: all 0.3s ease;
`;


//SCROLLBAR
