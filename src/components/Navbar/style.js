import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9999;
    top: 0;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px;
    border-bottom: 1px solid #303135;
    background-color: #070709;

    transition: all 0.3s ease;

    @media (max-width: 780px) {
      
    }
`;

export const Img = styled.img`
  width: 55px;
`;

export const barraProgresso = styled.div`
  display: flex;
  width:40rem;
  height: 45px;
  border-radius: 8px;
  background-color: #26272B;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const barraProgressoICON = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  color: #909193;
  font-size: 17.5px;
  width:10%;
  height: 100%;
  border-radius: 8px 0 0 8px;
  background-color: transparent;
`;

export const barraProgressoINPUT = styled.input`
  width:90%;
  height: 100%;
  border:none;
  background-color: transparent;
  font-weight: bold;  
  
  border-radius: 0 8px 8px 0;
  outline: none;
  color: #909193;
`;

export const contaEnav = styled.div`
  width: 25rem;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  //background-color: #FFFF5510;
  @media (max-width: 780px) {
    display: none;
  }
`;

export const btnContato = styled.button`
  width: 185px;
  height: 45px;
  border: none;
  border-radius: 5rem;
  background: #E80050;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor:pointer;
  font-weight: bold;
  font-size: 20px;
  color: #F4F4F5;
`;

export const btnInf = styled.button`
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    color: #F4F4F5;
    background: none;
    border: none;
    cursor:pointer;
`;

export const btnSino = styled.button`
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #F4F4F5;
    background: none;
    border: none;
    cursor:pointer;
`;

export const btnPessoa = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border:none;
    background: #26272B;
    color: #97989A;
    font-weight: bold;
    font-size: 24px;
    cursor:pointer;

    transition: all 0.3s ease;
`;

export const Avatar = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 50%;
`;

export const PopupContainer = styled.div`
  position: absolute;
  display: ${props => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 20rem;
  width: 17rem;
  margin-top: 3rem;
  padding:2.3rem 0;
  right: 2rem;
  background-color: #070709;
  border: 1px solid #303135;
  border-radius: 8px 0 8px 8px;

  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -1px;
    border-style: solid;
    background-color: #303135;
    transform: translateY(-50%);
    border-width: 20px 0 20px 20px;
    border-color: transparent transparent transparent #070709;  
    border-top: none; /* Adicionando esta linha para remover o triângulo extra */
    }
`;

export const BtnExit = styled.button`
    width: 90%;
    height: 4rem;
    

    border: 1px solid #26272B;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    color: #58585C;
    font-weight: bold;
    font-size: 1rem;
    margin: 0 1rem;

    padding: 1rem;

    border-radius: 8px;

    &:hover {
      background-color: #26272B;
      color: #F4F4F5;
    }
    transition: all 0.3s ease;
`;

export const BtnExcluirConta = styled.button`
    width: 90%;
    height: 4rem;
    

    border: 1px solid #26272B;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    color: #58585C;
    font-weight: bold;
    font-size: 1rem;
    margin: 0 1rem;

    padding: 1rem;

    border-radius: 8px;

    &:hover {
      background-color: #26272B;
      color: #F4F4F5;
    }
    transition: all 0.3s ease;
`;

export const BtnPerfil = styled.div`
    width: 90%;
    height: 5rem;
    

    border: 1px solid #26272B;

    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: space-between;
    background-color: #26272c99;
    color: #58585C;
    font-weight: bold;
    font-size: 1rem;
    

    padding: 1rem;

    border-radius: 8px;

    &:hover {
      background-color: #26272B;
      color: #F4F4F5;
    }
    transition: all 0.3s ease;
`;

export const fotoPerfil = styled.div`
    margin-top: -1.9rem !important;
    background-color: #f4f4f4;
    border-radius: 50%;
`;

export const labelExit = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    justify-content: space-between;
   
    align-items: center;
`;

export const labelEmail = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
`;

export const iconExit = styled.div`
  width: auto;
  height: auto;
  font-size: 1.7rem;
  display: flex;
`;

export const PopupContainerINFO = styled.div`
  position: absolute;
  display: ${props => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 15rem;
  width: 30rem;
  margin-top: 21rem;
  right: 10rem;
  background-color: #070709;
  border: 1px solid #303135;
  border-radius: 8px 0 8px 8px;

  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -1px;
    border-style: solid;
    background-color: #303135;
    transform: translateY(-50%);
    border-width: 20px 0 20px 20px;
    border-color: transparent transparent transparent #070709;  
    border-top: none; /* Adicionando esta linha para remover o triângulo extra */
    }
`;

export const TEXTinfo = styled.div`
  display: flex;
  flex-direction:column;
  width: 90%;
  height: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #F4F4F5;
  font-size: 14px;
`;

export const iconINFO = styled.div`
  width: auto;
  height: auto;
  font-size: 2.5rem;
  display: flex;
`;

//upload botão //FORM

export const bntUpload = styled.button`
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #F4F4F5;
    background: none;
    border: none;
    cursor:pointer;
`;

export const PopupContainerUPLOAD = styled.div`
  position: fixed;
  display: ${props => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  top: 80px; /* Altura da navbar */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.92); /* Cor escura com transparência */
  z-index: 9999;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 90%;
  max-width: 50rem;
  margin: 0 auto;
  border: 1px solid #303135;
  border-radius: 8px;
  padding: 1rem;
  background-color: #17181A;
`;

export const FormField = styled.div`
  margin-bottom: 1rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 21rem; 
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #303135;
  background-color: #26272B;
  color: #F4F4F5;
  resize: vertical;
  outline: none;
  font-family: inherit;
  font-size: 14px;

  ::placeholder {
    color: #909193;
  }

  :focus {
    border-color: #E80050;
  }
