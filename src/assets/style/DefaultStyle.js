import styled from "styled-components"

export const Container = styled.div`
    height: 667px;
    width: 375px;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FormDefault = styled.div`

    width: 326px;

    p{
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 24px;
        text-align: center;
    }

    input{
        height: 58px;
        width: 326px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 13px;
        outline: none;
        font-size: 20px;
        border: none;
    }
    button{
        height: 58px;
        width: 326px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        margin-bottom: 20px;
        font-size: 20px;
        outline: none;
        color: #FFFFFF;
        font-weight: 700;
        cursor: pointer;
    }
` 
export const LinkDefault = styled.a`
    outline: none;
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    cursor: pointer;
`