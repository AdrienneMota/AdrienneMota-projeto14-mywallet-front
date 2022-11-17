import { Link } from "react-router-dom"
import {Container, FormDefault, LinkDefault} from "../assets/style/DefaultStyle"

export default function Login(){
    return(
     <Container>
        <FormDefault>
            <p>MyWallet</p>
            <form>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button>Entrar</button>
            </form>
        </FormDefault>
        <Link to="/cadastro">
            <LinkDefault>Primeira vez? Cadastre-se</LinkDefault>
        </Link>
     </Container>
    )
}



