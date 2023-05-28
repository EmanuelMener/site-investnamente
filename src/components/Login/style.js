import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    //height: 100vh;
    align-items: center;
    justify-content: center;
    
    
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    outline: none;
    font-size: 18px;
    padding: 14px 18px;
    border-radius: 8px;
    border: none;
    background-color: #E80050;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
`;

export const Span = styled.span`
    width: 10px;
`;

export const Div = styled.div`
    height: 100vh;
    color: #c4c4c4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("img/bgLogin.png");
    background-size: cover;
    background-repeat:no-repeat;
`;

export const h1 = styled.h1`
    font-weight:bold;
    font-size: 3rem;
    color: white;
    margin-top: 1rem;
    text-align: center;
`;

export const icons = styled.div`
    height: 1rem;
    height: 1rem;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    border-radius: 8px;
    margin-left: 0.5rem;
    background-color: #AB003B;
`;

export const img = styled.img`
    width: 90%;
    max-width: 300px;
    background-color:#070709;
    padding: 50px;
    border-radius: 8px;
    border:1px solid #303135
`;