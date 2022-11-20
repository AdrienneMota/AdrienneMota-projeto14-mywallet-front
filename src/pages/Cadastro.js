
import axios from "axios"
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import {Container, FormDefault, LinkDefault} from "../assets/style/DefaultStyle"
import BASEURL from "../constants/url.js"

export default function Cadastro(){
    const [form, setForm] = useState({ name: "", email: "", password: ""})
    const navigate = useNavigate()

    function handleForm(e){
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    function addUser(e){
        e.preventDefault()
        axios.post(`${BASEURL}/sign-up`, form)
            .then(res => navigate("/"))
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
                    value={form.name}
                    onChange={handleForm}/>
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleForm}/>
                <input 
                    type="password" 
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleForm}/>

                {/* <input type="password" placeholder="Confirme a senha"/> */}

                <button type="submit">Cadastrar</button>
            </form>
        </FormDefault>
        <Link to="/">
            <LinkDefault>Já tem uma conta? Entre agora!</LinkDefault>
        </Link>
     </Container>
    )
}

