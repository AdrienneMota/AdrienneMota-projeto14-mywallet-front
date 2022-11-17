import { Container, TituloPage } from "../assets/style/DefaultStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import doorout from "../assets/img/sign-out.png";
import styled from "styled-components";
import Registro from "../components.js/Registro";


export default function Registros() {
    const [status, setStatus] = useState(true)
    const navegate = useNavigate()

    function callRegistro(tipo){ // transformar isso num context api
        navegate('/novoregistro', {state: {tipo}})
    }

    return (
        <Container>
            <TituloPage>
                <p>Olá, fulano</p>
                <img src={doorout} alt="botão deslogar" />
            </TituloPage>

            <ContainerRegistros>
                <Registro status={status}/>
            </ContainerRegistros>

            <ContainerBtn>
                <button onClick={() => callRegistro('entrada')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </button>                
                <button onClick={() => callRegistro('saida')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saída</p>
                </button>
            </ContainerBtn>
        </Container>
    )
}

const ContainerRegistros = styled.div`
    height: 446px;
    width: 326px;
    border: none;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 13px;
    font-size: 18px;
`
const ContainerBtn = styled.div`
    
    width: 326px;
    display: flex;
    justify-content: space-between;

    button{
        height: 144px;  
        width: 155px;
        border: none;
        border-radius: 5px;
        background-color: #A328D6;
        margin-bottom: 16px;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p{
            font-size: 17px;
            font-weight: 700;
            text-align: left;
            width: 64px;
            height: 40px;
        }
        ion-icon{
            width: 22px;
            height: 22px;
            font-weight: bolder;
        }
    }
`