`;

export const Textarea = styled.textarea`
  width: 21rem;
  height: 8rem;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #303135;
  background-color: #26272B;
  color: #F4F4F5;
  resize: vertical;
  outline: none;
  font-family: inherit;
  font-size: 1rem;

  ::placeholder {
    color: #909193;
  }

  :focus {
    border-color: #E80050;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 11.5rem;
  background-color: #E80050;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:60%;
  font-size:18px;

  &:hover {
    background-color: #BB0035;
  }
`;


//Excluir Conta

export const PopupContainerExcluirConta = styled.div`
  position: fixed;
  display: ${props => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  top: 80px; /* Altura da navbar */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.92); /* Cor escura com transparência */
  z-index: 9999;
`;

export const ContainerExcluirConta = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  border: 1px solid #303135;
  border-radius: 8px;
  padding: 1rem 3.5rem;
  background-color: #17181A;
`;

export const DivImgDespedida = styled.img`
  width: 30%;
  height: 80%;
  //border: 1px solid #303135;
  border-radius: 8px;
`;

export const campoDeMinagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width: 64%;
  height: 80%;
  background-color: #F4F4F5;
  border-radius: 8px;
`;


export const PrimaryButton = styled.button`
  background-color: #E80050;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
`;


export const SecondaryButton = styled.button`
  background-color: transparent;
  color: #007bff;
  padding: 10px 20px;
  border: none;
  //border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
`;

export const botoesDoCancelamento = styled.div`
  width: 80%;
  height: auto;
`;

export const TextorNotUnscribe = styled.div`
  width: 80%;
  height: auto;
  padding: 1rem 0;
  //background-color: red;
`;


//novoUpload

export const FileInput = styled.input`
  margin-bottom: 10px;
`;

export const Progress = styled.progress`
  display: block;
  width: 60%;
  height: 20px;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const divprogressUpload = styled.div`
  width: 60%;
  //background-color:yellow;
  margin-bottom: 2rem;
  display:flex;
  align-items:center;
  justify-content: center;
  position:relative;
`;

export const spanProgressPercentage = styled.span`
  position:absolute;
  width:10%;
  font-size: 1rem;
  //background-color:red;
  display:flex;
`;

export const progressUpload = styled.progress`

  width: 100%;
  height: 1rem;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 2rem;
  //border: solid #c4c4c499 0.1px;
  border-radius: 5px;
  color:red;

  &::-webkit-progress-bar {
  background-color: #c4c4c420;
  border-radius: 5px;
  color:red;
  }

  &::-webkit-progress-value {
  background-color: #007bff;
  border-radius: 5px;}
`;

export const spanProgress = styled.span`
  margin-top: 2rem;
`;

// mesagem contato

export const MensagemContainer = styled.div`
  position: fixed;
  display: ${props => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 80px; /* Altura da navbar */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.92); /* Cor escura com transparência */
  z-index: 9999;
`;

export const MensagemTitulo = styled.h2`
  /* Estilos do título da troca de mensagens */
`;

export const MensagemForm = styled.form`
  width: 90%;
  max-width: 500px;
  height: 80%;
  background-image: url("/img/imaFundoApp.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const headMensagemForm = styled.div`
  width: 100%;
  height: 20%;
  background-color: #c4c4c470;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
`;

export const bodyMensagemForm = styled.div`
  width: 100%;
  height: 60%;
  background-image: url("/img/imaFundoApp.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

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


export const footerMensagemForm = styled.div`
  width: 100%;
  height: 20%;
  background-color: #c4c4c470;
  border-radius: 0 0 8px 8px;
  display:flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
`;

export const divFooterBarra = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50%;
  border-radius: 50rem;
  background-color:red;
`;

export const MensagemInput = styled.input`
    width: 80%;
    height: 100%;
    border-radius: 50rem 0 0 50rem ;
    border: none;
    padding: 1rem;
    outline: none;
`;

export const MensagemEnviarBtn = styled.button`
    width: 20%;
    height: 100%;
    border-radius:  0 50rem 50rem 0;
    border: none;
`;

export const divUsuarioMensagem = styled.div`
  display: flex;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #26272B;
  transition: all 0.3s ease;
  background-color:red;
  overflow: hidden;
`;

export const imgFundo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const nomeUsuario = styled.div`
  width: auto;
  height: auto;
`;

export const boxMensagemAmigo = styled.div`
  width: auto;
  max-width: 45%;
  height: auto;
  border-radius: 0 8px 8px 8px;
  background-color: #c4c4c4;
  color: #000;
  margin-top: 0.5rem;
`;

export const boxMensagemMe = styled.div`
  width: auto;
  max-width: 45%;
  height: auto;
  border-radius: 8px 0 8px 8px;
  background-color: #000;
  color: #fff;
  margin-top: 0.5rem;
  right: 0;
`;


//Media Query
export const maisNavMediaQuery = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: red;
  display: none;
  @media (max-width: 780px) {
    display: block;
  }
`;

export const iconsGeral = styled.div`
    height: 70%;
    width: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background: #e80050;
    border: none;
    border-radius: 8px;
    cursor:pointer;
    transition: all 0.3s ease;
    &.fechado {
    font-size: 20px;
    height: 4rem;
  }

`;

export const btnColtrollMenu = styled.button`
  position: relative;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  width: 100%;
  height: 4rem;
  margin-right: 0;
  margin-top: 0;
  border:none;
  background-color: transparent;
  transition: all 0.3s ease;
  &.fechado {
    font-size: 10px;
    transition: all 0.3s ease;
  }
`;