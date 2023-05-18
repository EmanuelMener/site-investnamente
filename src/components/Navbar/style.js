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

