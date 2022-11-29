import { Container, TituloPage } from "../assets/style/DefaultStyle";
import { useEffect, useState } from "react";
import sign_out from "../assets/img/sign-out.png";
import styled from "styled-components";
import Registro from "../components/Registro";
import BotoesRegistro from "../components/BotoesRegistro";
import BASEURL from "../constants/url"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import maskValue from "../helpers/maskValue";

export default function Registros() {
    const [status, setStatus] = useState(true)
    const token = localStorage.getItem("token")
    const [registros, setRegistros] = useState(undefined)
    const [name, setName] = useState('')
    const [saldo, setSaldo] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${BASEURL}/registries`, { headers : { "Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then((res) => {
                setRegistros(res.data.registriesUser)
                setName(res.data.name)
                setSaldo(res.data.balance)               
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }, [])

    function signOut(){
        axios.delete(`${BASEURL}/sign-out`, { headers : { "Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then((res) => {
                navigate('/')
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }


    return (
        <Container>
            <TituloPage>
                <p>Olá, {name}</p>
                    <img onClick={signOut} src={sign_out} alt="botão deslogar" />  
            </TituloPage>
            <Extrato>
                <ContainerRegistros>
                    <Registro status={status} setStatus={setStatus} registros={registros}/>
                </ContainerRegistros>
                <Saldo valor={saldo}>
                    <p>Saldo</p> 
                    <p className="valoratual">{maskValue(saldo)}</p></Saldo>
            </Extrato>
            <BotoesRegistro/>
        </Container>    
    )
}

const Extrato = styled.div`
    height: 446px;
    width: 326px;
    border: none;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-bottom: 13px;
    font-size: 18px;
`
const ContainerRegistros = styled.div`
    height: 355px;
    width: 326px;
`
const Saldo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    width: 300px;
    margin-top: 20px;
    .valoratual{
        color: ${prop => (prop.valor > 0)? "#03AC00" : "#C70000"}
    }
`
