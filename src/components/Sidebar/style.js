import styled from "styled-components";

export const Container = styled.div`
  --sidebar-width: 20rem; /* Variável para armazenar a largura do Sidebar */

  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  width: var(--sidebar-width); /* Use a variável para definir a largura */
  height: 100vh;
  background-color: #070709;
  border-right: 1px solid #303135;
  z-index: 2;
  transition: all 0.3s ease;
  &.fechado{
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    transition: all 0.3s ease;
  }
`;

export const menuHome = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 4rem;
  margin-left: 0;
  margin-top: 30px;
  background-color: #303135;
  border-radius: 0 8px 8px 0;
  font-size: 1.3rem;
  color: #F4F4F5;
  transition: all 0.3s ease;
  &.fechado{
    position: relative;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
`;

export const Div = styled.div`
  position: absolute;
  width: 10px;
  height: 100%;
  background-color: #E80050;
  left: 0;
  transition: all 0.3s ease;
  &.fechado{
      position: absolute;
      width: 20px;
      height: 5px;
      bottom: 2px;
      left: auto;
      right: auto;
      border-radius: 1rem;
      transition: all 0.3s ease;
  }
`;

export const Span = styled.span`
    width: 10px;
    transition: all 0.3s ease;
    &.fechado{
      background-color: red;
      transition: all 0.3s ease;
  }
`;

export const LinhaDivSection = styled.div`
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20px;
    top: 2rem;
    transition: all 0.3s ease;
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
    transition: all 0.3s ease;
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
    transition: all 0.3s ease;
`;

export const menuMinhaLivraria = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65px;
  margin-left: 0;
  margin-top: 8rem;
  background-color: transparent;
  border-radius: 0 8px 8px 0;
  font-size: 1.3rem;
  color: #58585C;

  &:hover {
      background-color: #26272B;
      color: #F4F4F5;
    }
  transition: all 0.3s ease;

  &.fechado{
    width: 100%;
    border-radius: 8px;
    margin-left: center;
    transition: all 0.3s ease;
  }
`;

export const menuMinhaLivrariaDiv = styled.div`
  position: absolute;
  width: 10px;
  height: 100%;
  background-color: transparent;
  left: 0;
  transition: all 0.3s ease;

  &.fechado{
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: auto;
    transition: all 0.3s ease;
  }
`;

export const menuMinhaLivrariaSpan = styled.span`
    width: 10px;
    transition: all 0.3s ease;
`;


export const iconsGeral = styled.div`
    height: 100%;
    width: 3.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background: #e80050;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
    cursor:pointer;
    transition: all 0.3s ease;
    &.fechado {
    font-size: 20px;
    height: 4rem;
  }

`;

export const btnColtrollSidebar = styled.button`
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
