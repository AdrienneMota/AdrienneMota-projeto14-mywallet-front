import { Container, TituloPage } from "../assets/style/DefaultStyle";
import { useState } from "react";
import sign_out from "../assets/img/sign-out.png";
import styled from "styled-components";
import Registro from "../components/Registro";
import BotoesRegistro from "../components/BotoesRegistro";

export default function Registros() {
    const [status, setStatus] = useState(false)
    const token = localStorage.getItem("token")

    

    return (
        <Container>
            <TituloPage>
                <p>Olá, fulano</p>
                <img src={sign_out} alt="botão deslogar" />
            </TituloPage>

            <ContainerRegistros>
                <Registro status={status}/>
            </ContainerRegistros>

            <BotoesRegistro/>
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




