import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; /* Subtrai a altura do Navbar do total da altura da viewport */
  margin-left: 4.5rem;
  background-color: #070709;
  color: white;
  position: fixed;
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
  height: 30rem;
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
  height: 20rem;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 5px solid #26272B;
  padding: 16px;
  margin: 0 8px !important; /* Ajuste o espaçamento horizontal conforme necessário */
`;

export const CardImage = styled.img`

  width: 100%;
  height: 10rem;
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
  //background-color: #26272B;
  padding: 0 1rem;

  //position:relative;
`;

export const perfilUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  border: 3px solid #070709;
  border-radius: 8px;
  width: 20rem;
  height: 10rem;
  color: black;
  margin-top: 2rem;
  
`;

export const ContentComentario = styled.div`
  //position: relative;
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

export const labelEmailPerfil = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    margin-left: 1rem;
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

export const contornoDoBoxMessagem = styled.div`
  //background-color:blue;
  width: 100%;
  height:100%;
  padding: 0.5rem 0;
  //position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
  //position: relative;
  cursor: pointer;

  //background-color:red;

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

export const CommentTimestamp = styled.div`
  width: auto;
  height: 1rem;
  background-color: #c4c4c450;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-radius: 8px;
  margin-left: 1rem;
`;

export const btnExcluirComentarioMaisMensagens = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C4C4C450;
  color: #26272B;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 8px;
  border: 1px solid #26272B50;
  padding: 0.1rem;
  margin-left: 1rem;

  &:hover {
    background-color: red;
    color: #F4F4F5;
  }
  transition: all 0.3s ease;
`;

//SCROLLBAR



//space Height Footer

export const spaceHeightFooter = styled.div`
  width: 80%;
  max-width: 55rem;
  height: 300px !important;
  border-radius: 8px !important;
  margin-top: 100px;
  background-color: #26272B;
  margin-bottom: 12rem;
  padding: 0 1rem;
`;



export const btnVerMais = styled.button`
  background-color: #3F3F3F30;
  color: #333;
  border: none;
  border-radius:1rem;
  padding: 0.3rem 0.8rem;
  font-size: 14px;
  cursor: pointer;
`;

//Mais mensagens

export const PopupContainerMaisComentario = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  transition: all 0.3s ease;
`;


export const corpoMaisMensagens = styled.div`
  width: 60rem;
  height: 70%;
  background-color: #26272B;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 8px;

  transition: all 0.3s ease;
`;

export const cabecaMaisMensagens = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 8px;
  //border: 1px solid #f4f4f520;
  background-color: transparent;
  padding: 0.3rem;
  display: flex; 
  align-items: center;
  justify-content: space-between;
`;

export const formComentariosMaisMensagens = styled.form`
  margin-top:0;
  height: 2rem;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  background-color: #26272B;
  border-radius: 8px;
`;

export const inputComentarioMaisMensagens = styled.input`
  width: 70%;
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

export const btnEnviarComentarioMaisMensagens = styled.button`
  width: 20%;
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

export const telaMaisMensagens = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  border: 1px solid #f4f4f520;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: auto;
  transition: all 0.3s ease;
  &::-webkit-scrollbar {
    width: 0.5rem; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background-color: #07070950; /* Cor do fundo da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #E8005060; /* Cor da barra de rolagem */
    border-radius: 5px; /* Raio do canto da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #E80050; /* Cor da barra de rolagem ao passar o mouse */
  }
`;

export const btnFecharMaisMensagens = styled.button`
  width:4rem;
  height: 2.5rem;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease;
`;

export const boxMensagensMaisMensagens = styled.div`
  width: 100%;
  height: auto;
  //background-color: blue;
  margin-bottom: 1rem;
  padding: 1rem;
  transition: all 0.3s ease;
  //border: 1px solid #f4f4f520;
  word-wrap: break-word;
`;


export const UsuarioMaisMensagens = styled.div`
  width: 100%;
  height: 2rem;
  //background-color: red;
  display:flex;
  align-items: center;
  justify-content: start;
  transition: all 0.3s ease;
`;

export const divUsuarioMaisMensagens = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #26272B;
  transition: all 0.3s ease;
`;

//Confirmação da Exclusão

export const ConfirmationDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  transition: all 0.3s ease;
`;

export const ConfirmationMessage = styled.div`
  background-color: #17181A;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 50rem;
  height: 10rem;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
  transition: all 0.3s ease;
`;

export const ConfirmationButtons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;
`;

export const ConfirmationButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0c7cd5;
  }
`;


export const ConfirmationButtonRed = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: #f4f4f5;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;


