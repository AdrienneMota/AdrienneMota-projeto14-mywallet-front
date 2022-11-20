import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {Container, FormDefault, LinkDefault} from "../assets/style/DefaultStyle"
import BASEURL from "../constants/url"
import { useAuth } from "../contextapi/auth"

export default function Login(){
    const [form, setForm] = useState({email: '', password: ''})
    const navigate = useNavigate()
    const {setToken} = useAuth()

    function handleSubmit(e){
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    function userSubmit(e){
        e.preventDefault()

        axios.post(`${BASEURL}/sign-in`, form)
            .then((res) => {
                localStorage.setItem('token', JSON.stringify(res.data))
                setToken(res.data)
                navigate('/registros')
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }
    return(
     <Container>
        <FormDefault>
            <p>MyWallet</p>
            <form onSubmit={userSubmit}>
                <input 
                    type="email" 
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={handleSubmit}/>
                <input 
                    type="password" 
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleSubmit}/>
                <button type="submit">Entrar</button>
            </form>
        </FormDefault>
        <Link to="/cadastro">
            <LinkDefault>Primeira vez? Cadastre-se</LinkDefault>
        </Link>
     </Container>
    )
}



