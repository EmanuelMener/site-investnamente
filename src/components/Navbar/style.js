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
  width: 358px;
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
  justify-content: center;
  height: 20rem;
  width: 14rem;
  margin-top: 3rem;
  right: 2rem;
  background-color: #070709;
  border: 1px solid #303135;
  border-radius: 8px;

  transition: all 0.3s ease;
`;


export const BtnExit = styled.button`
    width: 90%;
    height: 4rem;
    

    border: 1px solid #26272B;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #26272c99;
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


export const labelExit = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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