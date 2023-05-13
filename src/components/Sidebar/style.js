import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px; /* Posição em relação à navbar */
  width: 20rem;
  height: 100vh; /* Altura ajustada para excluir a navbar e a footer */
  background-color: #070709; /* Cor de fundo da sidebar */
  border-right: 1px solid #303135;
  z-index: 2; /* Defina um valor maior que o z-index do carrossel */
`;

export const menuHome = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65px;
  margin-left: 0;
  margin-top: 30px;
  background-color: #303135;
  border-radius: 0 8px 8px 0;
  font-size: 1.3rem;
  color: #F4F4F5;
`;

export const Div = styled.div`
  position: absolute;
  width: 10px;
  height: 100%;
  background-color: #E80050;
  left: 0;
`;

export const Span = styled.span`
    width: 10px;
`;

export const LinhaDivSection = styled.div`
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20px;
    top: 5rem;

`;

export const LinhaDivSectionDentro = styled.div`
    position:absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 1px;
    top: 5rem;
    background-color: #303135;
`;

export const textDivSectionDentro = styled.div`
    position:absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 20px;
    background-color: #303135;
    font-size: 10px;
    color: #757575;
    border-radius: 2rem;
    top: 4.4rem;
`;

export const menuMinhaLivraria = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65px;
  margin-left: 0;
  margin-top: 11rem;
  background-color: transparent;
  border-radius: 0 8px 8px 0;
  font-size: 1.3rem;
  color: #58585C;

  &:hover {
      background-color: #26272B;
      color: #F4F4F5;
    }
  transition: all 0.3s ease;
`;

export const menuMinhaLivrariaDiv = styled.div`
  position: absolute;
  width: 10px;
  height: 100%;
  background-color: transparent;
  left: 0;
`;

export const menuMinhaLivrariaSpan = styled.span`
    width: 10px;
`;

