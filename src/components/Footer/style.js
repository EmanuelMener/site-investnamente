import styled from "styled-components";

export const boxContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  width: calc(100vw - 4.5rem); /* Subtrai a altura do Navbar do total da altura da viewport */
  margin-left: -4rem;
  height: 7rem;
  //background-color: red;
  z-index: 9999;
  transition: all 0.3s ease;
  flex-direction: column; /* Adicionado */

  @media (max-width: 780px) {
    margin: 0 auto;
    width: 100%;
    height: 4rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #b5b5b5;
  background-color: rgba(88, 88, 92, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease;

  @media (max-width: 780px) {
    margin: 0 auto;
    width: 95%;
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 5px;
  }
`;


export const boxIfGeralEp = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
    //background-color: red;
    justify-content: start;
  }
`;


export const divImgConv = styled.div`
  width: 5rem;
  height: 5rem;

  @media (max-width: 780px) {
    width: 3rem;
    height: 3rem;
  }  
`;
export const InfoDoEPimgConv = styled.img`
    object-fit: cover;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;

export const divInfoEpConv = styled.div`
  width: auto;
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 1rem;
`;

export const DivcentralControll = styled.div`
  width: auto;
  height: auto;
  display: flex;
   align-items: center;
   justify-content: center;
   //margin-left: 1rem;

   @media (max-width: 780px) {
      width: 30%;
      height: 100%;
      //display: none;
    }  
`;

export const InfoDoEPimgConvTEXTO = styled.h1`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    //margin-left: 1rem;
    width: 20.4rem;
    color: #DADADA;
    font-size: 18px;

    @media (max-width: 780px) {
      font-size: 12px;
      width: auto;
    }  
`;

export const InfoDoEPimgConvTEMPO = styled.h1`
    width: 20.4rem;
    color: #757575;
    font-size: 15px;

    @media (max-width: 780px) {
      display: none;
    }  
`;

export const centralDeControle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    height: 100%;
    //background-color: yellow;
`;

export const centralDeControleCONTROLLS = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    height: 70%;
    font-size: 3rem;
    color: #58585C;
    background-color: transparent;
    cursor: pointer;
`;

export const bntPlay = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    color: #58585C;
    background: white;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    border: none;
    font-size: 2rem;
    cursor: pointer;
`;


export const centralDeControlePROGRESSBAR = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: auto;
    color: white;
    margin: 1rem;
    
`;

export const linhaProgresso = styled.div`
    width: 75%;
    height: 4px;
    background-color: white;
    border-radius: 1rem;
`;


export const InfoDaDireita = styled.div`
    width: 25vw;
    height: 100%;
    //background-color: red;
`;


export const bntPlay2 = styled.div`
  position: absolute;
  display: flex; //${props => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 5rem;
  margin-top: -2.5rem;
  right: 15rem;
  background-color: #E80050;
  border: 3px solid #303135;
  border-radius: 50%;
  color: #F4F4F5;
  font-size: 2.5rem;
  transition: all 0.3s ease;

  /* Pseudoelemento para exibir a seta para baixo */

  &:hover {
    /* Estilização ao passar o mouse por cima */
    background-color: #E80010;
    cursor: pointer;
  }

  &:hover::after {
    /* Altera o conteúdo para a seta para baixo ao passar o mouse por cima */
    content: "↓";
  }
`;


export const ControlsContainer = styled.div`
  /* Estilos do container dos controles */
`;

export const ControlButton = styled.button`
  /* Estilos dos botões de controle */
`;

export const AudioPlayerContainer = styled.div`
  /* Estilos do container do player de áudio */
`;

export const BsSoundwave = styled.div`
  /* Estilos do container do player de áudio */
`;

export const boxDivMaisControles = styled.div`
  width: 20%;
  height: 100%;
  background-color: #26272B;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 780px) {
      display: none;
    }  
`;

export const btnPlay = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 3rem;
  border: none;
  font-size: 2rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;