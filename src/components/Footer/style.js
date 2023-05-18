import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    display:flex;
    bottom: 0;
    width: 100vw;
    height: 7rem;
    border-top: 1px solid #B5B5B5;
    background-color: rgba(88,88,92, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(0px);
    z-index: 2; /* Defina um valor maior que o z-index do carrossel */
    
`;

export const InfoDoEP = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    width: 25vw;
    height: 100%;

    margin: 0 3rem;
`;

export const InfoDoEPimgConv = styled.img`
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 8px;
`;

export const InfoDoEPimgConvTEXTO = styled.h1`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 20.4rem;
    color: #DADADA;
    font-size: 18px;
`;

export const InfoDoEPimgConvTEMPO = styled.h1`
    width: 20.4rem;
    color: #757575;
    font-size: 15px;
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
`;