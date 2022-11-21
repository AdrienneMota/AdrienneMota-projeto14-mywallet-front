
import axios from "axios"
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import {Container, FormDefault, LinkDefault} from "../assets/style/DefaultStyle"
import BASEURL from "../constants/url.js"

export default function Cadastro(){
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirm] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    
    function addUser(e){
        e.preventDefault()
        
        if(password !== confirmPassword) return alert('Confirmação de senha incorreta.')
        
        const body = { name, email, password }

        axios.post(`${BASEURL}/sign-up`, body)
            .then(res => navigate('/'))
            .catch((error) => console.log(error.response.data))
    }

    return(
        <Container>
        <FormDefault>
            <p>MyWallet</p>
            <form onSubmit={addUser}>
                <input 
                    type="text" 
                    placeholder="Nome"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <input 
                    type="password" 
                    placeholder="Senha"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                <input 
                    type="password" 
                    placeholder="Confirme a senha"
                    name="confirm"
                    value={confirmPassword}
                    onChange={(e) => setConfirm(e.target.value)}/>

                <button type="submit">Cadastrar</button>
            </form>
        </FormDefault>
        <Link to="/">
            <LinkDefault>Já tem uma conta? Entre agora!</LinkDefault>
        </Link>
     </Container>
    )
}

