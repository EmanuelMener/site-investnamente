import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    //height: 100vh;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;


    outline: none;
    font-size: 18px;
    padding: 14px 18px;
    border-radius: 5rem;
    border: 1px solid #fff;
    background-color: #E80050;
    color: #fff;
    cursor: pointer;
`;

export const Span = styled.span`
    width: 10px;
`;

export const Div = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
